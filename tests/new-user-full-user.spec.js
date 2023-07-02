import { test } from "@playwright/test";
import { ProductsPage } from "../pageObjects/ProductPage";


test.only("Verify the product page", async({ page }) => {

    const productPage = new ProductsPage(page);
    

    await productPage.addProductToBasket(1);



})