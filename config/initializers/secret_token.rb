# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Munki::Application.config.secret_key_base = '318bedc564250fccde182b71da06901328f9eacf8e0b36dd6181b8c6be73e4a8d4ba3f40c3e849e99a583a78e4c5b334724006c19030edb4baf1a16a79e5359b'
