//二叉树
const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D"
      },
      right: {
        val: "E"
      }
    },
    right: {
      val: "C",
      right: {
        val: "F"
      }
    }
}

function getValue(obj) {
    console.log(obj.val);
    if (obj.left) {
        getValue(obj.left);
    } else if (obj.right) {
        getValue(obj.right);
    }
}