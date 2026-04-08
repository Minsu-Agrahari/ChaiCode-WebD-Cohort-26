// class TreeNode {
//     val: number;
//     left: TreeNode | null;
//     right: TreeNode | null;

//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = val ?? 0;
//         this.left = left ?? null;
//         this.right = right ?? null;
//     }
// }

// class Solution2 {
//     findNodeBST(root: TreeNode | null, val: number): TreeNode | null {

//         if (root === null) return null;

//         if (root.val === val) return root;

//         if (val < root.val) {
//             return this.findNodeBST(root.left, val);
//         } else {
//             return this.findNodeBST(root.right, val);
//         }
//     }
// }

// const root1 = new TreeNode(
//     4,
//     new TreeNode(
//         2,
//         new TreeNode(1),
//         new TreeNode(3),
//     ),
//     new TreeNode(7)
// );
// console.log(findNodeBST(root1, 2));

// const root2 = new TreeNode(
//     4,
//     new TreeNode(2,
//         new TreeNode(1),
//         new TreeNode(3),
//     ),
//     new TreeNode(7),
// );

// console.log(findNodeBST(root2, 5));
