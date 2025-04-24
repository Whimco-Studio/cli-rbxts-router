class RbxtsRouter < Formula
    desc "CLI tools for @rbxts/router"
    homepage "https://github.com/Whimco-Studio/homebrew-rbxts-router/"
    url "https://github.com/Whimco-Studio/homebrew-rbxts-router/releases/download/v1.0.1/rbxts-router-macos-arm64"
    sha256 "a791e4847bcb9d462a7f140b624cdf5274e1f1e0af7095bcb31a0a27b439b6fd"
    version "1.0.3"
    license "ISC"
  
    def install
      bin.install "rbxts-router-macos-arm64" => "rbxts-router"
    end
  
    test do
      assert_match version.to_s, shell_output("#{bin}/rbxts-router --version")
    end
  end
  