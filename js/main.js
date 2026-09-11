document.addEventListener("DOMContentLoaded", () => {


    /* ================================= */
    /* CART */
    /* ================================= */

    let cart =
        JSON.parse(
            localStorage.getItem("oridriveCart")
        ) || [];


    const cartCountElements =
        document.querySelectorAll(".cart-count");


    const addToCartButtons =
        document.querySelectorAll(".add-to-cart");


    function updateCartCount() {

        const totalItems =
            cart.reduce(
                (total, item) =>
                    total + item.quantity,
                0
            );


        cartCountElements.forEach(element => {

            element.textContent =
                totalItems;

        });

    }


    function saveCart() {

        localStorage.setItem(
            "oridriveCart",
            JSON.stringify(cart)
        );

        updateCartCount();

    }


    function showMessage(message) {

        let messageBox =
            document.querySelector(
                ".cart-message"
            );


        if (!messageBox) {

            messageBox =
                document.createElement("div");

            messageBox.className =
                "cart-message";

            document.body.appendChild(
                messageBox
            );

        }


        messageBox.textContent =
            message;


        messageBox.classList.add(
            "show"
        );


        setTimeout(() => {

            messageBox.classList.remove(
                "show"
            );

        }, 2500);

    }


    addToCartButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const productName =
                    button.dataset.product;

                const productPrice =
                    Number(
                        button.dataset.price
                    );


                const existingProduct =
                    cart.find(
                        item =>
                            item.name ===
                            productName
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

            }
        );

    });


    updateCartCount();



    /* ================================= */
    /* SETTINGS POPUP */
    /* ================================= */

    const settingsButton =
        document.getElementById(
            "settingsButton"
        );


    const settingsOverlay =
        document.getElementById(
            "settingsOverlay"
        );


    const settingsClose =
        document.getElementById(
            "settingsClose"
        );


    if (
        settingsButton &&
        settingsOverlay
    ) {

        settingsButton.addEventListener(
            "click",
            () => {

                settingsOverlay.classList.add(
                    "active"
                );

            }
        );

    }


    if (
        settingsClose &&
        settingsOverlay
    ) {

        settingsClose.addEventListener(
            "click",
            () => {

                settingsOverlay.classList.remove(
                    "active"
                );

            }
        );

    }


    if (settingsOverlay) {

        settingsOverlay.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    settingsOverlay
                ) {

                    settingsOverlay.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                settingsOverlay
            ) {

                settingsOverlay.classList.remove(
                    "active"
                );

            }

        }
    );



    /* ================================= */
    /* LANGUAGE SYSTEM */
    /* ================================= */

    const translations = {

        en: {

            home: "Home",

            shop: "Shop",

            about: "About",

            reviews: "Reviews",

            delivery: "Delivery",

            contact: "Contact",

            cart: "Cart",

            settings: "Settings",

            settingsDescription:
                "Customize your OriDrive Auto experience.",

            language:
                "🌐 Language",

            heroLabel:
                "PREMIUM AUTOMOTIVE ACCESSORIES",

            heroTitle:
                "Upgrade Your Drive.",

            heroDescription:
                "Premium car accessories designed to make every drive better.",

            shopNow:
                "Shop Now",

            learnMore:
                "Learn More",

            qualityProducts:
                "Quality Products",

            fastDelivery:
                "Fast Delivery",

            customerSupport:
                "Customer Support",

            secureShopping:
                "Secure Shopping",

            featured:
                "FEATURED",

            featuredProducts:
                "Featured Products",

            featuredDescription:
                "Explore some of our most popular automotive accessories.",

            phoneAccessories:
                "Phone Accessories",

            carAccessories:
                "Car Accessories",

            electronics:
                "Electronics",

            viewAllProducts:
                "View All Products",

            aboutUs:
                "ABOUT US",

            aboutTitle:
                "Built for people who care about their drive.",

            aboutText:
                "OriDrive Auto provides premium automotive accessories for drivers who want quality, style and practicality.",

            customerReviews:
                "Customer Reviews",

            reviewMessage:
                "Your experience matters to us.",

            deliveryTitle:
                "We deliver your order to you.",

            deliveryText:
                "Delivery options are available in Addis Ababa and selected locations.",

            contactTitle:
                "Get in touch with OriDrive Auto.",

            allRights:
                "All rights reserved.",

            shopTitle:
                "Find Your Next Upgrade.",

            shopDescription:
                "Explore our collection of automotive accessories.",

            searchProducts:
                "Search products...",

            all:
                "All",

            byd:
                "BYD",

            carInterior:
                "Car Interior",

            noProducts:
                "No products found.",

            tryAnotherSearch:
                "Try another search or category."

        },


        am: {

            home: "መነሻ",

            shop: "ሱቅ",

            about: "ስለ እኛ",

            reviews: "ግምገማዎች",

            delivery: "ደረሰኝ",

            contact: "ያግኙን",

            cart: "ጋሪ",

            settings: "ቅንብሮች",

            settingsDescription:
                "የOriDrive Auto የድረ-ገጽ ተሞክሮዎን ያብጁ።",

            language:
                "🌐 ቋንቋ",

            heroLabel:
                "ፕሪሚየም የመኪና አክሰሰሪዎች",

            heroTitle:
                "መኪናዎን ያሻሽሉ።",

            heroDescription:
                "እያንዳንዱን ጉዞ የተሻለ ለማድረግ የተመረጡ የመኪና አክሰሰሪዎች።",

            shopNow:
                "አሁን ይግዙ",

            learnMore:
                "ተጨማሪ ይወቁ",

            qualityProducts:
                "ጥራት ያላቸው ምርቶች",

            fastDelivery:
                "ፈጣን አቅርቦት",

            customerSupport:
                "የደንበኛ ድጋፍ",

            secureShopping:
                "ደህንነታማ ግዢ",

            featured:
                "ተመራጭ",

            featuredProducts:
                "ተመራጭ ምርቶች",

            featuredDescription:
                "ከተወዳጅ የመኪና አክሰሰሪዎቻችን ውስጥ ይመልከቱ።",

            phoneAccessories:
                "የስልክ አክሰሰሪ",

            carAccessories:
                "የመኪና አክሰሰሪ",

            electronics:
                "ኤሌክትሮኒክስ",

            viewAllProducts:
                "ሁሉንም ምርቶች ይመልከቱ",

            aboutUs:
                "ስለ እኛ",

            aboutTitle:
                "ለመኪናቸው ትኩረት ለሚሰጡ ሰዎች የተሰራ።",

            aboutText:
                "OriDrive Auto ጥራት፣ ውበት እና ተግባራዊነትን ለሚፈልጉ አሽከርካሪዎች ፕሪሚየም የመኪና አክሰሰሪዎችን ያቀርባል።",

            customerReviews:
                "የደንበኞች ግምገማ",

            reviewMessage:
                "የእርስዎ ተሞክሮ ለእኛ አስፈላጊ ነው።",

            deliveryTitle:
                "ትዕዛዝዎን ወደ እርስዎ እናደርሳለን።",

            deliveryText:
                "በአዲስ አበባ እና በተመረጡ አካባቢዎች የአቅርቦት አገልግሎት አለ።",

            contactTitle:
                "ከOriDrive Auto ጋር ይገናኙ።",

            allRights:
                "መብቱ የተጠበቀ ነው።",

            shopTitle:
                "ቀጣዩን ማሻሻያዎን ያግኙ።",

            shopDescription:
                "የመኪና አክሰሰሪዎቻችንን ይመልከቱ።",

            searchProducts:
                "ምርቶችን ይፈልጉ...",

            all:
                "ሁሉም",

            byd:
                "BYD",

            carInterior:
                "የመኪና ውስጥ",

            noProducts:
                "ምንም ምርት አልተገኘም።",

            tryAnotherSearch:
                "ሌላ ፍለጋ ወይም ምድብ ይሞክሩ።"

        },


        ar: {

            home: "الرئيسية",

            shop: "المتجر",

            about: "من نحن",

            reviews: "التقييمات",

            delivery: "التوصيل",

            contact: "اتصل بنا",

            cart: "السلة",

            settings: "الإعدادات",

            settingsDescription:
                "خصص تجربتك مع OriDrive Auto.",

            language:
                "🌐 اللغة",

            heroLabel:
                "إكسسوارات سيارات فاخرة",

            heroTitle:
                "طوّر تجربة قيادتك.",

            heroDescription:
                "إكسسوارات سيارات مميزة مصممة لجعل كل رحلة أفضل.",

            shopNow:
                "تسوق الآن",

            learnMore:
                "اعرف المزيد",

            qualityProducts:
                "منتجات عالية الجودة",

            fastDelivery:
                "توصيل سريع",

            customerSupport:
                "دعم العملاء",

            secureShopping:
                "تسوق آمن",

            featured:
                "مميز",

            featuredProducts:
                "منتجات مميزة",

            featuredDescription:
                "اكتشف بعض إكسسوارات السيارات الأكثر شعبية لدينا.",

            phoneAccessories:
                "إكسسوارات الهاتف",

            carAccessories:
                "إكسسوارات السيارات",

            electronics:
                "إلكترونيات",

            viewAllProducts:
                "عرض جميع المنتجات",

            aboutUs:
                "من نحن",

            aboutTitle:
                "صُمم لمن يهتم بتجربة قيادته.",

            aboutText:
                "تقدم OriDrive Auto إكسسوارات سيارات مميزة للسائقين الذين يبحثون عن الجودة والأناقة والعملية.",

            customerReviews:
                "تقييمات العملاء",

            reviewMessage:
                "تجربتك مهمة بالنسبة لنا.",

            deliveryTitle:
                "نوصل طلبك إليك.",

            deliveryText:
                "تتوفر خيارات التوصيل في أديس أبابا ومناطق مختارة.",

            contactTitle:
                "تواصل مع OriDrive Auto.",

            allRights:
                "جميع الحقوق محفوظة.",

            shopTitle:
                "اعثر على ترقيتك القادمة.",

            shopDescription:
                "اكتشف مجموعتنا من إكسسوارات السيارات.",

            searchProducts:
                "ابحث عن المنتجات...",

            all:
                "الكل",

            byd:
                "BYD",

            carInterior:
                "داخل السيارة",

            noProducts:
                "لم يتم العثور على منتجات.",

            tryAnotherSearch:
                "جرب بحثًا أو فئة أخرى."

        }

    };



    /* ================================= */
    /* APPLY LANGUAGE */
    /* ================================= */

    function applyLanguage(language) {

        const dictionary =
            translations[language] ||
            translations.en;


        /* Text */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.dataset.i18n;


                if (
                    dictionary[key] !== undefined
                ) {

                    element.textContent =
                        dictionary[key];

                }

            });


        /* Placeholders */

        document
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
            .forEach(element => {

                const key =
                    element.dataset
                        .i18nPlaceholder;


                if (
                    dictionary[key] !== undefined
                ) {

                    element.placeholder =
                        dictionary[key];

                }

            });


        /* Direction */

        if (language === "ar") {

            document.documentElement.dir =
                "rtl";

            document.documentElement.lang =
                "ar";

        } else if (language === "am") {

            document.documentElement.dir =
                "ltr";

            document.documentElement.lang =
                "am";

        } else {

            document.documentElement.dir =
                "ltr";

            document.documentElement.lang =
                "en";

        }


        /* Language buttons */

        document
            .querySelectorAll(
                ".language-option"
            )
            .forEach(button => {

                button.classList.toggle(
                    "active",

                    button.dataset.language ===
                    language
                );

            });


        localStorage.setItem(
            "oridriveLanguage",
            language
        );

    }



    /* ================================= */
    /* LOAD SAVED LANGUAGE */
    /* ================================= */

    const savedLanguage =
        localStorage.getItem(
            "oridriveLanguage"
        ) || "en";


    applyLanguage(
        savedLanguage
    );



    /* ================================= */
    /* LANGUAGE BUTTONS */
    /* ================================= */

    document
        .querySelectorAll(
            ".language-option"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const language =
                        button.dataset.language;


                    applyLanguage(
                        language
                    );


                    /*
                     * Close popup after
                     * selecting language.
                     */

                    if (settingsOverlay) {

                        settingsOverlay.classList.remove(
                            "active"
                        );

                    }

                }
            );

        });



    /* ================================= */
    /* SHOP SEARCH */
    /* ================================= */

    const searchInput =
        document.getElementById(
            "product-search"
        );


    const categoryButtons =
        document.querySelectorAll(
            ".category-button"
        );


    const products =
        document.querySelectorAll(
            ".shop-product"
        );


    const noProducts =
        document.getElementById(
            "no-products"
        );


    let selectedCategory =
        "all";


    function filterProducts() {

        const searchTerm =
            searchInput
                ? searchInput.value
                    .toLowerCase()
                    .trim()
                : "";


        let visibleProducts = 0;


        products.forEach(product => {

            const name =
                product.dataset.name
                    .toLowerCase();


            const category =
                product.dataset.category
                    .toLowerCase();


            const matchesSearch =
                name.includes(
                    searchTerm
                );


            const matchesCategory =
                selectedCategory === "all" ||
                category.includes(
                    selectedCategory
                );


            if (
                matchesSearch &&
                matchesCategory
            ) {

                product.style.display =
                    "";

                visibleProducts++;

            } else {

                product.style.display =
                    "none";

            }

        });


        if (noProducts) {

            noProducts.style.display =
                visibleProducts === 0
                    ? "block"
                    : "none";

        }

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            filterProducts
        );

    }


    categoryButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                categoryButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                selectedCategory =
                    button.dataset.category;


                filterProducts();

            }
        );

    });


});
/* ================================= */
/* VROOM AI ASSISTANT */
/* ================================= */

