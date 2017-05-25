# eBay Listings Calculator

[![Gem Version](https://badge.fury.io/rb/volunteermatch.svg)](https://badge.fury.io/rb/volunteermatch)

VolunteerMatch is a lightweight Ruby wrapper that queries VolunteerMatch's Public-Use API for searching information on nonprofit organizations and active volunteering opportunities.

This gem is inspired by the Ruby API example provided in the [vm-contrib repo](https://github.com/volunteermatch/vm-contrib). Queries are configured based on the attributes applied and return a collection of JSON results.

The Official documentation on using the API can be found at [VolunteerMatch.org](http://cdn.volunteermatch.org/www/legal/VM-Public-use-API-user-manual.pdf).


## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](#syntax-highlighting-in-the-editor)



## Getting Started

Add this line to your application's Gemfile:

```ruby
gem 'volunteermatch'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install volunteermatch


## Setting Your API Key

Concealing your API username and key is important. I recommend using [dotenv](https://github.com/bkeepers/dotenv) to do so.

```ruby
client = Volunteermatch::Client.new('username', 'key')
```

After setting a `client`, you are able to access all methods below.

## Basic Usage Examples

**Test API Connectivity**
```ruby
vm = client.test("John")
vm.result                   #=> "Hello John!"
```

**Get API Key Status**
```ruby
client.key_status
```

**Search Opportunities (location required)**
```ruby
client.search_opportunities(location: "New York", orgNames: ["red cross"], fieldsToDisplay: ["title", "description"])
```

**Search Organizations (location required)**
```ruby
client.search_organizations(location: "San Francisco", categoryIds: [23], fieldsToDisplay: ["name", "mission"])
```

**Get Metadata (defaults to current version)**
```ruby
client.metadata
```

**Get Service Status**
```ruby
client.service_status
```

## API Access Agreement

All data obtained through this gem belongs to VolunteerMatch. Please review the [Public-Use API Access Agreement](http://cdn.volunteermatch.org/www/legal/Public-Use%20API%20Access%20Agreement.pdf) for all terms, limitations and restrictions.

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Suggestions, bug reports and pull requests are encouraged for those who would like to take part in improving this gem. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org).

## License

Copyright (c) 2017, Evan Ng

The VolunteerMatch gem is available as open source under the terms of the [MIT license](https://opensource.org/licenses/MIT).
