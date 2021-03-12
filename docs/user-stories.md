# User stories

## Information

### Basic information

**Story:** As a Thuringian citizen, I want to read basic, simple information about the field name project and how I can contribute.

**Details:**
Information should include 

### Detailed information

**Story:** As a researcher, I want to read information about the field name archive and dataset.

**Details:**
Information should include 

## Account

### Sign up

**Story:** As a new user, I want to create a user account for submitting field names. I choose a valid email and a secure, long password.

**Details:**
The home page should open again. In the navigation bar, now there should be links to submit new field names and to sign out.

### Sign up existing

**Story:** As an existing user, I forgot about my old existing account and want to create a user account for submitting field names.

**Details:**
A message should be shown that a user with that name and/or email address already exists.

### Sign in

**Story:** As an existing user, I want to sign in to my user account for submitting field names.

### Sign out

**Story:** As a signed in user, I want to sign out of the platform.

**Details:**
If currently on a restricted page such as submitting field names, the login page should open.

## Search

### Search existing

**Story:** As a hiker, I want to check if the field name called "Hahnengrundweg" exists in the database. That field name should indeed exist in the database.

**Details:**
There should be a list of snippets for the found maps and markings that match the searched field name. Maps should be distinguishable from markings. Field names should link to a detail page, but also the GND number should point to an appropriate library such as the DNB.

### Search missing

**Story:** As a contributor, I want to check if the field name called "Yorkshire" already exists in the database. That field name should indeed not yet exist in the database.

**Details:**
The result list should be empty and show a information that no results could be found.

## Card details

### Card from search

**Story:** Having searched for "Hahnengrundweg", I now want to find detailed information about the search result snippet "Hahnengrundweg" with the GND number "7621022-4".

**Details:**
The GND number should link to the DNB database entry.

### Details from URL/ID

**Story:** I've received a [link](http://example.com/details/HisBest_cbu_00038239) to a field name card from a friend, and now want to see detailed information about that.

**Details:**
Details should include the type, GND number, region, location, utilisation, timestamps, the ID, and license.
A map should be shown.

### Details missing

**Story:** I've accidentially mistyped the [URL](http://example.com/details/Oops) for a field name card detail page.

**Details:**
An information should be shown that no field name was found for that URL/ID.

## Marking details

### Marking from search

**Story:** Having searched for "Marolterode", I now want to find detailed information about the search result snippet "Marolterode" with the GND number "7740698-9".

**Details:**
The GND number should link to the DNB database entry.

### Marking from URL/ID

**Story:** I've received a [link](http://example.com/details/HisBest_cbu_00038730) to a field name marking from a friend, and now want to see detailed information about that.

**Details:**
Details should include the type, GND number, location, timestamps, the ID, license, and children cards.
A map should be shown.

### Marking missing

**Story:** I've accidentially mistyped the [URL](http://example.com/details/Urgh) for a marking detail page.

**Details:**
An information should be shown that no field name was found for that URL/ID.

## Submit

### Submit logged in

**Story:** As a signed in user, I want to submit a new field name.

**Details:**
TODO

### Submit logged out

**Story:** As a user who is not yet signed in, I want to submit a new field name.

**Details:**
The sign in/sign up page should open.