const vroomButton =
    document.getElementById("vroomButton");

const vroomChat =
    document.getElementById("vroomChat");

const vroomClose =
    document.getElementById("vroomClose");

const vroomForm =
    document.getElementById("vroomForm");

const vroomInput =
    document.getElementById("vroomInput");

const vroomMessages =
    document.getElementById("vroomMessages");



/* Open VROOM */

if (vroomButton && vroomChat) {

    vroomButton.addEventListener(
        "click",
        () => {

            vroomChat.classList.add(
                "active"
            );

            setTimeout(() => {

                if (vroomInput) {
                    vroomInput.focus();
                }

            }, 350);

        }
    );

}


/* Close VROOM */

if (vroomClose && vroomChat) {

    vroomClose.addEventListener(
        "click",
        () => {

            vroomChat.classList.remove(
                "active"
            );

        }
    );

}


/* Add message */

function addVroomMessage(
    message,
    sender
) {

    const messageElement =
        document.createElement("div");

    messageElement.className =
        `vroom-message ${sender}`;

    messageElement.innerHTML =
        message;

    vroomMessages.appendChild(
        messageElement
    );

    vroomMessages.scrollTop =
        vroomMessages.scrollHeight;

}


/* VROOM response */

function getVroomResponse(
    message
) {

    const text =
        message
            .toLowerCase()
            .trim();


    if (
        text.includes("product") ||
        text.includes("shop") ||
        text.includes("buy")
    ) {

        return `
            🛍️ You can browse all our products
            on the <strong>Shop</strong> page.
            <br><br>
            We've got automotive accessories,
            phone accessories, electronics and more.
        `;

    }


    if (
        text.includes("phone") ||
        text.includes("holder")
    ) {

        return `
            📱 We have magnetic phone holders
            designed for your car.
            <br><br>
            Check the Shop page for the current
            products and prices.
        `;

    }


    if (
        text.includes("price") ||
        text.includes("cost")
    ) {

        return `
            💰 Product prices are displayed
            directly on the Shop page.
            <br><br>
            No mysterious "DM for price" nonsense.
            Humanity has suffered enough.
        `;

    }


    if (
        text.includes("contact") ||
        text.includes("phone") ||
        text.includes("call")
    ) {

        return `
            📞 You can contact OriDrive Auto
            through the Contact section of the website.
        `;

    }


    if (
        text.includes("delivery") ||
        text.includes("deliver")
    ) {

        return `
            🚚 OriDrive Auto provides delivery
            in Addis Ababa and selected locations.
            <br><br>
            Delivery details can be confirmed
            when placing your order.
        `;

    }


    if (
        text.includes("byd")
    ) {

        return `
            🚘 We carry BYD-related accessories,
            including key fobs and phone accessories.
            <br><br>
            Check the BYD category in the Shop.
        `;

    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {

        return `
            👋 Hey there!
            <br><br>
            I'm <strong>VROOM</strong>,
            OriDrive Auto's little digital assistant.
            🚗
            <br><br>
            What are you looking for?
        `;

    }


    if (
        text.includes("vroom")
    ) {

        return `
            🚗 That's me!
            <br><br>
            Small car. Big responsibilities.
            Very questionable career choice.
        `;

    }


    return `
        🤔 I'm still learning.
        <br><br>
        Try asking me about
        <strong>products, prices, BYD, delivery,
        or contacting OriDrive Auto.</strong>
    `;

}



/* ================================= */
/* SEND MESSAGE */
/* ================================= */

function sendVroomMessage(
    message
) {

    if (!message.trim()) {
        return;
    }


    addVroomMessage(
        message,
        "user"
    );


    vroomInput.value = "";


    setTimeout(() => {

        const response =
            getVroomResponse(
                message
            );

        addVroomMessage(
            response,
            "bot"
        );

    }, 500);

}



/* Form submit */

if (vroomForm) {

    vroomForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            sendVroomMessage(
                vroomInput.value
            );

        }
    );

}



/* Quick buttons */

document
    .querySelectorAll(
        "[data-vroom]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                sendVroomMessage(
                    button.dataset.vroom
                );

            }
        );

    });
