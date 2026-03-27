/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  
  // base case
  if(password == null || typeof password != 'string'){
    return 'weak';
  } 

  var criteriaCount = 0;
  var upperCriteria = /[A-Z]/;
  var loweCriteria = /[a-z]/;
  var numCriteria = /[0-9]/;
  var specialCriteria = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/;


  if(password.length >= 8) criteriaCount++;
  if(upperCriteria.test(password)) criteriaCount++;
  if(loweCriteria.test(password)) criteriaCount++;
  if(numCriteria.test(password)) criteriaCount++;
  if(specialCriteria.test(password)) criteriaCount++;

  console.log(criteriaCount);

  if(criteriaCount == 0 || criteriaCount == 1) return 'weak';
  else if(criteriaCount == 2 || criteriaCount == 3) return 'medium';
  else if(criteriaCount == 4) return 'strong';
  else if(criteriaCount == 5) return 'very strong';
}
