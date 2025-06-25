
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">หน้าแรก</Link>
        </li>
        <li>
          <Link href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li>
          <Link href="/products">สินค้า</Link>
        </li>
        <li>
          <Link href="/contact">ติดต่อเรา</Link>
        </li>
      </ul>
    </nav>
  );
}