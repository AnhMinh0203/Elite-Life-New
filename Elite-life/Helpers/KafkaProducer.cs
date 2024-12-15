using Confluent.Kafka;

namespace Elite_life.Helpers
{
    public class KafkaProducer
    {
        private readonly string _bootstrapServers;
        private readonly string _topic;

        public KafkaProducer(IConfiguration configuration)
        {
            var kafkaConfig = configuration.GetSection("Kafka");
            _bootstrapServers = kafkaConfig["BootstrapServers"];
            _topic = kafkaConfig["Topic"];
        }

        public async Task SendMessageAsync(string message)
        {
            var config = new ProducerConfig { BootstrapServers = _bootstrapServers };

            using var producer = new ProducerBuilder<Null, string>(config).Build();
            try
            {
                var result = await producer.ProduceAsync(_topic, new Message<Null, string> { Value = message });
                Console.WriteLine($"Message sent to {result.TopicPartitionOffset}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending message: {ex.Message}");
            }
        }
    }
}
