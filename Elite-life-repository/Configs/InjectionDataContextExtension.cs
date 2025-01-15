using Elite_life_datacontext.Utils;
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
            services.AddSingleton<PasswordManager>();
            services.AddSingleton<TokenUtils>();
            services.AddSingleton<IAuthenticateRepos, AuthenticateRepository>();
            services.AddSingleton<IStatisticalRepos, StatisticalRepository>();
            services.AddSingleton<ICollaboratorRepos, CollaboratorRepository>();
            services.AddSingleton<IWalletsRepos, WalletsRepository>();
            services.AddSingleton<IOrderRepos, OrderRepository>();
            services.AddSingleton<IWalletDetailRepos, WalletDetailReoisitory>();
            services.AddSingleton<IBoothRepos, BoothRepository>();
            services.AddSingleton<IProfileRepos, ProfileRespository>();
            services.AddSingleton<IWithdrawalRepos, WithdrawalRepository>();
            services.AddSingleton<IWarehouseRepos, WarehouseRepository>();
            services.AddSingleton<IPermissionRepos, PermissionRepository>();
            services.AddSingleton<IVnpay, Vnpay>();
            services.AddSingleton<IMemberManagerRepons, MemberRepository>();
        }
    }
}