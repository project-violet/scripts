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
var o = 0;
switch (g) {
case 913:
case 3226:
case 929:
case 485:
case 787:
case 1719:
case 3794:
case 120:
case 471:
case 3607:
case 3613:
case 1865:
case 2649:
case 1892:
case 125:
case 1809:
case 3380:
case 2823:
case 2508:
case 190:
case 3344:
case 3473:
case 3125:
case 3482:
case 3926:
case 999:
case 1874:
case 3887:
case 195:
case 2558:
case 2627:
case 2302:
case 1208:
case 32:
case 4044:
case 3081:
case 2206:
case 740:
case 1789:
case 3196:
case 3236:
case 3683:
case 3332:
case 2352:
case 3962:
case 2737:
case 4022:
case 3757:
case 39:
case 1908:
case 3817:
case 3430:
case 3528:
case 3803:
case 4080:
case 255:
case 1958:
case 3412:
case 3571:
case 3295:
case 1619:
case 2956:
case 461:
case 3707:
case 3713:
case 4036:
case 1552:
case 870:
case 1881:
case 3980:
case 1599:
case 3514:
case 459:
case 916:
case 3244:
case 3486:
case 1502:
case 4062:
case 1896:
case 4095:
case 2898:
case 135:
case 3568:
case 2277:
case 3944:
case 3491:
case 3222:
case 1601:
case 939:
case 2841:
case 3059:
case 3266:
case 1701:
case 3174:
case 888:
case 3416:
case 2039:
case 3395:
case 2952:
case 2902:
case 3092:
case 1811:
case 1751:
case 289:
case 3192:
case 964:
case 2863:
case 3336:
case 3676:
case 2299:
case 3074:
case 2139:
case 33:
case 2034:
case 506:
case 3589:
case 2498:
case 2272:
case 1378:
case 1638:
case 1012:
case 2441:
case 4067:
case 2994:
case 3656:
case 539:
case 2636:
case 3927:
case 1435:
case 1507:
case 1243:
case 643:
case 3154:
case 1728:
case 2134:
case 1130:
case 841:
case 1290:
case 638:
case 2207:
case 384:
case 1082:
case 2626:
case 1594:
case 1385:
case 2024:
case 1671:
case 2257:
case 1331:
case 1020:
case 3197:
case 3249:
case 163:
case 877:
case 848:
case 759:
case 2124:
case 1120:
case 3097:
case 2913:
case 3949:
case 1572:
case 1425:
case 1411:
case 3367:
case 2957:
case 1583:
case 893:
case 1390:
case 836:
case 257:
case 104:
case 761:
case 2394:
case 2722:
case 2666:
case 2976:
case 4049:
case 4037:
case 1784:
case 1474:
case 3777:
case 1921:
case 2470:
case 3501:
case 809:
case 747:
case 2276:
case 2164:
case 445:
case 1016:
case 2744:
case 529:
case 2383:
case 621:
case 646:
case 1278:
case 2372:
case 3652:
case 2075:
case 3602:
case 2610:
case 1614:
case 176:
case 1545:
case 1793:
case 1409:
case 2188:
case 1985:
case 1854:
case 502:
case 3403:
case 1186:
case 3799:
case 1693:
case 2578:
case 698:
case 768:
case 2644:
case 892:
case 3812:
case 2433:
case 2800:
case 2732:
case 3752:
case 3337:
case 201:
case 3677:
case 127:
case 3967:
case 2357:
case 2945:
case 2088:
case 1768:
case 785:
case 1148:
case 512:
case 1879:
case 771:
case 2766:
case 822:
case 628:
case 2313:
case 3479:
case 1236:
case 1683:
case 603:
case 1995:
case 2198:
case 1672:
case 12:
case 699:
case 591:
case 1081:
case 2761:
case 2141:
case 1571:
case 2690:
case 153:
case 1135:
case 1694:
case 1366:
case 1707:
case 1713:
case 629:
case 3454:
case 2526:
case 19:
case 986:
case 613:
case 1817:
case 1803:
case 1430:
case 223:
case 2595:
case 734:
case 3865:
case 219:
case 3892:
case 2743:
case 325:
case 2562:
case 1657:
case 1025:
case 2271:
case 1380:
case 2790:
case 3719:
case 2228:
case 74:
case 320:
case 1607:
case 1613:
case 3556:
case 612:
case 1887:
case 236:
case 2393:
case 3689:
case 1111:
case 1125:
case 1783:
case 2063:
case 3506:
case 25:
case 1926:
case 2785:
case 1065:
case 2522:
case 2914:
case 3751:
case 3187:
case 1932:
case 87:
case 2170:
case 1584:
case 1362:
case 616:
case 983:
case 1159:
case 415:
case 543:
case 2214:
case 1460:
case 3308:
case 2615:
case 2621:
case 2544:
case 758:
case 232:
case 1165:
case 156:
case 2023:
case 2968:
case 2678:
case 2338:
case 1593:
case 1966:
case 1336:
case 144:
case 1514:
case 1645:
case 2488:
case 2805:
case 1922:
case 1486:
case 1244:
case 2510:
case 3502:
case 664:
case 3153:
case 538:
case 2721:
case 4058:
case 330:
case 1944:
case 1491:
case 2033:
case 1222:
case 2328:
case 86:
case 2940:
case 1326:
case 3896:
case 2566:
case 2371:
case 335:
case 267:
case 2446:
case 2284:
case 724:
case 233:
case 2993:
case 3594:
case 583:
case 3385:
case 2864:
case 943:
case 3331:
case 3020:
case 337:
case 1249:
case 1860:
case 2351:
case 2989:
case 3073:
case 2301:
case 3628:
case 184:
case 3082:
case 1949:
case 3173:
case 2875:
case 1367:
case 931:
case 2758:
case 4015:
case 1756:
case 3120:
case 3378:
case 3012:
case 2000:
case 1891:
case 3990:
case 2919:
case 715:
case 1606:
case 417:
case 1179:
case 942:
case 3496:
case 2846:
case 3321:
case 1589:
case 362:
case 270:
case 2888:
case 705:
case 407:
case 1154:
case 3728:
case 2469:
case 2549:
case 2537:
case 1886:
case 3290:
case 4085:
case 281:
case 1927:
case 3435:
case 3507:
case 3112:
case 2100:
case 938:
case 3481:
case 700:
case 1453:
case 1812:
case 1752:
case 946:
case 2834:
case 3931:
case 1830:
case 1403:
case 366:
case 1417:
case 3361:
case 855:
case 397:
case 954:
case 3768:
case 2429:
case 3086:
case 2201:
case 2251:
case 1677:
case 434:
case 3231:
case 3116:
case 1777:
case 3343:
case 2824:
case 1820:
case 1501:
case 3390:
case 3978:
case 2319:
case 3492:
case 998:
case 3465:
case 3221:
case 3215:
case 376:
case 3545:
case 314:
case 469:
case 3793:
case 2842:
case 2439:
case 2447:
case 3016:
case 4061:
case 1652:
case 3610:
case 1842:
case 510:
case 2699:
case 515:
case 951:
case 443:
case 3018:
case 825:
case 3372:
case 1824:
case 505:
case 4007:
case 4013:
case 2487:
case 2777:
case 2501:
case 890:
case 3118:
case 2551:
case 3423:
case 994:
case 357:
case 2873:
case 500:
case 1319:
case 318:
case 3722:
case 3585:
case 4057:
case 442:
case 783:
case 3945:
case 1429:
case 3313:
case 3307:
case 3146:
case 1201:
case 3357:
case 4:
case 301:
case 2349:
case 3680:
case 438:
case 2812:
case 3433:
case 311:
case 3515:
case 2752:
case 2702:
case 3710:
case 3188:
case 907:
case 3850:
case 3578:
case 4083:
case 2267:
case 2403:
case 2830:
case 2799:
case 3294:
case 1469:
case 1219:
case 1549:
case 2886:
case 3695:
case 1455:
case 1100:
case 640:
case 2104:
case 934:
case 835:
case 3561:
case 2891:
case 1658:
case 3636:
case 491:
case 3283:
case 3441:
case 3994:
case 2179:
case 2054:
case 2848:
case 2606:
case 3498:
case 1050:
case 830:
case 58:
case 1875:
case 2367:
case 37:
case 4076:
case 3042:
case 1708:
case 188:
case 3124:
case 786:
case 2816:
case 3736:
case 3907:
case 1289:
case 2756:
case 428:
case 1818:
case 2519:
case 2249:
case 2197:
case 2237:
case 1351:
case 3257:
case 3207:
case 3213:
case 1989:
case 3142:
case 3626:
case 284:
case 3795:
case 534:
case 2222:
case 798:
case 668:
case 3841:
case 1940:
case 2448:
case 3129:
case 1685:
case 1566:
case 2280:
case 167:
case 1446:
case 1371:
case 1631:
case 196:
case 1488:
case 1240:
case 2514:
case 685:
case 873:
case 1510:
case 2486:
case 579:
case 2922:
case 3667:
case 126:
case 141:
case 1133:
case 1855:
case 2980:
case 2074:
case 3767:
case 1214:
case 2540:
case 3306:
case 2159:
case 3202:
case 1621:
case 1544:
case 1615:
case 2192:
case 2593:
case 837:
case 2745:
case 1968:
case 3252:
case 863:
case 2109:
case 661:
case 791:
case 2092:
case 2910:
case 2065:
case 1522:
case 1475:
case 177:
case 148:
case 3999:
case 721:
case 1580:
case 746:
case 2266:
case 3039:
case 872:
case 678:
case 1418:
case 1268:
case 1170:
case 2584:
case 2932:
case 2395:
case 2887:
case 1536:
case 3727:
case 4052:
case 193:
case 1661:
case 1393:
case 1971:
case 3870:
case 2125:
case 594:
case 2783:
case 1063:
case 738:
case 109:
case 2344:
case 3823:
case 15:
case 1340:
case 4002:
case 2482:
case 1562:
case 1163:
case 1384:
case 1595:
case 3377:
case 7:
case 551:
case 1839:
case 659:
case 483:
case 742:
case 60:
case 2607:
case 2794:
case 866:
case 2295:
case 1938:
case 2853:
case 3400:
case 3833:
case 2262:
case 2181:
case 2713:
case 2936:
case 2366:
case 1526:
case 29:
case 1434:
case 2096:
case 3737:
case 2803:
case 2430:
case 2817:
case 350:
case 3450:
case 1829:
case 2683:
case 3256:
case 3069:
case 517:
case 2236:
case 482:
case 3302:
case 2310:
case 122:
case 2081:
case 1761:
case 3206:
case 3399:
case 4019:
case 764:
case 101:
case 694:
case 227:
case 2285:
case 2879:
case 1945:
case 1307:
case 1146:
case 1766:
case 2086:
case 3201:
case 2576:
case 559:
case 1710:
case 2854:
case 2048:
case 2361:
case 3951:
case 2693:
case 297:
case 50:
case 266:
case 2186:
case 1800:
case 111:
case 1515:
case 2640:
case 1245:
case 89:
case 1732:
case 2804:
case 2459:
case 1383:
case 1276:
case 1744:
case 1018:
case 1632:
case 2215:
case 2465:
case 2221:
case 3842:
case 2793:
case 2409:
case 2545:
case 108:
case 739:
case 214:
case 1175:
case 2390:
case 157:
case 2668:
case 118:
case 1666:
case 1722:
case 1585:
case 204:
case 3824:
case 2343:
case 2784:
case 1064:
case 1470:
case 2060:
case 658:
case 702:
case 3527:
case 64:
case 2120:
case 3875:
case 568:
case 1957:
case 2261:
case 634:
case 2425:
case 2583:
case 2182:
case 3708:
case 1463:
case 1207:
case 1142:
case 1626:
case 1762:
case 2082:
case 83:
case 585:
case 1024:
case 712:
case 2385:
case 844:
case 2594:
case 237:
case 2961:
case 263:
case 3351:
case 1590:
case 2020:
case 365:
case 2507:
case 3100:
case 381:
case 2435:
case 273:
case 2771:
case 375:
case 2481:
case 799:
case 2728:
case 1294:
case 1983:
case 3219:
case 1134:
case 370:
case 3888:
case 4051:
case 3405:
case 1972:
case 2130:
case 2290:
case 1695:
case 578:
case 729:
case 1034:
case 3050:
case 2321:
case 2030:
case 2378:
case 1561:
case 2638:
case 1636:
case 1376:
case 1283:
case 1441:
case 1994:
case 3338:
case 2358:
case 189:
case 3968:
case 1252:
case 540:
case 1356:
case 1147:
case 1767:
case 2087:
case 3214:
case 1139:
case 413:
case 332:
case 971:
case 1202:
case 3544:
case 3615:
case 3070:
case 1039:
case 4071:
case 1952:
case 2577:
case 3170:
case 2825:
case 1902:
case 3785:
case 3475:
case 3123:
case 377:
case 2751:
case 348:
case 499:
case 4028:
case 1129:
case 978:
case 2896:
case 1277:
case 367:
case 3993:
case 2651:
case 3284:
case 3446:
case 2017:
case 235:
case 1898:
case 396:
case 2601:
case 2053:
case 1841:
case 3940:
case 1667:
case 326:
case 341:
case 2835:
case 1977:
case 3133:
case 3855:
case 3293:
case 2881:
case 961:
case 4038:
case 3721:
case 2599:
case 3869:
case 2103:
case 3643:
case 2454:
case 3434:
case 1906:
case 1749:
case 90:
case 150:
case 1400:
case 155:
case 4084:
case 1302:
case 322:
case 1627:
case 1055:
case 3761:
case 1206:
case 600:
case 1399:
case 3829:
case 1256:
case 1069:
case 2789:
case 2258:
case 3928:
case 4014:
case 3063:
case 2689:
case 309:
case 1508:
case 2874:
case 3536:
case 1727:
case 393:
case 3393:
case 3971:
case 3839:
case 2859:
case 225:
case 2892:
case 3384:
case 3595:
case 1637:
case 3442:
case 1712:
case 920:
case 3697:
case 76:
case 1535:
case 113:
case 1407:
case 1263:
case 1413:
case 514:
case 1128:
case 2925:
case 2911:
case 1802:
case 851:
case 3754:
case 2126:
case 3814:
case 3489:
case 3868:
case 199:
case 1673:
case 1682:
case 1596:
case 2624:
case 2541:
case 2211:
case 1620:
case 2724:
case 1298:
case 2935:
case 817:
case 1877:
case 527:
case 749:
case 2981:
case 652:
case 2309:
case 1720:
case 3347:
case 3339:
case 1483:
case 3969:
case 1472:
case 1782:
case 1525:
case 20:
case 566:
case 597:
case 3654:
case 2443:
case 3006:
case 2996:
case 2742:
case 3893:
case 3255:
case 2563:
case 2162:
case 2235:
case 386:
case 1630:
case 1998:
case 1370:
case 1612:
case 1038:
case 807:
case 2490:
case 3840:
case 1941:
case 3797:
case 3269:
case 3604:
case 2325:
case 644:
case 261:
case 2764:
case 2144:
case 1760:
case 455:
case 879:
case 1559:
case 656:
case 1233:
case 1592:
case 1565:
case 1686:
case 2022:
case 834:
case 1648:
case 562:
case 382:
case 2646:
case 3451:
case 106:
case 2523:
case 247:
case 2122:
case 2570:
case 1184:
case 1933:
case 3177:
case 2044:
case 2858:
case 708:
case 1716:
case 1040:
case 1574:
case 2180:
case 930:
case 1856:
case 3939:
case 3947:
case 1791:
case 2959:
case 1223:
case 2032:
case 2675:
case 2335:
case 2010:
case 3002:
case 1748:
case 2381:
case 2746:
case 711:
case 2274:
case 3503:
case 3517:
case 2110:
case 1068:
case 280:
case 1923:
case 2259:
case 3239:
case 1476:
case 164:
case 701:
case 3247:
case 2209:
case 271:
case 2396:
case 563:
case 537:
case 3152:
case 2415:
case 383:
case 3553:
case 1970:
case 1398:
case 3725:
case 3582:
case 3934:
case 3364:
case 3696:
case 287:
case 3851:
case 2408:
case 3573:
case 3172:
case 342:
case 2831:
case 3801:
case 3520:
case 3438:
case 401:
case 1019:
case 3:
case 2279:
case 2904:
case 88:
case 3635:
case 2027:
case 2655:
case 1250:
case 684:
case 2254:
case 338:
case 4046:
case 2979:
case 3083:
case 1845:
case 3318:
case 3072:
case 2550:
case 2137:
case 1089:
case 3428:
case 1554:
case 4075:
case 3924:
case 4018:
case 2755:
case 3781:
case 2500:
case 3113:
case 3471:
case 2821:
case 3388:
case 750:
case 3013:
case 4064:
case 3057:
case 418:
case 2049:
case 3942:
case 1579:
case 755:
case 3224:
case 904:
case 2729:
case 3468:
case 4042:
case 590:
case 47:
case 3674:
case 1687:
case 3964:
case 1350:
case 2861:
case 800:
case 3591:
case 2647:
case 1753:
case 2379:
case 2639:
case 520:
case 1813:
case 4024:
case 914:
case 976:
case 815:
case 3586:
case 3414:
case 3609:
case 398:
case 3792:
case 966:
case 346:
case 1051:
case 1653:
case 3819:
case 3440:
case 3774:
case 1101:
case 1477:
case 1787:
case 2067:
case 3484:
case 391:
case 3516:
case 3045:
case 2397:
case 1151:
case 4034:
case 1347:
case 3483:
case 467:
case 1106:
case 3298:
case 92:
case 3877:
case 2880:
case 690:
case 760:
case 1205:
case 2600:
case 788:
case 3323:
case 1840:
case 3941:
case 1269:
case 1419:
case 1604:
case 953:
case 620:
case 1654:
case 1006:
case 1893:
case 1255:
case 302:
case 3630:
case 186:
case 3370:
case 3457:
case 2505:
case 2750:
case 4023:
case 1329:
case 3581:
case 2700:
case 3712:
case 1697:
case 313:
case 2832:
case 215:
case 303:
case 2317:
case 3620:
case 205:
case 3028:
case 2353:
case 3963:
case 1489:
case 1868:
case 3333:
case 399:
case 477:
case 3682:
case 952:
case 781:
case 3270:
case 3168:
case 1355:
case 45:
case 2529:
case 4063:
case 1099:
case 1369:
case 3616:
case 635:
case 1052:
case 2987:
case 183:
case 3970:
case 840:
case 1503:
case 1828:
case 3923:
case 419:
case 2826:
case 1239:
case 1199:
case 3786:
case 364:
case 1247:
case 3445:
case 1929:
case 492:
case 3509:
case 2253:
case 2895:
case 374:
case 2217:
case 3084:
case 4041:
case 3140:
case 2539:
case 2547:
case 3559:
case 3691:
case 3363:
case 1401:
case 3933:
case 1177:
case 1587:
case 3040:
case 28:
case 3648:
case 3806:
case 2903:
case 2917:
case 306:
case 1924:
case 1242:
case 1512:
case 1113:
case 1107:
case 2920:
case 53:
case 2391:
case 2663:
case 1530:
case 544:
case 1057:
case 3189:
case 3579:
case 2798:
case 868:
case 662:
case 2282:
case 2273:
case 1007:
case 2386:
case 2912:
case 2641:
case 2524:
case 719:
case 1:
case 1094:
case 234:
case 1582:
case 1711:
case 1934:
case 3950:
case 2930:
case 2698:
case 663:
case 2542:
case 2763:
case 279:
case 2495:
case 3200:
case 2212:
case 2462:
case 1318:
case 1072:
case 1375:
case 75:
case 1681:
case 1234:
case 709:
case 3653:
case 2991:
case 3001:
case 748:
case 2444:
case 2286:
case 777:
case 2633:
case 2373:
case 2382:
case 481:
case 1288:
case 80:
case 1440:
case 1792:
case 2948:
case 1765:
case 154:
case 1145:
case 207:
case 3051:
case 3617:
case 470:
case 2320:
case 59:
case 3883:
case 2185:
case 1988:
case 2723:
case 258:
case 2575:
case 2291:
case 2986:
case 2131:
case 1774:
case 1484:
case 1246:
case 191:
case 604:
case 2248:
case 4000:
case 2480:
case 2770:
case 81:
case 128:
case 1334:
case 2960:
case 1591:
case 2015:
case 2670:
case 2078:
case 1218:
case 3300:
case 1468:
case 2312:
case 1889:
case 2546:
case 2623:
case 2466:
case 726:
case 1076:
case 1548:
case 294:
case 2178:
case 1586:
case 1665:
case 2837:
case 2260:
case 2849:
case 3499:
case 1176:
case 3717:
case 1264:
case 2588:
case 465:
case 767:
case 2733:
case 1659:
case 3813:
case 3807:
case 2121:
case 251:
case 1837:
case 2586:
case 829:
case 813:
case 2692:
case 484:
case 2975:
case 2609:
case 298:
case 1588:
case 1916:
case 1733:
case 2659:
case 3647:
case 3639:
case 1121:
case 2918:
case 3354:
case 2674:
case 2334:
case 228:
case 536:
case 899:
case 2591:
case 55:
case 803:
case 3729:
case 1312:
case 2218:
case 194:
case 601:
case 2076:
case 1723:
case 3629:
case 1986:
case 1131:
case 3397:
case 4054:
case 618:
case 1518:
case 291:
case 2774:
case 2484:
case 2246:
case 3067:
case 1480:
case 756:
case 522:
case 1248:
case 2342:
case 657:
case 608:
case 1633:
case 2759:
case 1373:
case 1991:
case 3890:
case 1286:
case 2560:
case 3747:
case 3167:
case 1564:
case 2288:
case 1382:
case 1085:
case 2765:
case 2792:
case 2324:
case 2709:
case 1031:
case 4079:
case 107:
case 246:
case 179:
case 1143:
case 3979:
case 1763:
case 1542:
case 3605:
case 2318:
case 2072:
case 1495:
case 3027:
case 2375:
case 816:
case 2635:
case 1867:
case 526:
case 2234:
case 649:
case 752:
case 2681:
case 981:
case 2520:
case 2801:
case 3458:
case 806:
case 1436:
case 67:
case 2696:
case 533:
case 3954:
case 2364:
case 2711:
case 1043:
case 2725:
case 2573:
case 3831:
case 1698:
case 242:
case 387:
case 2851:
case 3408:
case 3037:
case 231:
case 577:
case 2611:
case 1220:
case 2057:
case 988:
case 2224:
case 1798:
case 2942:
case 1282:
case 1161:
case 1273:
case 2007:
case 79:
case 1741:
case 2242:
case 3755:
case 1348:
case 532:
case 2735:
case 864:
case 243:
case 3821:
case 2346:
case 2512:
case 1061:
case 345:
case 3137:
case 3769:
case 3149:
case 169:
case 72:
case 1391:
case 3705:
case 1426:
case 1982:
case 960:
case 3570:
case 3044:
case 2177:
case 3718:
case 2229:
case 1836:
case 2587:
case 996:
case 3646:
case 3122:
case 1917:
case 3431:
case 1467:
case 361:
case 3764:
case 3144:
case 3325:
case 453:
case 689:
case 1547:
case 3396:
case 932:
case 565:
case 3209:
case 3533:
case 2152:
case 2553:
case 283:
case 3110:
case 2239:
case 3066:
case 3259:
case 560:
case 3675:
case 3010:
case 3335:
case 2002:
case 3992:
case 588:
case 1287:
case 452:
case 3274:
case 3909:
case 2099:
case 3381:
case 3959:
case 2369:
case 2947:
case 3618:
case 3541:
case 936:
case 4059:
case 1317:
case 1303:
case 3598:
case 2868:
case 100:
case 1353:
case 4009:
case 2489:
case 909:
case 4065:
case 3026:
case 110:
case 444:
case 1449:
case 655:
case 919:
case 1750:
case 650:
case 2329:
case 2704:
case 1555:
case 4074:
case 115:
case 1600:
case 2205:
case 2056:
case 2797:
case 2840:
case 2419:
case 2269:
case 2006:
case 3281:
case 2654:
case 3374:
case 3634:
case 30:
case 286:
case 3235:
case 3563:
case 2255:
case 2106:
case 2679:
case 2339:
case 3095:
case 1158:
case 3935:
case 3392:
case 2156:
case 3309:
case 3136:
case 1880:
case 3518:
case 3827:
case 2101:
case 2477:
case 1067:
case 3480:
case 3770:
case 3248:
case 901:
case 3723:
case 358:
case 462:
case 2883:
case 4030:
case 3986:
case 2872:
case 1397:
case 3422:
case 2151:
case 3948:
case 1843:
case 2617:
case 3633:
case 3373:
case 3444:
case 1747:
case 1167:
case 3564:
case 911:
case 3382:
case 463:
case 3916:
case 2753:
case 3121:
case 351:
case 3432:
case 3837:
case 3260:
case 3410:
case 2402:
case 3849:
case 3178:
case 730:
case 2499:
case 2703:
case 3623:
case 472:
case 1729:
case 3078:
case 2300:
case 918:
case 3466:
case 3216:
case 1354:
case 2687:
case 3021:
case 3670:
case 2350:
case 1861:
case 3282:
case 3161:
case 3273:
case 1997:
case 3741:
case 3220:
case 404:
case 3798:
case 1137:
case 2089:
case 3973:
case 1769:
case 883:
case 675:
case 1149:
case 414:
case 3391:
case 3663:
case 3426:
case 1705:
case 681:
case 2554:
case 949:
case 2876:
case 3348:
case 1755:
case 3920:
case 1500:
case 3061:
case 4016:
case 1027:
case 1655:
case 2597:
case 3230:
case 3867:
case 790:
case 660:
case 2119:
case 1254:
case 1669:
case 3316:
case 665:
case 2845:
case 1605:
case 3495:
case 1885:
case 4086:
case 3043:
case 2406:
case 720:
case 688:
case 2900:
case 3090:
case 2019:
case 427:
case 3524:
case 1788:
case 1478:
case 843:
case 2114:
case 425:
case 549:
case 2786:
case 989:
case 1259:
case 641:
case 420:
case 171:
case 1209:
case 1974:
case 1132:
case 185:
case 1292:
case 1533:
case 2660:
case 1959:
case 696:
case 667:
case 797:
case 2791:
case 1032:
case 831:
case 2223:
case 2168:
case 2270:
case 1675:
case 3287:
case 57:
case 1909:
case 1166:
case 1381:
case 3529:
case 2648:
case 178:
case 56:
case 1646:
case 1122:
case 3917:
case 3903:
case 1431:
case 1570:
case 2716:
case 2933:
case 239:
case 776:
case 1044:
case 1858:
case 677:
case 842:
case 3953:
case 648:
case 3836:
case 2574:
case 1180:
case 3467:
case 3217:
case 1764:
case 1144:
case 1311:
case 2140:
case 3547:
case 1080:
case 2445:
case 838:
case 216:
case 2565:
case 1022:
case 2193:
case 3862:
case 950:
case 1374:
case 3387:
case 2630:
case 3008:
case 159:
case 3650:
case 821:
case 1490:
case 623:
case 1036:
case 2494:
case 2941:
case 1365:
case 3427:
case 65:
case 2138:
case 609:
case 2720:
case 4053:
case 430:
case 1981:
case 3880:
case 2241:
case 636:
case 4017:
case 2483:
case 2773:
case 693:
case 435:
case 3108:
case 2511:
case 2782:
case 300:
case 2673:
case 3353:
case 2028:
case 518:
case 557:
case 2596:
case 828:
case 2682:
case 1541:
case 1624:
case 1461:
case 2620:
case 3317:
case 3303:
case 2413:
case 3555:
case 2263:
case 229:
case 2852:
case 3449:
case 1734:
case 3810:
case 1911:
case 2802:
case 3437:
case 508:
case 3569:
case 2899:
case 3750:
case 1642:
case 1126:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757725202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,];
var gg_b = "1757725202/";

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
