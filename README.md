# Rentique

**Course:** Electronic Business Development (BINF 503) · Winter 2026
**Instructor:** Dr. Nourhan Hamdi
**Teaching Assistants:** Mr. Nour Gaser, Mr. Omar Alaa, Ms. Mariam Khalid, Mr. Younes Zied, Mr. Mahmoud Hani

## 1. Team


| Name | Student ID | Tutorial group | GitHub username |
|---|---|---|---|
| Judy Shaker | 16001757 | T7 | judyshaker19-code |
| Jomana Sherif | 16001137 | T7 | jomanasheriff127-code |
| Jana Hani | 16004284 | T7 | janatantyyy-ux |
| Salma Morgan | 16003580 | T7 | salmamorgan |
| Hana Zamzam | 16001960 | T7 | hanazamzam |
| Mariam Moataz | 16003343 | T7 | mariammoataz292007-blip |

## 2. The idea

Rentique is a peer-to-peer fashion rental platform that allows users to rent clothing and accessories for special occasions instead of purchasing them. The platform connects individuals who want to rent out their fashion items with customers seeking affordable and convenient rental options. Users can list items, browse available products, request rentals for specific dates, approve or reject requests, track pickups and returns, and leave reviews. Rentique aims to make fashion more affordable, accessible, and sustainable by encouraging the reuse of clothing and accessories.

## 3. Features

### 3.1 The full product

- User registration and secure login.
- User profiles for renters and item owners.
- Fashion rental listings with item descriptions, categories, sizes, conditions, images, and daily rental prices.
- Browsing, searching, and filtering fashion items by category, size, and price.
- Date-based rental requests with automatic rental price calculation.
- Item availability checking to prevent overlapping confirmed bookings.
- Rental request approval and rejection by item owners.
- Rental status tracking, including approved, picked up, and returned items.
- Customer reviews and ratings after completed rentals.
- Personalized wishlists for saving favorite items.
- In-app messaging between renters and owners.
- Online payments and refundable security deposits.
- Delivery and pickup scheduling.
- Notifications for rental requests, approvals, and return reminders.
- Personalized fashion recommendations based on user preferences.

### 3.2 The use cases we will build

| # | Use case | What the user does | What they see | What is stored |
|---|---|---|---|---|
| 1 | Registration and login | Registers with name, email and password; logs in with email and password | Their home page, with their name in the header | A User, with the password hashed |
| 2 | Manage fashion listings | Owners create listings with a title, category, size, condition, image URL and daily rental price; edit or delete their own listings | Their listings with details, prices and confirmation of changes | Listing documents created, updated or deleted |
| 3 | Submit rental requests | Renters select an item and rental dates, check availability and submit a rental request | The calculated rental price and a pending rental request | A Rental with listing, renter, dates, total price and pending status |
| 4 | Approve or reject rental requests | Owners view requests for their items and approve or reject them after checking date availability | Updated request status and confirmed or rejected bookings | Rental status updated to approved or rejected |
| 5 | Manage pickup and returns | Owners mark approved rentals as picked up and later mark items as returned | The rental progress and updated return status | Rental status updated to active or returned |
| 6 | Manage reviews and ratings | Renters create, edit or delete reviews after completing a rental | Their rating and comment displayed on the item's page | Review documents created, updated or deleted |
  
## 4. Who owns what

| Member | Use case |
|---|---|
| Judy Shaker | 1. Registration and login |
| Jomana Sherif | 2. Manage fashion listings |
| Jana Hani | 3. Submit rental requests |
| Salma Morgan | 4. Approve or reject rental requests |
| Hana Zamzam | 5. Manage pickup and returns |
| Mariam Moataz | 6. Manage reviews and ratings |


## 5. Data model

### User

```js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // stored hashed, never as plain text
});
```

### Listing

```js
const listingSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: { type: String, required: true },
  category: { type: String, required: true },
  size: { type: String, required: true },
  condition: { type: String, required: true },
  imageUrl: { type: String },
  pricePerDay: { type: Number, required: true, min: 0 }
});
```

### Rental

```js
const rentalSchema = new mongoose.Schema({
  listingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true
  },
  renterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalPrice: { type: Number, required: true, min: 0 },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'active', 'returned'],
    default: 'pending'
  }
});
```

### Review

```js
const reviewSchema = new mongoose.Schema({
  rentalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rental',
    required: true,
    unique: true
  },
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: { type: String, required: true }
});
```


## 6. Run it locally

> Leave this section as it is until Submission 2 (Thursday 10 December 2026,
> 23:59). Then fill it in: we follow these steps to run your project.

### Back end

```bash
cd backend
npm install
# create backend/.env from backend/.env.example (see the table below)
npm start
```

The API runs on http://localhost:3000.

| Variable in `.env` | What it is |
|---|---|
| `MONGODB_URI` | The connection string of your MongoDB Atlas database |
| `JWT_SECRET` | Any long random text, used to sign login tokens |
| [Any other variable] | [What it is] |

### Front end

```bash
cd frontend
npm install
npm run dev
```

The app runs on [the address `npm run dev` prints, e.g. http://localhost:5173].
