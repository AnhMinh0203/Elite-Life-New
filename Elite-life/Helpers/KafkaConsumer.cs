using Confluent.Kafka;

namespace Elite_life.Helpers
{
    public class KafkaConsumer
    {
        private readonly string _bootstrapServers;
        private readonly string _topic;
        private readonly string _groupId;

        public KafkaConsumer(IConfiguration configuration)
        {
            var kafkaConfig = configuration.GetSection("Kafka");
            _bootstrapServers = kafkaConfig["BootstrapServers"];
            _topic = kafkaConfig["Topic"];
            _groupId = kafkaConfig["GroupId"];
        }

        public void StartConsuming(CancellationToken cancellationToken)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = _bootstrapServers,
                GroupId = _groupId,
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
            consumer.Subscribe(_topic);

            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    var result = consumer.Consume(cancellationToken);
                    Console.WriteLine($"Message received: {result.Message.Value}");
                }
            }
            catch (OperationCanceledException)
            {
                Console.WriteLine("Consumer closed.");
            }
            finally
            {
                consumer.Close();
            }
        }
    }
}
