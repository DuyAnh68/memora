"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Users,
  Camera,
  Share2,
  Download,
  Smartphone,
  Star,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MemoraLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Giao diện dễ thương",
      description: "Chủ đề pastel SpongeBob tạo cảm giác vui tươi, gần gũi",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Tạo phòng kỷ niệm",
      description: "Mời bạn bè tham gia và cùng lưu giữ những khoảnh khắc đẹp",
    },
    {
      icon: <Camera className="w-8 h-8 text-green-400" />,
      title: "In ảnh & sticker",
      description:
        "In ảnh kỷ niệm với các sticker dễ thương chỉ trong vài thao tác",
    },
    {
      icon: <Share2 className="w-8 h-8 text-purple-400" />,
      title: "Lưu trữ & chia sẻ",
      description: "Lưu trữ an toàn và chia sẻ nhanh chóng với người thân",
    },
  ];

  const appScreens = [
    {
      title: "Đăng nhập đơn giản",
      description: "Giao diện đăng nhập thân thiện, dễ sử dụng",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Danh sách phòng",
      description: "Tạo phòng mới hoặc tham gia phòng của bạn bè",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Phòng kỷ niệm",
      description: "Tùy chỉnh và lưu giữ những khoảnh khắc đáng nhớ",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "Cửa hàng sticker",
      description: "Chọn sticker và item dễ thương cho ảnh của bạn",
      image: "/placeholder.svg?height=600&width=300",
    },
    {
      title: "In ảnh nhanh chóng",
      description: "In ảnh kỷ niệm chỉ với vài thao tác đơn giản",
      image: "/placeholder.svg?height=600&width=300",
    },
  ];

  const blogPosts = [
    {
      title: "Hướng dẫn sử dụng Memora cho người mới bắt đầu",
      excerpt:
        "Khám phá tất cả tính năng của Memora và cách tạo phòng kỷ niệm đầu tiên",
      date: "15 Tháng 12, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "10 Tips lưu giữ kỷ niệm đẹp nhất",
      excerpt:
        "Những mẹo hay giúp bạn tạo ra những kỷ niệm đáng nhớ cùng Memora",
      date: "12 Tháng 12, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Câu chuyện người dùng: Kỷ niệm gia đình qua Memora",
      excerpt: "Chia sẻ từ người dùng về cách Memora giúp kết nối gia đình",
      date: "10 Tháng 12, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                MEMORA
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Trang chủ
              </Link>
              <Link
                href="#features"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Tính năng
              </Link>
              <Link
                href="#download"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Tải App
              </Link>
              <Link
                href="#blog"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                Liên hệ
              </Link>
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white">
                Tải ngay
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-pink-100 pt-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#"
                  className="text-gray-700 hover:text-pink-500 transition-colors"
                >
                  Trang chủ
                </Link>
                <Link
                  href="#features"
                  className="text-gray-700 hover:text-pink-500 transition-colors"
                >
                  Tính năng
                </Link>
                <Link
                  href="#download"
                  className="text-gray-700 hover:text-pink-500 transition-colors"
                >
                  Tải App
                </Link>
                <Link
                  href="#blog"
                  className="text-gray-700 hover:text-pink-500 transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-pink-500 transition-colors"
                >
                  Liên hệ
                </Link>
                <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white w-full">
                  Tải ngay
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-pink-100 text-pink-700 hover:bg-pink-200">
              🌟 Ứng dụng lưu giữ kỷ niệm số 1
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Lưu giữ ký ức – Kết nối cảm xúc
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Memora giúp bạn lưu lại những khoảnh khắc đẹp nhất cùng bạn bè,
              người thân – tất cả chỉ trong một ứng dụng dễ thương với giao diện
              pastel SpongeBob.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white text-lg px-8 py-4"
            >
              Khám phá ngay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* App Screenshots Slider */}
          <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-6 scrollbar-hide">
              {appScreens.map((screen, index) => (
                <div key={index} className="flex-shrink-0 w-80">
                  <Card className="bg-white/60 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <Image
                          src={screen.image || "/placeholder.svg"}
                          alt={screen.title}
                          width={300}
                          height={600}
                          className="rounded-lg shadow-lg mx-auto"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {screen.title}
                      </h3>
                      <p className="text-gray-600">{screen.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá những tính năng tuyệt vời giúp bạn lưu giữ và chia sẻ kỷ
              niệm một cách dễ dàng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Tải Memora ngay hôm nay
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Có mặt trên cả iOS và Android. Bắt đầu lưu giữ những kỷ niệm đẹp
              của bạn ngay bây giờ!
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Tải từ</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
            </Button>

            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <Download className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Tải từ</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.8/5</span>
              </div>
              <span>•</span>
              <span>10,000+ lượt tải</span>
              <span>•</span>
              <span>Miễn phí</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-white/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Blog & Hướng dẫn
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Khám phá các bài viết hữu ích về cách sử dụng Memora và tips lưu
              giữ kỷ niệm
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-white/60 backdrop-blur-sm border-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="text-sm text-pink-600 mb-2">
                      {post.date}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      href="#"
                      className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center"
                    >
                      Đọc thêm
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                  MEMORA
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Ứng dụng lưu giữ kỷ niệm hàng đầu, giúp bạn kết nối với những
                người thân yêu qua những khoảnh khắc đáng nhớ.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Instagram
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  TikTok
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Tính năng
                  </Link>
                </li>
                <li>
                  <Link
                    href="#download"
                    className="hover:text-white transition-colors"
                  >
                    Tải App
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: hello@memora.app</li>
                <li>Hotline: 1900 1234</li>
                <li>Địa chỉ: TP. Hồ Chí Minh</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 Memora. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Chính sách bảo mật
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
