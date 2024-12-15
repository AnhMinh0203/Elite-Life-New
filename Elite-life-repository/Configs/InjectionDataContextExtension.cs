using Elite_life_repository;
using Elite_life_repository.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Elite_life_repository.Configs
{
    public static class InjectionRepositoryExtension
    {
        public static void DependencyInjectionRepository(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddSingleton<IAuthRepos, AuthRepository>();
        }
    }
}