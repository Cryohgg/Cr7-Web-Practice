const topDesignImg2 = document.getElementById("topDesignImg2")
const topDesignArrow = document.getElementById("topDesignArrow")
const thisIsText = document.getElementById("thisIsText")

topDesignImg2.onmouseover = function() {
    topDesignArrow.classList.add("topDesignArrowHover")
    thisIsText.classList.add("thisIsTextOp")
}
topDesignImg2.onmouseout = function() {
    topDesignArrow.classList.remove("topDesignArrowHover")
    thisIsText.classList.remove("thisIsTextOp")
}
