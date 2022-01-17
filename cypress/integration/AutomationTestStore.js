describe("Iterate over element", () => {

    it("Handling multiple elements", () => {

        cy.visit("https://automationteststore.com");

        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").each(($el, $index) => {

            let productName = $el.text();

            cy.log("ProductName: " + productName + " " + " Index: " + $index);

        });

    });

    it("Confirm js alert contains the correct text", () => {

        cy.visit("http://www.webdriveruniversity.com");

        cy.get("#popup-alerts")

        .invoke("removeAttr", "target")

        .click({ force: true });

        cy.get("#button1").click();

        cy.on("window:alert", (str) => {

            expect(str).to.equal("I am an alert box!");

        });

    });

});

