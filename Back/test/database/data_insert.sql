-- Insert categories
INSERT INTO categories (name) VALUES ('all'), ('clothes'), ('tech');

-- Insert products
INSERT INTO products (id, name, in_stock, description, category_id, brand)
VALUES
    ('huarache-x-stussy-le', 'Nike Air Huarache Le', true, '<p>Great sneakers for everyday use!</p>', 2, 'Nike x Stussy'),
    ('jacket-canada-goosee', 'Jacket', true, '<p>Awesome winter jacket</p>', 2, 'Canada Goose'),
    ('ps-5', 'PlayStation 5', false, '<p>A good gaming console. Plays games of PS4! Enjoy if you can buy it mwahahahaha</p>', 3, 'Sony'),
    ('xbox-series-s', 'Xbox Series S 512GB', false, '\n<div>\n    <ul>\n        <li><span>Hardware-beschleunigtes Raytracing macht dein Spiel noch realistischer</span></li>\n        <li><span>Spiele Games mit bis zu 120 Bilder pro Sekunde</span></li>\n        <li><span>Minimiere Ladezeiten mit einer speziell entwickelten 512GB NVMe SSD und wechsle mit Quick Resume nahtlos zwischen mehreren Spielen.</span></li>\n        <li><span>Xbox Smart Delivery stellt sicher, dass du die beste Version deines Spiels spielst, egal, auf welcher Konsole du spielst</span></li>\n        <li><span>Spiele deine Xbox One-Spiele auf deiner Xbox Series S weiter. Deine Fortschritte, Erfolge und Freundesliste werden automatisch auf das neue System übertragen.</span></li>\n        <li><span>Erwecke deine Spiele und Filme mit innovativem 3D Raumklang zum Leben</span></li>\n        <li><span>Der brandneue Xbox Wireless Controller zeichnet sich durch höchste Präzision, eine neue Share-Taste und verbesserte Ergonomie aus</span></li>\n        <li><span>Ultra-niedrige Latenz verbessert die Reaktionszeit von Controller zum Fernseher</span></li>\n        <li><span>Verwende dein Xbox One-Gaming-Zubehör -einschließlich Controller, Headsets und mehr</span></li>\n        <li><span>Erweitere deinen Speicher mit der Seagate 1 TB-Erweiterungskarte für Xbox Series X (separat erhältlich) und streame 4K-Videos von Disney+, Netflix, Amazon, Microsoft Movies &amp; TV und mehr</span></li>\n    </ul>\n</div>', 3, 'Microsoft'),
    ('apple-imac-2021', 'iMac 2021', true, 'The new iMac!', 3, 'Apple'),
    ('apple-iphone-12-pro', 'iPhone 12 Pro', true, 'This is iPhone 12. Nothing else to say.', 3, 'Apple'),
    ('apple-airpods-pro', 'AirPods Pro', false, '\n<h3>Magic like you’ve never heard</h3>\n<p>AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound, Transparency mode so you can hear your surroundings, and a customizable fit for all-day comfort. Just like AirPods, AirPods Pro connect magically to your iPhone or Apple Watch. And they’re ready to use right out of the case.\n\n<h3>Active Noise Cancellation</h3>\n<p>Incredibly light noise-cancelling headphones, AirPods Pro block out your environment so you can focus on what you’re listening to. AirPods Pro use two microphones, an outward-facing microphone and an inward-facing microphone, to create superior noise cancellation. By continuously adapting to the geometry of your ear and the fit of the ear tips, Active Noise Cancellation silences the world to keep you fully tuned in to your music, podcasts, and calls.\n\n<h3>Transparency mode</h3>\n<p>Switch to Transparency mode and AirPods Pro let the outside sound in, allowing you to hear and connect to your surroundings. Outward- and inward-facing microphones enable AirPods Pro to undo the sound-isolating effect of the silicone tips so things sound and feel natural, like when you’re talking to people around you.</p>\n\n<h3>All-new design</h3>\n<p>AirPods Pro offer a more customizable fit with three sizes of flexible silicone tips to choose from. With an internal taper, they conform to the shape of your ear, securing your AirPods Pro in place and creating an exceptional seal for superior noise cancellation.</p>\n\n<h3>Amazing audio quality</h3>\n<p>A custom-built high-excursion, low-distortion driver delivers powerful bass. A superefficient high dynamic range amplifier produces pure, incredibly clear sound while also extending battery life. And Adaptive EQ automatically tunes music to suit the shape of your ear for a rich, consistent listening experience.</p>\n\n<h3>Even more magical</h3>\n<p>The Apple-designed H1 chip delivers incredibly low audio latency. A force sensor on the stem makes it easy to control music and calls and switch between Active Noise Cancellation and Transparency mode. Announce Messages with Siri gives you the option to have Siri read your messages through your AirPods. And with Audio Sharing, you and a friend can share the same audio stream on two sets of AirPods — so you can play a game, watch a movie, or listen to a song together.</p>\n', 3, 'Apple'),
    ('apple-airtag', 'AirTag', true, '\n<h1>Lose your knack for losing things.</h1>\n<p>AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another one in your backpack. And just like that, they’re on your radar in the Find My app. AirTag has your back.</p>\n', 3, 'Apple');

