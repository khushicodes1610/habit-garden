# Habit Garden

# Database Design

Version: 1.0

---

# Tables

## Users

Stores user account information.

Fields:
- id
- username
- email
- password
- avatar
- level
- xp
- coins
- createdAt
- updatedAt

---

## Habits

Stores all user habits.

Fields:
- id
- userId
- title
- description
- category
- difficulty
- frequency
- reminderTime
- isArchived
- createdAt
- updatedAt

---

## HabitCompletions

Tracks completed habits.

Fields:
- id
- habitId
- completedDate
- xpEarned
- coinsEarned

---

## Garden

Stores the current state of a user's garden.

Fields:
- id
- userId
- level
- theme
- weather
- season

---

## GardenItems

Items placed inside the garden.

Fields:
- id
- gardenId
- itemName
- itemType
- positionX
- positionY
- rotation
- scale

---

## Achievements

Achievement progress.

Fields:
- id
- userId
- achievementName
- unlocked
- unlockedAt

---

## ShopItems

Available shop items.

Fields:
- id
- name
- type
- price
- rarity
- image

---

## Purchases

Tracks user purchases.

Fields:
- id
- userId
- shopItemId
- purchasedAt