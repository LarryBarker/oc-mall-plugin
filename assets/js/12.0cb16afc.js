(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{384:function(t,e,a){"use strict";a.r(e);var o=a(42),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"v1-9-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v1-9-0"}},[t._v("#")]),t._v(" v1.9.0")]),t._v(" "),a("h2",{attrs:{id:"changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes"}},[t._v("#")]),t._v(" Changes")]),t._v(" "),a("ul",[a("li",[t._v("PHP7.2 is now required to run this plugin")]),t._v(" "),a("li",[t._v("Property values are now translatable")]),t._v(" "),a("li",[t._v("Added a new option to group search results by Product")]),t._v(" "),a("li",[t._v("Wishlists can now have a shipping method attached\n(opt-in via new "),a("RouterLink",{attrs:{to:"/components/wishlists.html#show-shipping-bool"}},[t._v("showShipping-Property")]),t._v(")")],1),t._v(" "),a("li",[t._v("You can now set a default tax which is used as long as the shipping destination country is unknown")]),t._v(" "),a("li",[t._v("Fixed various bugs when using country specific taxes")]),t._v(" "),a("li",[t._v("E-mail templates now use translatable strings")]),t._v(" "),a("li",[t._v("Optimized loading of translated attributes")]),t._v(" "),a("li",[t._v("Various minor bugfixes")])]),t._v(" "),a("h2",{attrs:{id:"required-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#required-actions"}},[t._v("#")]),t._v(" Required actions")]),t._v(" "),a("h3",{attrs:{id:"update-rainlab-translate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-rainlab-translate"}},[t._v("#")]),t._v(" Update RainLab.Translate")]),t._v(" "),a("p",[t._v("Update "),a("code",[t._v("RainLab.Translate")]),t._v(" to version "),a("code",[t._v("1.6.3")]),t._v(" to be compatible\nwith this release.")]),t._v(" "),a("p",[t._v("Version "),a("code",[t._v("1.6.3")]),t._v(" enables eager-loading of translated attributes.\nThis decreases the overall query count on all pages.")]),t._v(" "),a("h3",{attrs:{id:"update-product-component-partials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-product-component-partials"}},[t._v("#")]),t._v(" Update product component partials")]),t._v(" "),a("p",[t._v("If you override the "),a("code",[t._v("properties/color.htm")]),t._v(" or "),a("code",[t._v("properties/default.htm")]),t._v("\npartials of the "),a("code",[t._v("Product")]),t._v(" component, make sure to use\nnew value accessors to properly load translations.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-plugin/commit/4ba95c8808dda658e255d2688efaeae69f5ec8e9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("If you override the "),a("code",[t._v("tax-info.htm")]),t._v(" partial of the "),a("code",[t._v("Product")]),t._v(" component,\nmake sure to uses the new "),a("code",[t._v("filteredTaxes")]),t._v(" attribute to only display the\ncorrect taxes for the user's current shipping destination country.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-plugin/pull/416/files#diff-52fecf5054aab175b91d3f4985e037cd",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"update-cart-component-partials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-cart-component-partials"}},[t._v("#")]),t._v(" Update cart component partials")]),t._v(" "),a("p",[t._v("If you override the "),a("code",[t._v("cart/table/entries.htm")]),t._v(" or "),a("code",[t._v("cart/table/taxes.htm")]),t._v("\npartials of the "),a("code",[t._v("Cart")]),t._v(" component, make sure to select the taxes\ndirectly off the new "),a("code",[t._v("totals")]),t._v(" variable.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-plugin/commit/cc7fe4e51d6ac2f89122eb9722f3397f6a07eff2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"update-wishlist-component-partials"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-wishlist-component-partials"}},[t._v("#")]),t._v(" Update wishlist component partials")]),t._v(" "),a("p",[t._v("If you override the "),a("code",[t._v("wishlists/cart.htm")]),t._v(" partial of the "),a("code",[t._v("Wishlist")]),t._v(" component\nmake sure to include the new shipping method partial if you plan\non using this feature. If you do not want to display shipping cost\nfor Wishlists the component will still function without this change.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-plugin/commit/a407e7c40f9efce52eb18c5180f3f59ebdf8c32a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Commit"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"optional-use-included-proceed-to-checkout-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-use-included-proceed-to-checkout-button"}},[t._v("#")]),t._v(' Optional: Use included "Proceed to checkout button"')]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Cart")]),t._v(" component got a new "),a("code",[t._v("showProceedToCheckout")]),t._v(' property that includes\na "Proceed to checkout" button with the component if enabled. The button will be\nremoved correctly if a user removes all products from the cart. Until now\nit was not possible to remove the button if it was placed on a theme partial.')]),t._v(" "),a("p",[t._v("This change is opt-in. If you don't explicitly set the new property to true,\nthe component output will be unchanged.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-theme/commit/b451cfdc922db907921dfd175f70fcf22c4637f5",target:"_blank",rel:"noopener noreferrer"}},[t._v("Theme commit"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/OFFLINE-GmbH/oc-mall-plugin/issues/395",target:"_blank",rel:"noopener noreferrer"}},[t._v("Issue"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);