-- Insert images
INSERT INTO images (product_id, url)
VALUES
    ('huarache-x-stussy-le', 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087'),
    ('huarache-x-stussy-le', 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087'),
    ('huarache-x-stussy-le', 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087'),
    ('huarache-x-stussy-le', 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087'),
    ('huarache-x-stussy-le', 'https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087'),
    ('jacket-canada-goosee', 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016105/product-image/2409L_61.jpg'),
    ('jacket-canada-goosee', 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016107/product-image/2409L_61_a.jpg'),
    ('jacket-canada-goosee', 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016108/product-image/2409L_61_b.jpg'),
    ('jacket-canada-goosee', 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016109/product-image/2409L_61_c.jpg'),
    ('jacket-canada-goosee', 'https://images.canadagoose.com/image/upload/w_480,c_scale,f_auto,q_auto:best/v1576016110/product-image/2409L_61_d.jpg'),
    ('jacket-canada-goosee', 'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058169/product-image/2409L_61_o.png'),
    ('jacket-canada-goosee', 'https://images.canadagoose.com/image/upload/w_1333,c_scale,f_auto,q_auto:best/v1634058159/product-image/2409L_61_p.png'),
    ('ps-5', 'https://images-na.ssl-images-amazon.com/images/I/510VSJ9mWDL._SL1262_.jpg'),
    ('ps-5', 'https://images-na.ssl-images-amazon.com/images/I/610%2B69ZsKCL._SL1200_.jpg'),
    ('xbox-series-s', 'https://www.conrad.de/medias/global/ce/9000_9999/9000/9008/900893_XB01_BX_00_FBELS-EU.jpg?context=bWFzdGVyfHJvb3R8MjYxNjY2fGltYWdlL2pwZWd8aDY4L2g1MC84MTI3NDU0MzI1NDIyLmpwZ3wxYTMxYmE5MzFmZWM1Njk3ZTA1Y2Y4NzA1ODQ2OTc5NDkwMzBiZDExMjA1Y2U5M2IyOTFhMDcyNDQwZTE3MzI0'),
    ('xbox-series-s', 'https://www.conrad.de/medias/global/ce/9000_9999/9000/9008/900893_XB02_BX_00_FBELS-EU.jpg?context=bWFzdGVyfHJvb3R8MjU3Nzg0fGltYWdlL2pwZWd8aDVjL2gwNi84MTQyNzkxMDg3NzE5LmpwZ3w0M2Q0MjBjZjY4N2Y0NjM1ZmI3MTg0M2RlYmU0ZGE4YmM1YzE5MTZlNjI0NzU5MzNiZDlhYmU2MGE3YWI3NmI3'),
    ('xbox-series-s', 'https://www.conrad.de/medias/global/ce/9000_9999/9000/9008/900893_XB03_BX_00_FBELS-EU.jpg?context=bWFzdGVyfHJvb3R8MzAwMTg0fGltYWdlL2pwZWd8aGIxL2g2ZC84MTQyNzkxMDg3NzQ1LmpwZ3wyMmM2YjZmM2VhODlhN2M3ZjY2ODA3OTFiM2YxOTI5NmU1NjIyNDE0OTBiYmM5YzkwZTEyNTVmMzdkODJkNjY0'),
    ('xbox-series-s', 'https://www.conrad.de/medias/global/ce/9000_9999/9000/9008/900893_XB04_BX_00_FBELS-EU.jpg?context=bWFzdGVyfHJvb3R8NzY5Nzl8aW1hZ2UvanBlZ3xoMzEvaGJlLzg5NjM2NjM4NzI4OTQuanBnfDI0ODQ3MmI1NjE5NGFhZTkyZTRmYjZiZTk2ODBlYTIxZmYxOWRmYTI4NDIyNDZkMDRjYTM3YzU0ZTAxYTk3NTg'),
    ('xbox-series-s', 'https://www.conrad.de/medias/global/ce/9000_9999/9000/9008/900893_XB05_BX_00_FBELS-EU.jpg?context=bWFzdGVyfHJvb3R8MjcyNTQzfGltYWdlL2pwZWd8aDU2L2g2MS84MTQyNzkxMDg3NzA3LmpwZ3wyMmI5YzFmY2ZmZTNkMzU4ODNjYmJjNmU2MmU1YzM1NmUyZDQ2OWQ5YjJmZTlhZmVjMTM5ZWE5Njg2Y2I3YzFl'),
    ('xbox-series-s', 'https://www.conrad.de/medias/global/ce/9000_9999/9000/9008/900893_XB06_BX_00_FBELS-EU.jpg?context=bWFzdGVyfHJvb3R8MjcyNjE3fGltYWdlL2pwZWd8aDM5L2g0Ni84MTQyNzkxMDg3NzQwLmpwZ3w1N2YwZGI2MzBlNGFhOGY0YjFkNjY1Y2FkNjg4NzY5ZmU5ZTllYmE4MmJhZTQ2YzQwYjZkOWY5OGVhNzRjYzEx'),
    ('xbox-series-s', 'https://www.conrad.de/medias/global/ce/9000_9999/9000/9008/900893_XB07_BX_00_FBELS-EU.jpg?context=bWFzdGVyfHJvb3R8MjUxODc0fGltYWdlL2pwZWd8aDU1L2gzNi84MTQyNzkxMDg3NzA1LmpwZ3w2MTdiYmFkYzQ1YTc3ZThkMjg3NmM5YzFlZjEwNjE0YjI4ZTc5NTQyZGUyYjQyZTVlMzQyNTBhNzQxNjE1ZWI0'),
    ('apple-imac-2021', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-purple-202204_GEO_DE?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1657720264000'),
    ('apple-iphone-12-pro', 'https://www.giga.de/wp-content/uploads/2020/10/apple-iphone-12-pro-2.jpg'),
    ('apple-iphone-12-pro', 'https://www.apple.com/v/iphone-12-pro/c/images/meta/og__fzbl8nqexymu_image.png'),
    ('apple-airpods-pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202210?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1646763830000'),
    ('apple-airpods-pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202210?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1646763830000'),
    ('apple-airpods-pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202210?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1646763830000'),
    ('apple-airpods-pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202210?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1646763830000'),
    ('apple-airpods-pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202210?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1646763830000'),
    ('apple-airpods-pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202210?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1646763830000'),
    ('apple-airpods-pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202210?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1646763830000'),
    ('apple-airpods-pro', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-select-202210?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1646763830000'),
    ('apple-airtag', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-select-202204?wid=892&hei=820&fmt=jpeg&qlt=95&.v=1647674781000'),
    ('apple-airtag', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-select-202204?wid=892&hei=820&fmt=jpeg&qlt=95&.v=1647674781000'),
    ('apple-airtag', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-select-202204?wid=892&hei=820&fmt=jpeg&qlt=95&.v=1647674781000'),
    ('apple-airtag', 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-select-202204?wid=892&hei=820&fmt=jpeg&qlt=95&.v=1647674781000');

-- Insert attributes
INSERT INTO attributes (product_id, attribute_name, attribute_value)
VALUES
    ('huarache-x-stussy-le', 'Color', 'Black'),
    ('huarache-x-stussy-le', 'Size', '10'),
    ('huarache-x-stussy-le', 'Material', 'Leather'),
    ('jacket-canada-goosee', 'Color', 'Blue'),
    ('jacket-canada-goosee', 'Size', 'M'),
    ('jacket-canada-goosee', 'Material', 'Down'),
    ('ps-5', 'Storage', '825GB SSD'),
    ('ps-5', 'Color', 'White'),
    ('xbox-series-s', 'Storage', '512GB SSD'),
    ('xbox-series-s', 'Color', 'White'),
    ('apple-imac-2021', 'Color', 'Purple'),
    ('apple-iphone-12-pro', 'Storage', '128GB'),
    ('apple-iphone-12-pro', 'Color', 'Pacific Blue'),
    ('apple-airpods-pro', 'Color', 'White'),
    ('apple-airtag', 'Color', 'White');

-- Insert prices
INSERT INTO prices (product_id, amount, currency)
VALUES
    ('huarache-x-stussy-le', 130, 'USD'),
    ('jacket-canada-goosee', 995, 'USD'),
    ('ps-5', 499, 'USD'),
    ('xbox-series-s', 299, 'USD'),
    ('apple-imac-2021', 1299, 'USD'),
    ('apple-iphone-12-pro', 999, 'USD'),
    ('apple-airpods-pro', 249, 'USD'),
    ('apple-airtag', 29, 'USD');
