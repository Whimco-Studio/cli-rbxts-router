class RbxtsRouter < Formula
    desc "CLI tools for @rbxts/router"
    homepage "https://github.com/Whimco-Studio/homebrew-rbxts-router/"
    url "https://github.com/Whimco-Studio/homebrew-rbxts-router/releases/download/v1.0.4/rbxts-router-macos-arm64"
    sha256 "fce673618a4abbce0ef25940a0442ab9239c2ea38271609a2d783df053cb7036"
    version "1.0.4"
    license "ISC"
  
    def install
      bin.install "rbxts-router-macos-arm64" => "rbxts-router"
    end
  
    test do
      assert_match version.to_s, shell_output("#{bin}/rbxts-router --version")
    end
  end
  