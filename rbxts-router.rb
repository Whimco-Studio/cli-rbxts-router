class RbxtsRouter < Formula
    desc "RobloxTS Router Generator and Watcher"
    homepage "https://github.com/yourname/rbxts-router"
    url "https://github.com/yourname/rbxts-router/releases/download/v1.0.0/rbxts-router-macos"
    version "1.0.0"
    sha256 "<SHA256_OF_BINARY>"
  
    def install
      bin.install "rbxts-router-macos" => "rbxts-router"
    end
  end
  