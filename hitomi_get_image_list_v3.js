// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 1;
switch (g) {
case 197:
case 4038:
case 3858:
case 2672:
case 2550:
case 3153:
case 1308:
case 2263:
case 1929:
case 2980:
case 3983:
case 3260:
case 2610:
case 3553:
case 1652:
case 2150:
case 3131:
case 1742:
case 1254:
case 3999:
case 1897:
case 463:
case 2469:
case 71:
case 756:
case 972:
case 2721:
case 2497:
case 874:
case 1105:
case 1916:
case 3900:
case 1438:
case 262:
case 1922:
case 1862:
case 1756:
case 1749:
case 2720:
case 3207:
case 1789:
case 1394:
case 1646:
case 1659:
case 1505:
case 3668:
case 781:
case 3414:
case 30:
case 3530:
case 2462:
case 961:
case 2057:
case 886:
case 994:
case 393:
case 2533:
case 3130:
case 1571:
case 2611:
case 1077:
case 1065:
case 3261:
case 2369:
case 2779:
case 3192:
case 2808:
case 272:
case 3378:
case 3768:
case 1786:
case 1746:
case 390:
case 2397:
case 2541:
case 3060:
case 852:
case 3930:
case 1408:
case 918:
case 1054:
case 313:
case 958:
case 2933:
case 2711:
case 720:
case 1535:
case 2074:
case 4094:
case 3237:
case 2141:
case 157:
case 1866:
case 3314:
case 460:
case 1912:
case 2362:
case 2772:
case 1529:
case 3143:
case 215:
case 2540:
case 3183:
case 1926:
case 2180:
case 1129:
case 298:
case 2228:
case 3953:
case 32:
case 1244:
case 1970:
case 3175:
case 1752:
case 1284:
case 2257:
case 3599:
case 2894:
case 117:
case 3007:
case 3424:
case 782:
case 703:
case 621:
case 3501:
case 864:
case 3101:
case 560:
case 868:
case 2621:
case 2766:
case 1107:
case 1393:
case 1507:
case 2904:
case 120:
case 1356:
case 2697:
case 2320:
case 1349:
case 1001:
case 2472:
case 887:
case 2055:
case 1230:
case 3413:
case 1099:
case 307:
case 1452:
case 2410:
case 1075:
case 1067:
case 4086:
case 3029:
case 1561:
case 3839:
case 543:
case 4059:
case 1708:
case 3614:
case 103:
case 1231:
case 2273:
case 3035:
case 231:
case 2662:
case 3226:
case 3977:
case 2285:
case 2245:
case 1560:
case 389:
case 1382:
case 1342:
case 19:
case 1253:
case 3984:
case 3944:
case 2886:
case 932:
case 242:
case 1638:
case 2479:
case 2495:
case 1000:
case 717:
case 3022:
case 3832:
case 838:
case 530:
case 4052:
case 3468:
case 1459:
case 1446:
case 1486:
case 2762:
case 1267:
case 2598:
case 3144:
case 3071:
case 3184:
case 11:
case 3577:
case 3229:
case 3165:
case 1960:
case 2255:
case 15:
case 3584:
case 2889:
case 1820:
case 2849:
case 1299:
case 3954:
case 533:
case 433:
case 100:
case 1738:
case 797:
case 1201:
case 4042:
case 1493:
case 1456:
case 1489:
case 1449:
case 3216:
case 1200:
case 232:
case 2666:
case 2769:
case 2379:
case 2104:
case 181:
case 3624:
case 2882:
case 2797:
case 2421:
case 3809:
case 1292:
case 1907:
case 844:
case 1359:
case 3368:
case 1694:
case 1386:
case 2045:
case 2085:
case 1137:
case 1053:
case 241:
case 931:
case 440:
case 699:
case 123:
case 2073:
case 1482:
case 3235:
case 1031:
case 2064:
case 3012:
case 4056:
case 1961:
case 1537:
case 2934:
case 3836:
case 847:
case 3118:
case 3658:
case 2872:
case 2107:
case 1766:
case 3627:
case 3390:
case 3748:
case 900:
case 2810:
case 1904:
case 220:
case 583:
case 2349:
case 673:
case 2389:
case 1320:
case 2043:
case 2161:
case 483:
case 1134:
case 305:
case 2083:
case 521:
case 3251:
case 91:
case 956:
case 916:
case 2452:
case 660:
case 1534:
case 2937:
case 3080:
case 2561:
case 2708:
case 3187:
case 2231:
case 1264:
case 3147:
case 296:
case 3315:
case 2879:
case 1662:
case 2560:
case 1245:
case 3432:
case 3928:
case 328:
case 29:
case 2342:
case 2382:
case 923:
case 324:
case 3587:
case 1411:
case 3957:
case 3868:
case 3391:
case 4072:
case 2638:
case 142:
case 1479:
case 981:
case 3003:
case 866:
case 86:
case 349:
case 794:
case 2811:
case 2459:
case 2486:
case 3157:
case 3617:
case 2267:
case 21:
case 3128:
case 2876:
case 3963:
case 3280:
case 3974:
case 2283:
case 2243:
case 1893:
case 3528:
case 1255:
case 501:
case 1849:
case 3947:
case 1889:
case 3987:
case 1856:
case 2299:
case 837:
case 1476:
case 2738:
case 2201:
case 401:
case 2493:
case 4:
case 2449:
case 920:
case 795:
case 87:
case 3648:
case 3727:
case 132:
case 1379:
case 281:
case 1842:
case 1882:
case 1395:
case 1504:
case 3918:
case 2359:
case 2694:
case 2137:
case 1085:
case 3281:
case 304:
case 2053:
case 762:
case 2096:
case 223:
case 99:
case 888:
case 2442:
case 2821:
case 2482:
case 4020:
case 1934:
case 2537:
case 2961:
case 1311:
case 499:
case 3564:
case 3317:
case 3715:
case 2170:
case 3573:
case 118:
case 2308:
case 114:
case 1550:
case 3145:
case 1263:
case 3585:
case 195:
case 3545:
case 154:
case 158:
case 3606:
case 1287:
case 2570:
case 1247:
case 3164:
case 2254:
case 2742:
case 1469:
case 3458:
case 867:
case 3791:
case 3427:
case 4062:
case 3736:
case 1497:
case 599:
case 1721:
case 2519:
case 2438:
case 1366:
case 2916:
case 2105:
case 1776:
case 741:
case 3388:
case 2922:
case 846:
case 1679:
case 3702:
case 2756:
case 369:
case 633:
case 1720:
case 2394:
case 2686:
case 2505:
case 1903:
case 957:
case 4069:
case 1462:
case 1133:
case 2171:
case 3632:
case 1533:
case 3098:
case 1151:
case 3234:
case 2077:
case 3358:
case 1779:
case 1369:
case 2919:
case 172:
case 1676:
case 2759:
case 3204:
case 2693:
case 2786:
case 1397:
case 1620:
case 2649:
case 2905:
case 2116:
case 1503:
case 379:
case 1581:
case 4066:
case 997:
case 1087:
case 2135:
case 2054:
case 2971:
case 1711:
case 630:
case 1181:
case 459:
case 3298:
case 2866:
case 1772:
case 2912:
case 1950:
case 3155:
case 742:
case 2277:
case 115:
case 1540:
case 1580:
case 2529:
case 2129:
case 1180:
case 1140:
case 3945:
case 2642:
case 3609:
case 194:
case 2752:
case 2970:
case 3706:
case 1894:
case 1257:
case 2338:
case 1466:
case 3691:
case 519:
case 3448:
case 836:
case 1018:
case 3739:
case 559:
case 3636:
case 4092:
case 2072:
case 3761:
case 980:
case 3637:
case 1499:
case 3013:
case 4000:
case 1467:
case 1475:
case 1330:
case 3429:
case 1855:
case 1124:
case 403:
case 482:
case 773:
case 2883:
case 3594:
case 2148:
case 130:
case 3305:
case 3319:
case 2875:
case 49:
case 3194:
case 3840:
case 3880:
case 2276:
case 1401:
case 694:
case 828:
case 655:
case 4083:
case 202:
case 3938:
case 2095:
case 1400:
case 922:
case 3416:
case 3422:
case 3841:
case 661:
case 615:
case 1059:
case 3068:
case 1086:
case 1046:
case 2385:
case 2892:
case 2787:
case 2628:
case 2345:
case 849:
case 1353:
case 2657:
case 3370:
case 1396:
case 901:
case 1644:
case 2774:
case 2517:
case 2364:
case 2373:
case 2763:
case 3326:
case 366:
case 4053:
case 825:
case 654:
case 3023:
case 695:
case 2076:
case 3405:
case 3138:
case 1093:
case 581:
case 4031:
case 671:
case 423:
case 1056:
case 614:
case 1049:
case 1301:
case 2020:
case 618:
case 1089:
case 1784:
case 1343:
case 1383:
case 2210:
case 1744:
case 3471:
case 1654:
case 2687:
case 1399:
case 37:
case 2728:
case 523:
case 1375:
case 1777:
case 1367:
case 2917:
case 2674:
case 2485:
case 2445:
case 839:
case 1453:
case 3661:
case 516:
case 3470:
case 770:
case 400:
case 2464:
case 1431:
case 556:
case 3412:
case 983:
case 3607:
case 384:
case 2295:
case 2853:
case 388:
case 3994:
case 3268:
case 1259:
case 1246:
case 2158:
case 456:
case 2558:
case 3316:
case 1873:
case 2988:
case 804:
case 222:
case 500:
case 3322:
case 2948:
case 2527:
case 1924:
case 4030:
case 1178:
case 959:
case 4084:
case 2591:
case 2136:
case 2097:
case 1601:
case 919:
case 3360:
case 3770:
case 3952:
case 3542:
case 1683:
case 740:
case 1643:
case 2785:
case 2387:
case 1699:
case 1753:
case 3437:
case 3712:
case 1667:
case 3629:
case 3182:
case 1208:
case 2773:
case 1913:
case 2374:
case 1731:
case 2515:
case 3635:
case 2428:
case 2062:
case 3361:
case 1730:
case 346:
case 1477:
case 1828:
case 3593:
case 170:
case 2190:
case 299:
case 497:
case 3705:
case 2318:
case 1968:
case 1123:
case 3986:
case 2844:
case 2102:
case 1600:
case 3719:
case 2877:
case 641:
case 3460:
case 517:
case 730:
case 1008:
case 173:
case 1454:
case 3337:
case 879:
case 557:
case 259:
case 3605:
case 3559:
case 1568:
case 2902:
case 3586:
case 1847:
case 2125:
case 3989:
case 1792:
case 1923:
case 2269:
case 1863:
case 3716:
case 1700:
case 219:
case 1874:
case 3722:
case 2990:
case 999:
case 3024:
case 1238:
case 631:
case 1653:
case 3552:
case 1799:
case 3982:
case 1696:
case 1384:
case 1743:
case 3461:
case 2673:
case 642:
case 2664:
case 3729:
case 3214:
case 377:
case 336:
case 1513:
case 1775:
case 3612:
case 1377:
case 1767:
case 2106:
case 4028:
case 3058:
case 1069:
case 3521:
case 616:
case 3404:
case 1939:
case 3837:
case 960:
case 1536:
case 4057:
case 1136:
case 656:
case 3121:
case 562:
case 61:
case 1655:
case 1906:
case 462:
case 365:
case 2683:
case 2796:
case 2699:
case 1387:
case 1785:
case 374:
case 378:
case 2667:
case 3972:
case 2675:
case 3750:
case 3217:
case 3680:
case 1764:
case 1374:
case 1363:
case 2913:
case 1773:
case 1109:
case 600:
case 263:
case 1428:
case 2484:
case 850:
case 554:
case 558:
case 2444:
case 595:
case 2730:
case 3498:
case 3681:
case 518:
case 3641:
case 722:
case 2477:
case 3751:
case 2465:
case 571:
case 2692:
case 1190:
case 3995:
case 2038:
case 38:
case 2828:
case 3176:
case 623:
case 701:
case 1502:
case 2968:
case 1318:
case 2857:
case 3603:
case 806:
case 1884:
case 418:
case 414:
case 454:
case 1925:
case 458:
case 1266:
case 392:
case 2600:
case 80:
case 3979:
case 1865:
case 3576:
case 1590:
case 386:
case 7:
case 3017:
case 598:
case 2008:
case 620:
case 2454:
case 555:
case 4018:
case 515:
case 3111:
case 3781:
case 3741:
case 1132:
case 2630:
case 3595:
case 3304:
case 3860:
case 3703:
case 3179:
case 1902:
case 1297:
case 461:
case 2792:
case 3920:
case 2847:
case 1269:
case 2923:
case 1525:
case 455:
case 2168:
case 3579:
case 2700:
case 3227:
case 3195:
case 3921:
case 3048:
case 970:
case 82:
case 3861:
case 1539:
case 4047:
case 4087:
case 1991:
case 2238:
case 1139:
case 682:
case 826:
case 2094:
case 696:
case 364:
case 1909:
case 2653:
case 368:
case 1506:
case 2799:
case 1328:
case 702:
case 2743:
case 2384:
case 375:
case 2783:
case 1357:
case 3434:
case 3572:
case 2631:
case 1673:
case 3740:
case 3398:
case 391:
case 2365:
case 3110:
case 1106:
case 1915:
case 2513:
case 2483:
case 2443:
case 3734:
case 759:
case 1010:
case 719:
case 531:
case 2475:
case 2467:
case 1801:
case 3480:
case 3604:
case 1883:
case 2124:
case 230:
case 2256:
case 1148:
case 2249:
case 1220:
case 3969:
case 387:
case 1548:
case 1588:
case 2524:
case 1276:
case 3039:
case 4055:
case 102:
case 1095:
case 2400:
case 2059:
case 1747:
case 1628:
case 1787:
case 3209:
case 2353:
case 2242:
case 338:
case 2754:
case 933:
case 334:
case 1117:
case 1657:
case 2644:
case 3441:
case 3822:
case 3698:
case 3816:
case 1373:
case 1800:
case 1774:
case 121:
case 4085:
case 4045:
case 240:
case 1076:
case 441:
case 930:
case 4064:
case 4073:
case 827:
case 2093:
case 3002:
case 1830:
case 2301:
case 2049:
case 335:
case 3162:
case 1355:
case 1757:
case 2114:
case 2654:
case 1647:
case 1687:
case 541:
case 2514:
case 2430:
case 1663:
case 3562:
case 3380:
case 3798:
case 1445:
case 348:
case 943:
case 3634:
case 3015:
case 1211:
case 3009:
case 1:
case 2082:
case 2431:
case 1464:
case 2042:
case 3450:
case 3091:
case 1853:
case 329:
case 2392:
case 1127:
case 3597:
case 3169:
case 1158:
case 1618:
case 3704:
case 3225:
case 1831:
case 1948:
case 122:
case 1988:
case 3036:
case 3826:
case 1279:
case 3812:
case 4009:
case 1339:
case 1402:
case 529:
case 3420:
case 667:
case 448:
case 4015:
case 3476:
case 1490:
case 3310:
case 3255:
case 1051:
case 1987:
case 2584:
case 548:
case 1947:
case 3849:
case 3198:
case 2544:
case 4036:
case 2954:
case 1557:
case 3762:
case 1617:
case 2144:
case 1823:
case 1033:
case 2184:
case 2071:
case 2577:
case 1974:
case 2565:
case 1240:
case 2229:
case 1332:
case 1409:
case 3064:
case 2012:
case 769:
case 3934:
case 2836:
case 1281:
case 3045:
case 2891:
case 104:
case 2070:
case 3882:
case 833:
case 3842:
case 3504:
case 139:
case 2778:
case 2368:
case 1203:
case 1491:
case 1648:
case 332:
case 435:
case 2222:
case 3666:
case 3769:
case 3379:
case 3104:
case 207:
case 409:
case 2271:
case 534:
case 830:
case 538:
case 3534:
case 1080:
case 2839:
case 1040:
case 3472:
case 105:
case 3134:
case 4025:
case 1251:
case 927:
case 3055:
case 2413:
case 3904:
case 2678:
case 3852:
case 2806:
case 3320:
case 2205:
case 434:
case 2323:
case 2219:
case 438:
case 3669:
case 1658:
case 1118:
case 1788:
case 1627:
case 1748:
case 63:
case 3495:
case 2016:
case 2022:
case 4006:
case 2832:
case 149:
case 2468:
case 1391:
case 342:
case 445:
case 3479:
case 587:
case 677:
case 636:
case 1041:
case 3245:
case 124:
case 1587:
case 3846:
case 2984:
case 1868:
case 4039:
case 3264:
case 3998:
case 2825:
case 2035:
case 1250:
case 331:
case 2226:
case 2977:
case 3662:
case 1717:
case 1563:
case 685:
case 1732:
case 3181:
case 3074:
case 568:
case 564:
case 2237:
case 860:
case 3541:
case 2060:
case 4048:
case 591:
case 2930:
case 213:
case 2378:
case 2768:
case 290:
case 3795:
case 491:
case 179:
case 2100:
case 1602:
case 2500:
case 3103:
case 468:
case 464:
case 2192:
case 1725:
case 1327:
case 3676:
case 372:
case 3808:
case 1739:
case 512:
case 66:
case 724:
case 728:
case 1636:
case 3466:
case 910:
case 1448:
case 2424:
case 3018:
case 552:
case 2501:
case 2583:
case 1945:
case 1985:
case 2543:
case 3228:
case 1609:
case 3710:
case 2175:
case 2996:
case 3894:
case 2599:
case 90:
case 2848:
case 2888:
case 1964:
case 1298:
case 2567:
case 226:
case 3950:
case 1155:
case 3362:
case 1615:
case 2061:
case 1034:
case 315:
case 2478:
case 58:
case 725:
case 1639:
case 586:
case 1458:
case 3469:
case 637:
case 1427:
case 592:
case 2260:
case 395:
case 492:
case 1585:
case 3610:
case 358:
case 1606:
case 3247:
case 2131:
case 1709:
case 3287:
case 2596:
case 2999:
case 2196:
case 48:
case 1573:
case 2858:
case 2975:
case 3672:
case 1715:
case 314:
case 2613:
case 1185:
case 1145:
case 3274:
case 293:
case 578:
case 574:
case 1098:
case 688:
case 565:
case 739:
case 511:
case 1234:
case 2261:
case 3981:
case 4058:
case 3838:
case 2530:
case 3133:
case 3720:
case 863:
case 2992:
case 3903:
case 451:
case 2668:
case 465:
case 3776:
case 2900:
case 411:
case 362:
case 1348:
case 210:
case 2324:
case 3679:
case 3971:
case 2732:
case 53:
case 1060:
case 2417:
case 536:
case 3408:
case 113:
case 4024:
case 3054:
case 1768:
case 1592:
case 3746:
case 2204:
case 3786:
case 3693:
case 3689:
case 3649:
case 190:
case 2602:
case 3905:
case 3656:
case 707:
case 436:
case 1817:
case 1500:
case 43:
case 1623:
case 3522:
case 2725:
case 2690:
case 1192:
case 2739:
case 638:
case 634:
case 3494:
case 789:
case 2636:
case 3338:
case 2691:
case 1007:
case 2448:
case 1424:
case 3129:
case 3682:
case 2985:
case 2945:
case 1583:
case 2555:
case 1953:
case 3284:
case 3752:
case 3970:
case 317:
case 1996:
case 357:
case 1199:
case 1848:
case 1567:
case 1314:
case 2964:
case 1575:
case 1931:
case 1713:
case 2973:
case 2155:
case 1183:
case 2034:
case 2824:
case 1061:
case 1478:
case 635:
case 2639:
case 44:
case 4014:
case 2004:
case 727:
case 1943:
case 2545:
case 1260:
case 1983:
case 2955:
case 3652:
case 54:
case 2164:
case 3782:
case 3897:
case 3254:
case 3742:
case 397:
case 1967:
case 3869:
case 2317:
case 1531:
case 2573:
case 1153:
case 3308:
case 1613:
case 2145:
case 1037:
case 2185:
case 3929:
case 629:
case 193:
case 3935:
case 2098:
case 106:
case 3065:
case 1414:
case 3756:
case 644:
case 1992:
case 3789:
case 1207:
case 3394:
case 3686:
case 3659:
case 3505:
case 3519:
case 3916:
case 2388:
case 2625:
case 2348:
case 3922:
case 1723:
case 3493:
case 1019:
case 2339:
case 584:
case 3489:
case 880:
case 1423:
case 1005:
case 651:
case 3201:
case 1177:
case 1165:
case 2306:
case 3960:
case 3352:
case 35:
case 3820:
case 2987:
case 3030:
case 2557:
case 1954:
case 3299:
case 127:
case 2157:
case 905:
case 1184:
case 488:
case 484:
case 2033:
case 2823:
case 3267:
case 356:
case 1890:
case 31:
case 2128:
case 2963:
case 2280:
case 1714:
case 2240:
case 1565:
case 2974:
case 3608:
case 1577:
case 57:
case 924:
case 323:
case 928:
case 2409:
case 3442:
case 3031:
case 1235:
case 3482:
case 2050:
case 1836:
case 3537:
case 2241:
case 692:
case 3137:
case 2281:
case 4023:
case 1070:
case 537:
case 576:
case 3096:
case 949:
case 706:
case 476:
case 1809:
case 3907:
case 2436:
case 1368:
case 3386:
case 793:
case 2325:
case 2648:
case 1216:
case 1222:
case 47:
case 70:
case 1624:
case 381:
case 3452:
case 107:
case 3067:
case 3075:
case 2233:
case 1271:
case 790:
case 56:
case 4068:
case 2080:
case 1839:
case 612:
case 1029:
case 3561:
case 3083:
case 1413:
case 3393:
case 3810:
case 3507:
case 466:
case 2518:
case 3389:
case 1205:
case 753:
case 1724:
case 713:
case 1219:
case 2118:
case 2748:
case 2390:
case 2627:
case 3000:
case 249:
case 1832:
case 1022:
case 585:
case 1468:
case 3486:
case 675:
case 3446:
case 2391:
case 3092:
case 3638:
case 726:
case 821:
case 4013:
case 691:
case 2003:
case 189:
case 2174:
case 3560:
case 2163:
case 3342:
case 39:
case 3253:
case 3895:
case 883:
case 224:
case 2547:
case 1270:
case 3296:
case 2957:
case 2868:
case 485:
case 908:
case 303:
case 1614:
case 382:
case 3708:
case 1035:
case 1825:
case 2147:
case 396:
case 1212:
case 547:
case 3160:
case 2315:
case 3879:
case 2146:
case 3525:
case 2159:
case 152:
case 1976:
case 1579:
case 2722:
case 1195:
case 2993:
case 2278:
case 1703:
case 607:
case 112:
case 2559:
case 3854:
case 2949:
case 1920:
case 1111:
case 1781:
case 3463:
case 3132:
case 3474:
case 3532:
case 2671:
case 1017:
case 3447:
case 3487:
case 1511:
case 2735:
case 2337:
case 3673:
case 1572:
case 1780:
case 1398:
case 1740:
case 709:
case 2612:
case 3506:
case 1510:
case 3909:
case 164:
case 23:
case 2942:
case 3685:
case 175:
case 2461:
case 857:
case 3991:
case 579:
case 1088:
case 689:
case 734:
case 3418:
case 2834:
case 1861:
case 817:
case 1750:
case 1972:
case 469:
case 2629:
case 151:
case 3773:
case 3374:
case 2360:
case 1910:
case 2770:
case 2952:
case 3509:
case 3655:
case 2542:
case 165:
case 2582:
case 3347:
case 3785:
case 2437:
case 174:
case 2078:
case 3136:
case 627:
case 3097:
case 3069:
case 1058:
case 1404:
case 3939:
case 735:
case 3266:
case 2622:
case 3925:
case 1120:
case 2149:
case 3102:
case 1248:
case 192:
case 1288:
case 3877:
case 2193:
case 399:
case 2556:
case 748:
case 2549:
case 2986:
case 1520:
case 3884:
case 1681:
case 24:
case 3062:
case 729:
case 2361:
case 1911:
case 2771:
case 3272:
case 237:
case 276:
case 1819:
case 1451:
case 3674:
case 2908:
case 508:
case 3663:
case 800:
case 1340:
case 2329:
case 135:
case 3210:
case 1433:
case 1162:
case 3728:
case 2419:
case 2851:
case 81:
case 1002:
case 3020:
case 1871:
case 408:
case 85:
case 3076:
case 1239:
case 711:
case 1090:
case 2405:
case 2138:
case 3831:
case 1966:
case 4051:
case 3988:
case 425:
case 1197:
case 3948:
case 3279:
case 1036:
case 3527:
case 1812:
case 2850:
case 284:
case 4033:
case 3295:
case 3127:
case 693:
case 2268:
case 2994:
case 1704:
case 1303:
case 3464:
case 792:
case 1450:
case 881:
case 144:
case 96:
case 2335:
case 148:
case 2661:
case 301:
case 2470:
case 3211:
case 1015:
case 3867:
case 2223:
case 3958:
case 424:
case 4081:
case 3548:
case 613:
case 2880:
case 1039:
case 3927:
case 3276:
case 1829:
case 1290:
case 3718:
case 285:
case 3883:
case 3148:
case 1997:
case 549:
case 2305:
case 1166:
case 1006:
case 247:
case 937:
case 1480:
case 2429:
case 3072:
case 2761:
case 2371:
case 820:
case 2637:
case 524:
case 528:
case 1481:
case 1032:
case 1441:
case 3364:
case 3763:
case 2508:
case 2312:
case 505:
case 2326:
case 266:
case 3385:
case 26:
case 3628:
case 2435:
case 138:
case 2108:
case 3657:
case 2760:
case 3117:
case 2803:
case 1291:
case 2416:
case 2881:
case 109:
case 2422:
case 4080:
case 896:
case 2068:
case 4040:
case 626:
case 1835:
case 1025:
case 62:
case 405:
case 775:
case 988:
case 89:
case 984:
case 383:
case 1236:
case 1403:
case 176:
case 3367:
case 2819:
case 3765:
case 2562:
case 2380:
case 2798:
case 3744:
case 235:
case 3252:
case 2162:
case 3114:
case 17:
case 1538:
case 3093:
case 4026:
case 3056:
case 4012:
case 3049:
case 1833:
case 1138:
case 1405:
case 4070:
case 3300:
case 3873:
case 2225:
case 2197:
case 3924:
case 841:
case 3178:
case 2812:
case 2091:
case 188:
case 4071:
case 3578:
case 184:
case 229:
case 427:
case 3392:
case 74:
case 3259:
case 1994:
case 1268:
case 3286:
case 3246:
case 2704:
case 2009:
case 2341:
case 2381:
case 4019:
case 3082:
case 832:
case 3431:
case 2450:
case 527:
case 934:
case 333:
case 2232:
case 248:
case 1737:
case 244:
case 2015:
case 3496:
case 1319:
case 1223:
case 1194:
case 1880:
case 3401:
case 3293:
case 4035:
case 3855:
case 2604:
case 185:
case 3124:
case 3256:
case 330:
case 1594:
case 2997:
case 2202:
case 3289:
case 1707:
case 1305:
case 3052:
case 2006:
case 3475:
case 2351:
case 3330:
case 2480:
case 2440:
case 3483:
case 3443:
case 2734:
case 679:
case 1013:
case 3499:
case 2032:
case 2481:
case 842:
case 3331:
case 2350:
case 2962:
case 944:
case 948:
case 2209:
case 3242:
case 3353:
case 238:
case 234:
case 3644:
case 507:
case 1416:
case 1938:
case 1422:
case 1841:
case 736:
case 209:
case 777:
case 1881:
case 1068:
case 3059:
case 4029:
case 2025:
case 2835:
case 3492:
case 2236:
case 1186:
case 2579:
case 3874:
case 747:
case 2195:
case 1278:
case 2595:
case 1993:
case 2304:
case 2860:
case 2179:
case 2703:
case 1605:
case 4061:
case 3887:
case 426:
case 1586:
case 360:
case 1949:
case 3847:
case 2651:
case 2111:
case 526:
case 2781:
case 2741:
case 3630:
case 965:
case 1460:
case 4007:
case 785:
case 3008:
case 1337:
case 3454:
case 2511:
case 2572:
case 513:
case 3631:
case 2740:
case 1214:
case 2398:
case 2780:
case 1729:
case 3775:
case 1612:
case 1152:
case 2650:
case 1552:
case 2510:
case 1982:
case 3799:
case 1942:
case 3743:
case 275:
case 3783:
case 3696:
case 553:
case 766:
case 3238:
case 992:
case 453:
case 861:
case 815:
case 628:
case 855:
case 4060:
case 1407:
case 2088:
case 894:
case 413:
case 2861:
case 1834:
case 76:
case 1712:
case 3675:
case 1726:
case 50:
case 3208:
case 2640:
case 2680:
case 1629:
case 1182:
case 410:
case 1770:
case 2910:
case 1360:
case 1582:
case 265:
case 3796:
case 274:
case 3601:
case 818:
case 2121:
case 776:
case 895:
case 2058:
case 2521:
case 2404:
case 625:
case 912:
case 604:
case 1189:
case 1156:
case 3600:
case 2248:
case 2979:
case 1719:
case 2576:
case 1193:
case 2995:
case 28:
case 3038:
case 3828:
case 370:
case 1307:
case 1705:
case 3294:
case 3968:
case 3857:
case 1556:
case 1589:
case 1946:
case 2520:
case 1549:
case 3123:
case 3730:
case 862:
case 2498:
case 2641:
case 991:
case 1635:
case 3444:
case 1771:
case 975:
case 2334:
case 2911:
case 1361:
case 2733:
case 784:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760544002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,];
var gg_b = "1760544002/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
