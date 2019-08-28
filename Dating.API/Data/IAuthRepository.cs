using System.Threading.Tasks;
using Dating.API.Models;

// repository hi hai but bahar hai ----

namespace Dating.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         //method user passed user and password will return User
         Task<User> Login(string username,string password);
         Task<bool> UserExists(string username);
    }
}