CREATE DATABASE IF NOT EXISTS celastise CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE celastise;
CREATE TABLE IF NOT EXISTS brands (brand_id INT AUTO_INCREMENT PRIMARY KEY, brand_name VARCHAR(120) NOT NULL UNIQUE, country VARCHAR(100));
CREATE TABLE IF NOT EXISTS categories (category_id INT AUTO_INCREMENT PRIMARY KEY, category_name VARCHAR(120) NOT NULL UNIQUE);
CREATE TABLE IF NOT EXISTS products (
  product_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, buying_price DECIMAL(12,2) DEFAULT 0, price DECIMAL(12,2) DEFAULT 0, discount DECIMAL(12,2) DEFAULT 0, stock INT DEFAULT 0,
  category_id INT, brand_id INT, gender VARCHAR(50), movement VARCHAR(100), strap_type VARCHAR(255), available_color VARCHAR(255), dial TEXT, watch_case TEXT, glass TEXT, include TEXT, water_resistant VARCHAR(255), description TEXT
);
CREATE TABLE IF NOT EXISTS product_images (image_id INT AUTO_INCREMENT PRIMARY KEY, product_id INT NOT NULL, image_url VARCHAR(500) NOT NULL, color VARCHAR(120));
CREATE TABLE IF NOT EXISTS users (user_id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(150), email VARCHAR(190) UNIQUE, password_hash VARCHAR(255), phone VARCHAR(80), address TEXT, role VARCHAR(40) DEFAULT 'customer', created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS orders (order_id INT AUTO_INCREMENT PRIMARY KEY, customer_name VARCHAR(150), phone VARCHAR(80), address TEXT, house_no VARCHAR(100), payment_method VARCHAR(50), total DECIMAL(12,2), status VARCHAR(50), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS order_items (order_item_id INT AUTO_INCREMENT PRIMARY KEY, order_id INT, product_id INT, quantity INT, price DECIMAL(12,2));
INSERT IGNORE INTO categories (category_id, category_name) VALUES (1,'Classic'),(2,'Men Quartz'),(3,'Women'),(4,'Chronograph'),(5,'Luxury Automatic'),(6,'Luxury Quartz'),(7,'Smart'),(8,'Sports');
INSERT IGNORE INTO brands (brand_id, brand_name, country) VALUES
(1,'Skmei','China'),(2,'Kalbor','China'),(3,'Rolex','Switzerland'),(4,'Poedagar','China'),(5,'Casio','Japan'),(6,'Tissot','Switzerland'),(7,'Omega','Switzerland'),(8,'Citizen','Japan'),(9,'Success Way','China'),(10,'Hublot','Switzerland'),(11,'Bin Bond','China'),(12,'Patek Philippe','Switzerland'),(13,'Olevs','China'),(14,'Emporio Armani','Italy'),(15,'Generic','International');
ALTER TABLE products AUTO_INCREMENT=21;
-- ============================================================
-- CELASTISE — New Products Patch
-- Generated: 2026-06-14
-- Purpose  : Add missing brands, products & product_images
--            from the watches/ folder structure.
-- NOTE     : buying_price and price are left as 0.00
--            — fill these in yourself before importing.
-- ============================================================

-- ============================================================
-- 1. NEW BRANDS
--    Already in DB: Skmei, Rolex, Kalbor, Casio, Poedagar,
--    Omega, Citizen, Success Way, Hublot, Tissot, Bin Bond,
--    Patek Philippe, Olevs, Emporio Armani
--    Missing: Audemars Piguet, Bestwin
-- ============================================================

INSERT INTO `brands` (`brand_name`, `country`) VALUES
('Audemars Piguet', 'Switzerland'),   -- brand_id = 16
('Bestwin', 'China');                 -- brand_id = 17


-- ============================================================
-- 2. NEW PRODUCTS
--    product_id continues from AUTO_INCREMENT = 21
--    buying_price & price left as 0.00 for you to fill in.
-- ============================================================

INSERT INTO `products`
  (`name`, `buying_price`, `price`, `discount`, `stock`,
   `category_id`, `brand_id`, `gender`, `movement`,
   `strap_type`, `available_color`, `dial`, `watch_case`,
   `glass`, `include`, `water_resistant`, `description`)
VALUES

-- ── Audemars Piguet Royal Oak Offshore (Black) ─────────────
-- Luxury Automatic → category_id 5 | brand_id 16
(
  'Audemars Piguet Royal Oak Offshore',
  0.00, 0.00, 0.00, 0,
  5, 16, 'men', 'automatic',
  'Rubber Strap, Folding Clasp',
  'Black',
  'Black Tapisserie Dial with Luminous Hands and Hour Markers, Chronograph Sub-dials',
  '44mm Black Ceramic and Stainless Steel Case with Octagonal Bezel',
  'Scratch-resistant Sapphire Crystal with Anti-reflective Coating',
  'Original Box, Warranty Card, 2-year Warranty',
  '100 meters / 10 ATM',
  'Audemars Piguet Royal Oak Offshore — an iconic luxury chronograph defined by its bold octagonal bezel, black ceramic case, and high-performance automatic movement. A statement piece that fuses sports engineering with haute horlogerie.'
),

-- ── Bestwin Classic (BrownBlack) ───────────────────────────
-- Men's Quartz → category_id 2 | brand_id 17
(
  'Bestwin Classic',
  0.00, 0.00, 0.00, 0,
  2, 17, 'men', 'quartz',
  'Leather Belt',
  'BrownBlack',
  'Black Dial with Gold-tone Hands and Hour Markers',
  'Alloy Case, Polished Finish',
  'Mineral Crystal Glass',
  'Watch, User Manual',
  'yes',
  'Bestwin Classic — a refined and affordable quartz timepiece combining a rich brown-black leather strap with a sleek black dial. Designed for men who appreciate understated elegance and reliable everyday performance.'
),

-- ── Casio G-Shock Radio Solar Mudmaster ────────────────────
-- Sports / Quartz → category_id 8 | brand_id 5
-- (Casio G-Shock already in DB as product_id 3 but that is the
--  standard G-Shock; this is a different model — Radio Solar Mudmaster)
(
  'Casio G-Shock Radio Solar Mudmaster',
  0.00, 0.00, 0.00, 0,
  8, 5, 'men', 'quartz',
  'Rubber/Resin Strap',
  'Black',
  'Black Digital-Analog Dial with Multi-function Display, Compass, Altimeter, Barometer',
  'Triple Layer Carbon Core Guard Structure',
  'Mineral Crystal Glass',
  'Watch, User Manual',
  '200 meters / 20 ATM',
  'Casio G-Shock Radio Solar Mudmaster — built for the toughest conditions on earth. Features Tough Solar charging, Multi-Band 6 radio time sync, mud resistance, altimeter, barometer, and compass. The ultimate outdoor adventure watch.'
),

-- ── Citizen Quartz (BlackGold) ─────────────────────────────
-- Men's Quartz → category_id 2 | brand_id 8
(
  'Citizen Quartz BlackGold',
  0.00, 0.00, 0.00, 0,
  2, 8, 'men', 'quartz',
  'Steel Chain Bracelet, Deployment Clasp',
  'Black,Gold',
  'Black Dial with Gold-tone Hands and Hour Markers, Date Window',
  'Gold-tone Stainless Steel Case',
  'Mineral Crystal Glass',
  'Original Box, Warranty Card',
  '50 meters / 5 ATM',
  'Citizen Quartz BlackGold — a classic two-tone timepiece pairing a striking black dial with a lustrous gold-tone steel bracelet. Delivers Citizen precision in a design that transitions effortlessly from office to evening.'
),

-- ── Citizen Quartz (BrownGold) ─────────────────────────────
-- Men's Quartz → category_id 2 | brand_id 8
(
  'Citizen Quartz BrownGold',
  0.00, 0.00, 0.00, 0,
  2, 8, 'men', 'quartz',
  'Steel Chain Bracelet, Deployment Clasp',
  'Brown,Gold',
  'Champagne/Brown Dial with Gold-tone Hands, Date Window',
  'Gold-tone Stainless Steel Case',
  'Mineral Crystal Glass',
  'Original Box, Warranty Card',
  '50 meters / 5 ATM',
  'Citizen Quartz BrownGold — a warm and sophisticated watch with a champagne brown dial set in a gold-tone steel case and bracelet. Exudes timeless luxury suitable for formal and smart-casual occasions.'
),

-- ── Hublot Classic Fusion (SilverBlack) ────────────────────
-- Luxury Quartz → category_id 6 | brand_id 10
(
  'Hublot Classic Fusion SilverBlack',
  0.00, 0.00, 0.00, 0,
  6, 10, 'men', 'quartz',
  'Rubber Strap, Folding Clasp',
  'Silver,Black',
  'Black Skeleton Dial with Silver-tone Hands and Applied Hour Markers',
  '42mm Polished Stainless Steel Case with Black Bezel',
  'Scratch-resistant Sapphire Crystal with Anti-reflective Coating',
  'Original Box, Warranty Card, 2-year Warranty',
  '50 meters / 5 ATM',
  'Hublot Classic Fusion SilverBlack — a masterful blend of classic watchmaking and contemporary design. The black dial and polished steel case create a bold contrast, delivering understated luxury with unmistakable Hublot character.'
),

-- ── Omega De Ville Tourbillon (Black) ──────────────────────
-- Luxury Automatic → category_id 5 | brand_id 7
(
  'Omega De Ville Tourbillon',
  0.00, 0.00, 0.00, 0,
  5, 7, 'men', 'automatic',
  'Leather Belt, Deployment Clasp',
  'Black',
  'Black Grand Feu Enamel Dial with Hand-polished Blued Hands, Tourbillon at 6 o''clock',
  '41mm Polished Stainless Steel Case',
  'Scratch-resistant Sapphire Crystal, Anti-reflective Coating Both Sides',
  'Original Box, Warranty Card, 5-year Warranty',
  '30 meters / 3 ATM',
  'Omega De Ville Tourbillon — the pinnacle of Omega fine watchmaking. Housing a hand-wound tourbillon movement beneath a stunning black enamel dial, this watch represents centuries of horological mastery distilled into a single extraordinary timepiece.'
),

-- ── Omega Seamaster Aqua Terra (Blue) ──────────────────────
-- Luxury Automatic → category_id 5 | brand_id 7
(
  'Omega Seamaster Aqua Terra',
  0.00, 0.00, 0.00, 0,
  5, 7, 'men', 'automatic',
  'Stainless Steel Bracelet, Folding Clasp',
  'Blue',
  'Blue "Teak Concept" Vertical-brushed Dial with Luminous Hands and Hour Markers, Date at 3 o''clock',
  '41mm Stainless Steel Case, Polished and Brushed Finish',
  'Scratch-resistant Sapphire Crystal, Anti-reflective Coating',
  'Original Box, Warranty Card, 5-year Warranty',
  '150 meters / 15 ATM',
  'Omega Seamaster Aqua Terra — the perfect blend of elegance and performance. Its distinctive teak-pattern dial, refined steel bracelet, and Master Chronometer movement make it equally at home on the open sea or a formal occasion.'
),

-- ── Omega Speedmaster (SilverBlack) ────────────────────────
-- Luxury Quartz → category_id 6 | brand_id 7
-- (Omega Speedmaster already in DB as product_id 5 but lacks
--  proper color variant / image entry; this covers the SilverBlack
--  colour variant now present in the ZIP as a new folder)
-- SKIPPED — product already exists as product_id 5.
-- New images for SilverBlack will be added in product_images below.

-- ── Patek Philippe Grand Complication (Black) ───────────────
-- Luxury Automatic → category_id 5 | brand_id 13
(
  'Patek Philippe Grand Complication Black',
  0.00, 0.00, 0.00, 0,
  5, 13, 'men', 'automatic',
  'Leather Belt, Ardillon Buckle',
  'Black',
  'Black Ebony Dial with Gold-tone Applied Hour Markers, Moon Phase, Perpetual Calendar',
  '47mm 18K White Gold Case',
  'Scratch-resistant Sapphire Crystal with Anti-reflective Coating',
  'Original Box, Warranty Card, Certificate of Origin, 2-year Warranty',
  '30 meters / 3 ATM',
  'Patek Philippe Grand Complication Black — a horological masterpiece featuring a perpetual calendar, moon phase display, and chronograph all within a single movement. The deep ebony dial and white gold case make it one of the most coveted complications in fine watchmaking.'
),

-- ── Patek Philippe Grand Complication (Silver) ──────────────
-- Luxury Automatic → category_id 5 | brand_id 13
(
  'Patek Philippe Grand Complication Silver',
  0.00, 0.00, 0.00, 0,
  5, 13, 'men', 'automatic',
  'Leather Belt, Ardillon Buckle',
  'Silver',
  'Silver Opaline Dial with Gold-tone Applied Hour Markers, Moon Phase, Perpetual Calendar',
  '47mm 18K Yellow Gold Case',
  'Scratch-resistant Sapphire Crystal with Anti-reflective Coating',
  'Original Box, Warranty Card, Certificate of Origin, 2-year Warranty',
  '30 meters / 3 ATM',
  'Patek Philippe Grand Complication Silver — the silver dial variant of this legendary grande complication. An uncompromising expression of traditional Swiss watchmaking, housing some of the most sophisticated mechanical functions ever assembled in a single timepiece.'
),

-- ── Rolex GMT Master II Pepsi ───────────────────────────────
-- Luxury Quartz → category_id 6 | brand_id 3
-- (Rolex GMT Master already in DB as product_id 17;
--  GMT Master II is a distinct model)
(
  'Rolex GMT Master II Pepsi',
  0.00, 0.00, 0.00, 0,
  6, 3, 'men', 'automatic',
  'Jubilee Bracelet, Oysterclasp',
  'Blue,Red',
  'Black Dial with Luminous Hour Markers, 24-hour GMT Hand, Cyclops Date Lens',
  '40mm Oyster 904L Stainless Steel Case, Pepsi Red/Blue Bezel Insert',
  'Scratch-resistant Sapphire Crystal, Anti-reflective Coating',
  'Original Box, Warranty Card, 5-year Warranty',
  '100 meters / 10 ATM',
  'Rolex GMT Master II Pepsi — the iconic dual-timezone professional watch featuring the legendary red-and-blue "Pepsi" ceramic bezel. Precise, robust, and unmistakably Rolex; designed for world travellers and aviation professionals.'
),

-- ── Rolex Yacht-Master ──────────────────────────────────────
-- Luxury Automatic → category_id 5 | brand_id 3
-- Available in Black, Grey, Silver, SilverGold colour variants
(
  'Rolex Yacht-Master',
  0.00, 0.00, 0.00, 0,
  5, 3, 'men', 'automatic',
  'Oyster Bracelet / Oysterflex, Folding Oysterlock Clasp',
  'Black,Grey,Silver,SilverGold',
  'Sunray-brushed Dial with Luminous Chromalight Hour Markers, Bidirectional Rotatable 60-minute Bezel',
  '42mm Rolesium (Platinum Bezel & Steel Case) / 18K Gold Option',
  'Scratch-resistant Sapphire Crystal, Anti-reflective Coating',
  'Original Box, Warranty Card, 5-year Warranty',
  '100 meters / 10 ATM',
  'Rolex Yacht-Master — born from a lifetime at sea. Combining a polished bidirectional rotating bezel with the legendary Oyster robustness, it embodies the spirit of sailing in a superbly finished luxury sports watch. Available in Black, Grey, Silver, and SilverGold.'
);


-- ============================================================
-- 3. PRODUCT IMAGES
--    Image URLs follow the same /watches/<Brand>/<Model>
--    convention already used in your existing records.
--    product_id reference map (auto-assigned above, starting 21):
--      21 = Audemars Piguet Royal Oak Offshore
--      22 = Bestwin Classic
--      23 = Casio G-Shock Radio Solar Mudmaster
--      24 = Citizen Quartz BlackGold
--      25 = Citizen Quartz BrownGold
--      26 = Hublot Classic Fusion SilverBlack
--      27 = Omega De Ville Tourbillon
--      28 = Omega Seamaster Aqua Terra
--      29 = Patek Philippe Grand Complication Black
--      30 = Patek Philippe Grand Complication Silver
--      31 = Rolex GMT Master II Pepsi
--      32 = Rolex Yacht-Master
--
--    Existing products with new images from ZIP:
--       5 = Omega Speedmaster  (SilverBlack images are new)
--       7 = Citizen Tsuyosa    (SilverBrown + SilverRed images new)
--      17 = Rolex GMT Master   (Black, Silver colour variants new)
-- ============================================================

INSERT INTO `product_images` (`product_id`, `image_url`, `color`) VALUES

-- ── Audemars Piguet Royal Oak Offshore (product_id 21) ──────
(21, '/watches/Audemars Piguet/Royal Oak Offshore/Black', 'Black'),

-- ── Bestwin Classic (product_id 22) ─────────────────────────
(22, '/watches/Bestwin/Classic/BrownBlack', 'BrownBlack'),

-- ── Casio G-Shock Radio Solar Mudmaster (product_id 23) ─────
(23, '/watches/Casio/G-Shock/Radio Solar Mudmasier', 'Black'),

-- ── Citizen Quartz BlackGold (product_id 24) ────────────────
(24, '/watches/Citizen/Quartz/BlackGold', 'BlackGold'),

-- ── Citizen Quartz BrownGold (product_id 25) ────────────────
(25, '/watches/Citizen/Quartz/BrownGold', 'BrownGold'),

-- ── Hublot Classic Fusion SilverBlack (product_id 26) ───────
(26, '/watches/Hublot/Classic Fusion/SilverBlack', 'SilverBlack'),

-- ── Omega De Ville Tourbillon (product_id 27) ───────────────
(27, '/watches/Omega/De Ville Tourbillon/Black', 'Black'),

-- ── Omega Seamaster Aqua Terra (product_id 28) ──────────────
(28, '/watches/Omega/Seamaster Aqua Terra/Blue', 'Blue'),

-- ── Patek Philippe Grand Complication Black (product_id 29) ─
(29, '/watches/Patek Philippe/Grand Complication/Black', 'Black'),

-- ── Patek Philippe Grand Complication Silver (product_id 30) ─
(30, '/watches/Patek Philippe/Grand Complication/Silver', 'Silver'),

-- ── Rolex GMT Master II Pepsi (product_id 31) ───────────────
(31, '/watches/Rolex/GMT Master II/Pepsi', 'Pepsi'),

-- ── Rolex Yacht-Master colour variants (product_id 32) ──────
(32, '/watches/Rolex/Yacht-Master/Black',     'Black'),
(32, '/watches/Rolex/Yacht-Master/Grey',      'Grey'),
(32, '/watches/Rolex/Yacht-Master/Silver',    'Silver'),
(32, '/watches/Rolex/Yacht-Master/SilverGold','SilverGold'),

-- ── Omega Speedmaster — new SilverBlack images (product_id 5) ─
(5, '/watches/Omega/Speed Master/SilverBlack', 'SilverBlack'),

-- ── Citizen Tsuyosa — SilverBrown & SilverRed images (product_id 7) ─
(7, '/watches/Citizen/Tsuyosa/SilverBrown', 'SilverBrown'),
(7, '/watches/Citizen/Tsuyosa/SilverRed',   'SilverRed'),

-- ── Rolex GMT Master — Black & Silver variants (product_id 17) ─
(17, '/watches/Rolex/GMT Master/Black',  'Black'),
(17, '/watches/Rolex/GMT Master/Silver', 'Silver');


-- ============================================================
-- SUMMARY OF CHANGES
-- ============================================================
-- Brands added  : Audemars Piguet, Bestwin
-- Products added: 12 new
--   • Audemars Piguet Royal Oak Offshore
--   • Bestwin Classic
--   • Casio G-Shock Radio Solar Mudmaster
--   • Citizen Quartz BlackGold
--   • Citizen Quartz BrownGold
--   • Hublot Classic Fusion SilverBlack
--   • Omega De Ville Tourbillon
--   • Omega Seamaster Aqua Terra
--   • Patek Philippe Grand Complication Black
--   • Patek Philippe Grand Complication Silver
--   • Rolex GMT Master II Pepsi
--   • Rolex Yacht-Master
-- Images added  : 20 rows (new products + new colour variants
--                 for existing Omega Speedmaster, Citizen Tsuyosa,
--                 and Rolex GMT Master)
-- Skipped       : Omega Speedmaster (already product_id 5)
-- ============================================================
