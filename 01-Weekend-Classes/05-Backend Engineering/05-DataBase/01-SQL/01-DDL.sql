CREATE TABLE students (
    
    student_id SERIAL PRIMARY KEY, -- SERIAL auto incremental integer, Primary Key is unique and not null
    first_name VARCHAR(50) NOT NULL, -- first_name should have max 50 letter
    last_name VARCHAR(50), -- 50 * 8 bits

    email VARCHAR(322) UNIQUE NOT NULL,
    phone_number VARCHAR(10) UNIQUE,
    country_code VARCHAR(4),

    age INT CHECK (age > 12),
    
    current_status VARCHAR(20) DEFAULT 'active' CHECK (current_status IN ('active', 'graduated', 'dropped_out')),

    masterji_handle VARCHAR(50) UNIQUE, -- masterji username

    has_joined_mastterji BOOLEAN DEFAULT FALSE,

    current_score INT DEFAULT 0 CHECK (current_score >= 0 AND current_score <= 100),

    enrollment_date DATE DEFAULT CURRENT_DATE
);

ALTER TABLE students
ADD COLUMN batch_name VARCHAR(50) DEFAULT ('web-dev 2026');
