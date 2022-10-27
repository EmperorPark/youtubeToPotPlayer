$compress = @{
    LiteralPath= "..\js", "..\manifest.json", "..\popup.html", "..\js\popup.js"
    CompressionLevel = "Fastest"
    DestinationPath = ".\YoutubeToPotPlayer.zip"
}
Compress-Archive @compress