// =========================================
// ORIDRIVE AUTO
// MAIN JAVASCRIPT
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------------------
    // CART
    // -----------------------------------------

    let cart = JSON.parse(localStorage.getItem("oridriveCart")) || [];

    const cartCountElements = document.querySelectorAll(".cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");


    // -----------------------------------------
    // UPDATE CART COUNT
    // -----------------------------------------

    function updateCartCount() {

        const totalItems = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        cartCountElements.forEach(element => {
            element.textContent = totalItems;
        });
    }


    // -----------------------------------------
    // SAVE CART
    // -----------------------------------------

    function saveCart() {

        localStorage.setItem(
            "oridriveCart",
            JSON.stringify(cart)
        );

        updateCartCount();
    }


    // -----------------------------------------
    // SHOW MESSAGE
    // -----------------------------------------

    function showMessage(message) {

        let messageBox = document.querySelector(".cart-message");

        if (!messageBox) {

            messageBox = document.createElement("div");

            messageBox.className = "cart-message";

            document.body.appendChild(messageBox);
        }

        messageBox.textContent = message;

        messageBox.classList.add("show");

        setTimeout(() => {

            messageBox.classList.remove("show");

        }, 2500);
    }


    // -----------------------------------------
    // ADD PRODUCT TO CART
    // -----------------------------------------

    addToCartButtons.forEach(button => {

        button.addEventListener("click", () => {

            const productName =
                button.dataset.product;

            const productPrice =
                Number(button.dataset.price);


            const existingProduct =
                cart.find(
                    item => item.name === productName
                );


            if (existingProduct) {

                existingProduct.quantity += 1;

            } else {

                cart.push({

                    name: productName,

                    price: productPrice,

                    quantity: 1

                });

            }


            saveCart();


            showMessage(
                `${productName} added to your cart.`
            );

        });

    });


    // -----------------------------------------
    // INITIALIZE
    // -----------------------------------------

    updateCartCount();

});
/* ================================= */
/* SETTINGS POPUP */
/* ================================= */

document.addEventListener("DOMContentLoaded", () => {

    const settingsButton =
        document.getElementById("settingsButton");

    const settingsOverlay =
        document.getElementById("settingsOverlay");

    const settingsClose =
        document.getElementById("settingsClose");

    const languageButtons =
        document.querySelectorAll(".language-option");


    /* Open settings */

    if (settingsButton && settingsOverlay) {

        settingsButton.addEventListener("click", () => {

            settingsOverlay.classList.add("active");

        });

    }


    /* Close settings */

    if (settingsClose && settingsOverlay) {

        settingsClose.addEventListener("click", () => {

            settingsOverlay.classList.remove("active");

        });

    }


    /* Close when clicking outside */

    if (settingsOverlay) {

        settingsOverlay.addEventListener("click", (event) => {

            if (event.target === settingsOverlay) {

                settingsOverlay.classList.remove("active");

            }

        });

    }


    /* Close with Escape */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape" && settingsOverlay) {

            settingsOverlay.classList.remove("active");

        }

    });


    /* ============================== */
    /* LANGUAGE */
    /* ============================== */

    const savedLanguage =
        localStorage.getItem("oridriveLanguage") || "en";


    function updateLanguageButtons(language) {

        languageButtons.forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.language === language
            );

        });

    }


    updateLanguageButtons(savedLanguage);


    languageButtons.forEach(button => {

        button.addEventListener("click", () => {

            const language =
                button.dataset.language;

            localStorage.setItem(
                "oridriveLanguage",
                language
            );

            updateLanguageButtons(language);

            /*
             * Reload the page so the selected
             * language can be applied everywhere.
             */

            window.location.reload();

        });

    });

});
