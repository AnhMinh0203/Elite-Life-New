using Confluent.Kafka;
using System.Text.Json;

namespace Elite_life.Helpers
{
    public class KafkaService
    {
        private readonly string _bootstrapServers;
        private readonly string _topic;
        private readonly string _groupId;

        public KafkaService(IConfiguration configuration)
        {
            var kafkaConfig = configuration.GetSection("Kafka");
            _bootstrapServers = kafkaConfig["BootstrapServers"];
            _topic = kafkaConfig["Topic"];
            _groupId = kafkaConfig["GroupId"];
        }

        // Gửi tin nhắn
        public async Task SendMessageAsync<T>(T message)
        {
            var config = new ProducerConfig { BootstrapServers = _bootstrapServers };
            using var producer = new ProducerBuilder<Null, string>(config).Build();
            var serializedMessage = JsonSerializer.Serialize(message);

            await producer.ProduceAsync(_topic, new Message<Null, string> { Value = serializedMessage });
        }

        // Nhận tin nhắn
        public List<string> Consume(CancellationToken cancellationToken)
        {
            var config = new ConsumerConfig
            {
                BootstrapServers = _bootstrapServers,
                GroupId = "weather_group",
                AutoOffsetReset = AutoOffsetReset.Earliest
            };

            var messages = new List<string>();

            using var consumer = new ConsumerBuilder<Ignore, string>(config).Build();
            consumer.Subscribe(_topic);

            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    var result = consumer.Consume(cancellationToken);
                    messages.Add(result.Message.Value);
                }
            }
            catch (OperationCanceledException)
            {
                // Consumer stopped
            }
            finally
            {
                consumer.Close();
            }

            return messages;
        }
    }
}
