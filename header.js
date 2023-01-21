const topDesignImg2 = document.getElementById("topDesignImg2")
const topDesignArrow = document.getElementById("topDesignArrow")

topDesignImg2.onmouseover = function() {
    topDesignArrow.classList.add("topDesignArrowHover")
}
topDesignImg2.onmouseout = function() {
    topDesignArrow.classList.remove("topDesignArrowHover")
}