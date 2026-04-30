-- ! Table for IPL
CREATE TABLE ipl_players (
    player_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    team VARCHAR(50),
    role VARCHAR(50),
    runs_scored INT CHECK (runs_scored > 0),
    wickets_taken INT CHECK (wickets_taken > 0),
    auction_price_crores INT
);

ALTER TABLE ipl_players
ADD COLUMN nickname VARCHAR(50);

ALTER TABLE ipl_players
DROP COLUMN runs_scored;

ALTER TABLE ipl_players
DROP COLUMN wickets_taken;

ALTER TABLE ipl_players
ADD COLUMN runs_scored INT CHECK (runs_scored >= 0),
ADD COLUMN wickets_taken INT CHECK (wickets_taken >= 0);

INSERT INTO ipl_players (name, team, role, runs_scored, wickets_taken, auction_price_crores, nickname) VALUES
('Virat Kohli', 'RCB', 'Batsman', 973, 1, 15.00, 'King Kohli'),
('MS Dhoni', 'CSK', 'Wicketkeeper', 450, 1, 12.00, 'Thala'),
('Jasprit Bumrah', 'Mumbai Indians', 'Bowler', 15, 27, 12.00, 'Jassi'),
('Hardik Pandya', 'Mumbai Indians', 'All-Rounder', 400, 15, 15.00, 'Kung Fu Pandya'),
('Sunil Narine', 'KKR', 'All-Rounder', 350, 20, 8.50, 'Carrom King'),
('Rohit Sharma', 'Mumbai Indians', 'Batsman', 550, 1, 16.00, 'Hitman'),
('Rashid Khan', 'Gujarat Titans', 'Bowler', 50, 19, 15.00, 'The Magician'),
('Rinku Singh', 'KKR', 'Batsman', 475, 1, 0.55, 'The Spirit'),
('Arjun Tendulkar', 'Mumbai Indians', 'Bowler', 10, 3, 0.30, 'Arjun'),
('Kane Williamson', 'LSG', 'Batsman', 600, 1, 11.00, 'Kane Mama'),
('Mystery Player', NULL, 'Batsman', 1, 1, 1.00, 'Mystery Man');


SELECT * FROM ipl_players;

-- ! Filtering

SELECT * FROM ipl_players 
WHERE team = 'Mumbai Indians';

SELECT * FROM ipl_players WHERE name LIKE '__s%';

Price between 10cr to 15cr
SELECT * 
FROM ipl_players 
WHERE auction_price_crores BETWEEN 10 AND 15;

-- ! Sorting

SELECT nickname, auction_price_crores, name 
FROM ipl_players
ORDER BY auction_price_crores DESC;

-- ! Multi-column Sorting
SELECT team, name, nickname, auction_price_crores
FROM ipl_players
ORDER BY team ASC, auction_price_crores DESC;

-- ! pagination

SELECT name, nickname, auction_price_crores
FROM ipl_players
ORDER BY auction_price_crores desc
LIMIT 3;

SELECT name, nickname, auction_price_crores
FROM ipl_players
ORDER BY auction_price_crores desc
LIMIT 3 OFFSET 3;

-- ! Modifying data in runtime

SELECT 
    name, nickname, auction_price_crores, (auction_price_crores*100) AS price_in_lakhs
FROM ipl_players;

SELECT 
    name, nickname, auction_price_crores, (auction_price_crores+2) AS update_auction_price
FROM ipl_players;

-- ! How you can get distinct values
SELECT 
    DISTINCT role
FROM ipl_players;
