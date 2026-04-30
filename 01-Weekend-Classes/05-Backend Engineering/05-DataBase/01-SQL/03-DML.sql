-- CREATE TABLE canteen_menu (
--     item_id SERIAL PRIMARY KEY, 
--     item_name VARCHAR(100),
--     category VARCHAR(50),
--     price int,
--     is_available BOOLEAN DEFAULT TRUE
-- );

-- INSERT INTO canteen_menu
-- (item_name, category, price)
-- VALUES
-- ('Masala Chai', 'Beverages', '10'),
-- ('Vada Pav', 'Snacks', '15'),
-- ('Samosa', 'Snacks', '12'),
-- ('Rajma Chawal', 'Meals', '60'),
-- ('Maggi', 'Snacks', '25'),
-- ('Idli', 'Snacks', '50'),
-- ('Ice Tea', 'Beverages', '40');

-- * Mutation
-- UPDATE canteen_menu
-- SET price = 20
-- WHERE item_name = 'Vada Pav';

-- UPDATE canteen_menu
-- SET  price = price - 5
-- WHERE category = 'Beverages';

-- UPDATE canteen_menu
-- SET is_available = FALSE, price = 10
-- WHERE item_name = 'Samosa';

-- DELETE FROM canteen_menu
-- WHERE item_name = 'idli';

-- TRUNCATE TABLE canteen_menu;

-- ! DRY RUN: we see what we are selecting/ operating on 
-- * Do Dry Run for every Query
-- UPDATE canteen_menu
-- SET is_available = FALSE
-- WHERE item_name = 'Samosa';

-- SELECT * FROM canteen_menu
-- WHERE item_name = 'Samosa';
--

SELECT * FROM canteen_menu;