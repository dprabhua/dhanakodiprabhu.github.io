const Portfolio = function () {
    function makeWords() {
        var words = [
            {
                text: "selenium",
                weight: 12.3
			}, {
                text: "python",
                weight: 8
			}, {
                text: "devops",
                weight: 9
			}, {
                text: "amazon",
                weight: 10
			}, {
                text: "programming",
                weight: 7
			}, {
                text: "azure",
                weight: 10
			}, {
                text: "kubernetes",
                weight: 9
			}, {
                text: "QA testing",
                weight: 11
            }, {
                text: "Helm",
                weight: 9
			}, {
                text: "web testing",
                weight: 7
            }, {
                text: "Google compute Engine",
                weight: 7
            }, {
                text: "CICD",
                weight: 7
            }, {
                text: "pytest",
                weight: 9
			}
		];
        return words;
    }

    function makeWordCloud(words) {
        $('.teaching-domains').jQCloud(words, {
            delay: 120
        });
    }

    function displayWordCloud() {
        var count = 1;
        $(window).on('scroll', function () {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 2700; // set to whatever you want it to be
            var words = makeWords();
            if (y_scroll_pos > scroll_pos_test && count <= 1) {
                makeWordCloud(words);
                count++;
            }
        });
    }

    function designForm() {
        $("#my-modal form").addClass("my-form");
    }

    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: [
				"am a QA Automation Professional.", "love everything about code.", "both API testing and UI testing.", "Automate everything."
			],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 1,
            contentType: 'text',
            callback: function () {
                $("#writing-text").css({
                    "color": "#fff",
                    "background-color": "#C8412B"
                });
            },
            preStringTyped: function () {},
            onStringTyped: function () {}
        });
    }

    return {
        displayWordCloud: displayWordCloud,
        typeAnimation: typeAnimation
    }

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
