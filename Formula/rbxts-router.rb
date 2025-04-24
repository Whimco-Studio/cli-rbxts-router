class RbxtsRouter < Formula
    desc "CLI tools for @rbxts/router"
    homepage "https://github.com/Whimco-Studio/homebrew-rbxts-router/"
    url "https://github.com/Whimco-Studio/homebrew-rbxts-router/releases/download/v1.0.3/rbxts-router-macos-arm64"
    sha256 "23869a5b759c446116b3a8b54eadcb95cd46d72a13feb73f4c87c8a9e1a21240"
    version "1.0.3"
    license "ISC"
  
    def install
      bin.install "rbxts-router-macos-arm64" => "rbxts-router"
    end
  
    test do
      assert_match version.to_s, shell_output("#{bin}/rbxts-router --version")
    end
  end
  