using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Elite_life_datacontext.Utils
{
    public class TreeNode
    {
        public string Label { get; set; }
        public bool Expanded { get; set; } = true; // Mặc định là expanded
        public string Data { get; set; }
        public List<TreeNode> Children { get; set; } = new List<TreeNode>();
    }
}
