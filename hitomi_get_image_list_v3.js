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
case 2957:
case 34:
case 594:
case 2943:
case 3758:
case 3440:
case 1279:
case 45:
case 761:
case 1219:
case 1263:
case 1254:
case 430:
case 3981:
case 2120:
case 3224:
case 2638:
case 1017:
case 2519:
case 2141:
case 2563:
case 1805:
case 1683:
case 3818:
case 2626:
case 4089:
case 323:
case 1451:
case 2058:
case 575:
case 1752:
case 258:
case 2753:
case 2764:
case 1465:
case 407:
case 835:
case 1931:
case 2200:
case 3506:
case 3786:
case 1410:
case 587:
case 3633:
case 1872:
case 1812:
case 134:
case 996:
case 2086:
case 2869:
case 1780:
case 2813:
case 2873:
case 2188:
case 3297:
case 3047:
case 1023:
case 2325:
case 2353:
case 3322:
case 2364:
case 799:
case 2540:
case 1352:
case 2347:
case 143:
case 3135:
case 1698:
case 535:
case 3198:
case 2287:
case 3789:
case 3463:
case 3479:
case 2667:
case 2915:
case 2975:
case 12:
case 449:
case 2725:
case 887:
case 2796:
case 207:
case 965:
case 3692:
case 1328:
case 912:
case 2193:
case 470:
case 458:
case 182:
case 3803:
case 1336:
case 903:
case 2406:
case 3601:
case 1216:
case 1192:
case 195:
case 1061:
case 2902:
case 2159:
case 2516:
case 3210:
case 2114:
case 377:
case 1449:
case 856:
case 4086:
case 361:
case 1257:
case 2395:
case 1243:
case 2954:
case 981:
case 2001:
case 2338:
case 2218:
case 111:
case 1466:
case 49:
case 737:
case 3581:
case 3701:
case 3792:
case 3139:
case 1059:
case 1542:
case 618:
case 820:
case 2625:
case 2897:
case 716:
case 2696:
case 1607:
case 164:
case 3333:
case 3273:
case 242:
case 2767:
case 956:
case 1900:
case 1806:
case 3572:
case 700:
case 1868:
case 3689:
case 865:
case 663:
case 3800:
case 3906:
case 2849:
case 803:
case 1189:
case 1304:
case 3548:
case 2284:
case 2921:
case 3266:
case 1987:
case 399:
case 2344:
case 483:
case 2515:
case 2575:
case 1680:
case 1260:
case 3909:
case 3152:
case 2405:
case 1335:
case 503:
case 1088:
case 3071:
case 1032:
case 919:
case 1652:
case 565:
case 1398:
case 759:
case 1427:
case 3443:
case 2664:
case 2940:
case 896:
case 2329:
case 1020:
case 3050:
case 6:
case 2502:
case 3630:
case 680:
case 352:
case 498:
case 3385:
case 1158:
case 520:
case 1636:
case 3038:
case 2472:
case 225:
case 777:
case 1469:
case 3128:
case 2203:
case 1473:
case 854:
case 3026:
case 2750:
case 935:
case 2448:
case 61:
case 792:
case 2117:
case 3392:
case 3534:
case 3245:
case 3136:
case 2177:
case 2504:
case 2106:
case 168:
case 0:
case 2493:
case 3896:
case 942:
case 1855:
case 3373:
case 3313:
case 3766:
case 2211:
case 2008:
case 318:
case 2889:
case 667:
case 294:
case 2066:
case 2907:
case 998:
case 1571:
case 3394:
case 2600:
case 3532:
case 3708:
case 3588:
case 1511:
case 1715:
case 3084:
case 1204:
case 2459:
case 3649:
case 1925:
case 126:
case 435:
case 3955:
case 801:
case 287:
case 281:
case 3520:
case 4094:
case 3498:
case 2295:
case 363:
case 2238:
case 3961:
case 2378:
case 2282:
case 305:
case 2318:
case 102:
case 1283:
case 3003:
case 2939:
case 721:
case 1702:
case 275:
case 1538:
case 1663:
case 570:
case 614:
case 2703:
case 419:
case 2662:
case 3624:
case 1124:
case 1526:
case 1034:
case 1791:
case 4069:
case 3745:
case 3154:
case 2250:
case 4073:
case 3163:
case 3541:
case 3556:
case 744:
case 1110:
case 1170:
case 2229:
case 3727:
case 4008:
case 1743:
case 346:
case 1165:
case 2830:
case 2936:
case 2718:
case 55:
case 1817:
case 1433:
case 2303:
case 530:
case 1081:
case 2432:
case 235:
case 3078:
case 3042:
case 1391:
case 3116:
case 3292:
case 3345:
case 2137:
case 494:
case 4066:
case 870:
case 858:
case 1529:
case 2027:
case 3923:
case 1640:
case 1964:
case 1953:
case 2109:
case 487:
case 2731:
case 3366:
case 4045:
case 31:
case 3773:
case 1235:
case 507:
case 1151:
case 1315:
case 1544:
case 1072:
case 2687:
case 1012:
case 960:
case 2980:
case 1360:
case 1567:
case 3483:
case 1999:
case 3:
case 1621:
case 3847:
case 2456:
case 2441:
case 1048:
case 3646:
case 3651:
case 3864:
case 3555:
case 3751:
case 3746:
case 970:
case 2507:
case 1009:
case 403:
case 825:
case 3932:
case 637:
case 1971:
case 631:
case 3087:
case 1207:
case 124:
case 3436:
case 2477:
case 2631:
case 2148:
case 2833:
case 583:
case 3669:
case 1888:
case 1832:
case 3871:
case 3811:
case 1113:
case 3428:
case 1169:
case 17:
case 2172:
case 3397:
case 296:
case 2051:
case 1740:
case 705:
case 3941:
case 3850:
case 860:
case 420:
case 598:
case 2362:
case 1938:
case 600:
case 3324:
case 2010:
case 2070:
case 1319:
case 2983:
case 1354:
case 3561:
case 3838:
case 2678:
case 2539:
case 1037:
case 3710:
case 3826:
case 2181:
case 3920:
case 321:
case 2423:
case 1657:
case 3452:
case 333:
case 327:
case 3895:
case 1856:
case 1950:
case 1228:
case 454:
case 3959:
case 1893:
case 203:
case 3258:
case 2455:
case 3102:
case 1929:
case 1763:
case 1754:
case 907:
case 344:
case 3407:
case 1376:
case 59:
case 1236:
case 3191:
case 265:
case 901:
case 1316:
case 746:
case 2762:
case 2134:
case 3370:
case 3310:
case 842:
case 2536:
case 1489:
case 2024:
case 4046:
case 4051:
case 2528:
case 1814:
case 373:
case 2490:
case 220:
case 3346:
case 2097:
case 525:
case 3222:
case 3160:
case 4070:
case 2264:
case 71:
case 1944:
case 1675:
case 1615:
case 2387:
case 1967:
case 930:
case 780:
case 2461:
case 2935:
case 7:
case 1547:
case 178:
case 2049:
case 3523:
case 2684:
case 3797:
case 2998:
case 1564:
case 13:
case 1241:
case 3342:
case 263:
case 2498:
case 1734:
case 3226:
case 2520:
case 2435:
case 500:
case 205:
case 1002:
case 3662:
case 3703:
case 480:
case 1444:
case 375:
case 3250:
case 2556:
case 2119:
case 2179:
case 2745:
case 1162:
case 1220:
case 197:
case 191:
case 871:
case 2896:
case 3493:
case 1348:
case 2825:
case 3784:
case 3106:
case 1015:
case 531:
case 537:
case 218:
case 1312:
case 3008:
case 1372:
case 3271:
case 892:
case 184:
case 2373:
case 2313:
case 885:
case 2708:
case 2588:
case 683:
case 54:
case 1533:
case 4018:
case 848:
case 2955:
case 4078:
case 3459:
case 2649:
case 3598:
case 3109:
case 1450:
case 1748:
case 625:
case 2923:
case 831:
case 405:
case 2899:
case 837:
case 999:
case 2773:
case 2366:
case 21:
case 1986:
case 1712:
case 1609:
case 3731:
case 1772:
case 3244:
case 2140:
case 577:
case 3013:
case 3073:
case 3980:
case 2308:
case 2031:
case 2794:
case 1482:
case 3687:
case 548:
case 3822:
case 2864:
case 2853:
case 3441:
case 2646:
case 2651:
case 1426:
case 585:
case 2593:
case 418:
case 1958:
case 2727:
case 952:
case 1214:
case 1592:
case 1274:
case 1259:
case 3742:
case 765:
case 3778:
case 1501:
case 2670:
case 1781:
case 1585:
case 2665:
case 69:
case 712:
case 660:
case 3830:
case 2977:
case 1411:
case 1637:
case 2018:
case 2201:
case 1471:
case 3303:
case 132:
case 1930:
case 1043:
case 3027:
case 2116:
case 2292:
case 3137:
case 2176:
case 1828:
case 2042:
case 2956:
case 2941:
case 2850:
case 1737:
case 2480:
case 1261:
case 1605:
case 2157:
case 2770:
case 1016:
case 3678:
case 514:
case 2710:
case 670:
case 658:
case 2838:
case 2765:
case 4000:
case 1464:
case 2895:
case 233:
case 775:
case 227:
case 2826:
case 1178:
case 2920:
case 2751:
case 2746:
case 2349:
case 2555:
case 1290:
case 10:
case 1804:
case 649:
case 2988:
case 2932:
case 1933:
case 2811:
case 3148:
case 561:
case 3833:
case 2087:
case 1709:
case 1589:
case 2436:
case 1612:
case 3477:
case 1306:
case 3631:
case 3417:
case 3046:
case 396:
case 1131:
case 4062:
case 2590:
case 3296:
case 1021:
case 2428:
case 3225:
case 1898:
case 3253:
case 2160:
case 3264:
case 2115:
case 1223:
case 2749:
case 108:
case 320:
case 3580:
case 3700:
case 2286:
case 1768:
case 1586:
case 1706:
case 1309:
case 2439:
case 1184:
case 719:
case 3935:
case 427:
case 601:
case 3461:
case 607:
case 959:
case 3552:
case 3455:
case 115:
case 985:
case 312:
case 2959:
case 2974:
case 162:
case 3762:
case 244:
case 2407:
case 365:
case 630:
case 1901:
case 2062:
case 3024:
case 2370:
case 2577:
case 2310:
case 977:
case 65:
case 992:
case 3490:
case 1634:
case 2993:
case 735:
case 599:
case 4087:
case 3753:
case 742:
case 2948:
case 358:
case 2099:
case 1390:
case 1973:
case 2104:
case 2506:
case 2786:
case 2972:
case 1268:
case 3894:
case 2912:
case 448:
case 3813:
case 563:
case 3873:
case 3611:
case 3869:
case 1688:
case 3671:
case 2416:
case 1994:
case 2568:
case 471:
case 477:
case 2053:
case 492:
case 3325:
case 2047:
case 200:
case 1549:
case 3188:
case 2297:
case 1111:
case 846:
case 2758:
case 3650:
case 8:
case 3943:
case 1927:
case 3262:
case 2981:
case 3120:
case 1361:
case 696:
case 1150:
case 4025:
case 1777:
case 3409:
case 1524:
case 1195:
case 81:
case 3156:
case 3563:
case 3141:
case 3638:
case 2730:
case 921:
case 3682:
case 1487:
case 223:
case 237:
case 1843:
case 1138:
case 3827:
case 1182:
case 3626:
case 2421:
case 2183:
case 459:
case 1857:
case 2842:
case 1693:
case 2934:
case 3845:
case 248:
case 944:
case 307:
case 416:
case 1510:
case 3406:
case 1377:
case 1570:
case 1317:
case 2803:
case 2685:
case 1761:
case 2330:
case 3516:
case 4064:
case 2210:
case 3576:
case 4053:
case 292:
case 3159:
case 4047:
case 2265:
case 3468:
case 3902:
case 1129:
case 818:
case 3629:
case 1674:
case 1659:
case 271:
case 277:
case 725:
case 1790:
case 1323:
case 2135:
case 3347:
case 2025:
case 2322:
case 1875:
case 3808:
case 1966:
case 44:
case 2509:
case 129:
case 3915:
case 546:
case 437:
case 603:
case 2479:
case 1209:
case 2419:
case 760:
case 612:
case 3644:
case 79:
case 259:
case 2454:
case 1755:
case 3796:
case 1144:
case 3725:
case 665:
case 863:
case 1167:
case 1248:
case 1098:
case 2491:
case 214:
case 2107:
case 3897:
case 675:
case 1949:
case 188:
case 342:
case 533:
case 1212:
case 758:
case 1388:
case 770:
case 1332:
case 2402:
case 3371:
case 3155:
case 2968:
case 2800:
case 1569:
case 4095:
case 1513:
case 1573:
case 2044:
case 3190:
case 681:
case 2512:
case 4026:
case 2689:
case 2548:
case 3434:
case 1997:
case 4082:
case 398:
case 3729:
case 261:
case 3242:
case 1774:
case 1205:
case 2475:
case 3001:
case 1924:
case 963:
case 2460:
case 3954:
case 2785:
case 2505:
case 3824:
case 656:
case 2581:
case 1879:
case 1661:
case 1863:
case 3543:
case 3161:
case 4071:
case 1320:
case 3350:
case 749:
case 1545:
case 1756:
case 1741:
case 2050:
case 3329:
case 252:
case 3810:
case 3916:
case 946:
case 707:
case 2630:
case 3782:
case 3738:
case 701:
case 3865:
case 1083:
case 1910:
case 1816:
case 1677:
case 2038:
case 2385:
case 1965:
case 3117:
case 2245:
case 2136:
case 2095:
case 3448:
case 4044:
case 2026:
case 106:
case 1951:
case 635:
case 821:
case 827:
case 833:
case 1004:
case 3699:
case 1788:
case 1508:
case 730:
case 3344:
case 299:
case 467:
case 2266:
case 3560:
case 3481:
case 2208:
case 2071:
case 1478:
case 4029:
case 2686:
case 110:
case 2152:
case 3405:
case 1147:
case 3123:
case 3033:
case 1566:
case 3653:
case 2622:
case 2443:
case 39:
case 1821:
case 544:
case 1623:
case 3647:
case 441:
case 2319:
case 889:
case 2239:
case 2776:
case 1010:
case 2820:
case 876:
case 2995:
case 1105:
case 340:
case 1423:
case 4068:
case 564:
case 3118:
case 772:
case 3464:
case 2643:
case 3453:
case 2856:
case 2127:
case 791:
case 3142:
case 1618:
case 43:
case 3681:
case 379:
case 1787:
case 154:
case 1300:
case 2911:
case 966:
case 3368:
case 386:
case 3040:
case 2169:
case 2173:
case 1225:
case 2113:
case 2740:
case 1046:
case 2458:
case 1051:
case 517:
case 1296:
case 3255:
case 1833:
case 1631:
case 1417:
case 3612:
case 1477:
case 3709:
case 3589:
case 224:
case 3835:
case 2660:
case 2006:
case 943:
case 1387:
case 1700:
case 2675:
case 2108:
case 2599:
case 1097:
case 1247:
case 2252:
case 3223:
case 2321:
case 1264:
case 555:
case 1684:
case 2547:
case 2553:
case 23:
case 3522:
case 1998:
case 92:
case 1935:
case 817:
case 3184:
case 3309:
case 165:
case 2719:
case 2236:
case 2145:
case 2754:
case 2763:
case 1885:
case 1603:
case 1801:
case 3103:
case 4009:
case 2691:
case 409:
case 995:
case 604:
case 629:
case 2874:
case 424:
case 3634:
case 3558:
case 47:
case 1536:
case 1134:
case 3054:
case 864:
case 438:
case 1024:
case 3305:
case 490:
case 46:
case 3002:
case 1282:
case 3381:
case 1939:
case 2283:
case 202:
case 874:
case 82:
case 1295:
case 2357:
case 1342:
case 911:
case 4012:
case 2124:
case 3220:
case 4072:
case 3162:
case 391:
case 2595:
case 2663:
case 740:
case 2702:
case 175:
case 3839:
case 1662:
case 3467:
case 384:
case 70:
case 2485:
case 895:
case 1271:
case 3232:
case 1331:
case 3606:
case 3312:
case 2197:
case 1211:
case 3348:
case 1106:
case 2492:
case 1784:
case 2925:
case 1474:
case 3100:
case 1414:
case 1168:
case 3429:
case 936:
case 3668:
case 2760:
case 882:
case 3533:
case 2149:
case 1600:
case 2571:
case 708:
case 3772:
case 1094:
case 1244:
case 290:
case 1952:
case 1420:
case 1109:
case 1598:
case 3922:
case 402:
case 2823:
case 3852:
case 989:
case 3426:
case 2298:
case 582:
case 2048:
case 1687:
case 3482:
case 2151:
case 2375:
case 2146:
case 369:
case 2235:
case 2567:
case 4034:
case 834:
case 468:
case 52:
case 1936:
case 1718:
case 3781:
case 2170:
case 3334:
case 3592:
case 574:
case 955:
case 2757:
case 3259:
case 2165:
case 2743:
case 762:
case 828:
case 3828:
case 866:
case 1137:
case 2391:
case 3057:
case 2529:
case 1027:
case 332:
case 3836:
case 2877:
case 2817:
case 606:
case 135:
case 2302:
case 1488:
case 2081:
case 2676:
case 3411:
case 426:
case 3035:
case 3332:
case 1371:
case 345:
case 1231:
case 3212:
case 2607:
case 264:
case 1311:
case 2806:
case 1767:
case 3403:
case 1897:
case 455:
case 388:
case 1625:
case 2445:
case 3655:
case 236:
case 198:
case 2798:
case 2189:
case 2735:
case 2868:
case 1190:
case 3573:
case 3513:
case 57:
case 211:
case 217:
case 1085:
case 3924:
case 1382:
case 2962:
case 1338:
case 83:
case 3341:
case 1092:
case 3774:
case 524:
case 3714:
case 878:
case 902:
case 2093:
case 2059:
case 1557:
case 489:
case 2074:
case 1543:
case 3320:
case 4088:
case 393:
case 3661:
case 3819:
case 2494:
case 1782:
case 1865:
case 578:
case 550:
case 2783:
case 1870:
case 53:
case 1976:
case 2020:
case 669:
case 838:
case 1726:
case 3374:
case 2130:
case 3234:
case 3545:
case 3314:
case 1795:
case 3756:
case 2041:
case 3431:
case 3677:
case 1412:
case 3965:
case 436:
case 2158:
case 541:
case 322:
case 2413:
case 2473:
case 3970:
case 3910:
case 96:
case 2809:
case 1560:
case 990:
case 3788:
case 2680:
case 3732:
case 1711:
case 1344:
case 4093:
case 729:
case 38:
case 417:
case 3951:
case 306:
case 3946:
case 3840:
case 2584:
case 2704:
case 3821:
case 2186:
case 19:
case 1647:
case 160:
case 2652:
case 1940:
case 1664:
case 2427:
case 1653:
case 289:
case 3153:
case 3566:
case 3164:
case 4074:
case 2122:
case 3418:
case 3478:
case 2032:
case 2088:
case 1481:
case 2215:
case 1405:
case 2335:
case 3268:
case 2410:
case 3969:
case 2470:
case 170:
case 2752:
case 1747:
case 3390:
case 3597:
case 1764:
case 266:
case 2023:
case 513:
case 228:
case 1396:
case 909:
case 1132:
case 495:
case 3171:
case 4061:
case 3355:
case 1188:
case 1325:
case 1671:
case 2500:
case 3632:
case 2780:
case 1869:
case 3688:
case 1086:
case 1611:
case 234:
case 1437:
case 2254:
case 1030:
case 2339:
case 2736:
case 2279:
case 3777:
case 3361:
case 1120:
case 526:
case 443:
case 3620:
case 2942:
case 1650:
case 1943:
case 3028:
case 3857:
case 1058:
case 3656:
case 3182:
case 1156:
case 568:
case 3195:
case 686:
case 2881:
case 793:
case 2562:
case 3524:
case 3802:
case 2192:
case 2216:
case 2336:
case 1406:
case 2739:
case 466:
case 826:
case 2101:
case 107:
case 2328:
case 1845:
case 639:
case 868:
case 1629:
case 4023:
case 56:
case 3129:
case 295:
case 2061:
case 1576:
case 1114:
case 2903:
case 3860:
case 3007:
case 304:
case 947:
case 941:
case 78:
case 1808:
case 706:
case 3790:
case 2055:
case 2352:
case 130:
case 1347:
case 3323:
case 3167:
case 22:
case 1399:
case 1796:
case 662:
case 3755:
case 2090:
case 3144:
case 3551:
case 2587:
case 274:
case 2707:
case 1089:
case 950:
case 978:
case 1915:
case 2424:
case 2924:
case 626:
case 1415:
case 311:
case 3383:
case 4004:
case 48:
case 3093:
case 1227:
case 167:
case 2341:
case 161:
case 410:
case 293:
case 972:
case 808:
case 2527:
case 2320:
case 1139:
case 1792:
case 3542:
case 3059:
case 1581:
case 3578:
case 3639:
case 1862:
case 1505:
case 586:
case 2661:
case 2879:
case 50:
case 839:
case 3466:
case 2125:
case 1213:
case 1333:
case 3806:
case 2332:
case 2594:
case 1402:
case 1968:
case 2212:
case 2035:
case 3445:
case 1107:
case 288:
case 2949:
case 602:
case 2690:
case 3304:
case 4083:
case 336:
case 815:
case 2997:
case 2573:
case 1906:
case 3868:
case 3531:
case 1294:
case 551:
case 3735:
case 557:
case 3680:
case 1266:
case 199:
case 2951:
case 206:
case 2840:
case 2004:
case 1180:
case 3427:
case 376:
case 3652:
case 2623:
case 2442:
case 3398:
case 3186:
case 3215:
case 210:
case 1152:
case 2147:
case 493:
case 1686:
case 2418:
case 1071:
case 2478:
case 3088:
case 515:
case 2153:
case 2566:
case 389:
case 3503:
case 3783:
case 152:
case 3494:
case 355:
case 1630:
case 1050:
case 2756:
case 2359:
case 2234:
case 3056:
case 539:
case 1245:
case 3291:
case 932:
case 1026:
case 2720:
case 2393:
case 795:
case 2970:
case 2816:
case 879:
case 2910:
case 222:
case 3413:
case 2083:
case 508:
case 2965:
case 1385:
case 66:
case 690:
case 1038:
case 1301:
case 2677:
case 3636:
case 638:
case 1981:
case 2777:
case 3279:
case 2150:
case 2927:
case 717:
case 253:
case 3942:
case 429:
case 2620:
case 3728:
case 2182:
case 2138:
case 3451:
case 137:
case 123:
case 131:
case 2857:
case 1842:
case 1183:
case 2028:
case 1421:
case 3805:
case 1878:
case 3881:
case 3562:
case 1818:
case 2524:
case 3077:
case 2036:
case 940:
case 2487:
case 1730:
case 2195:
case 1389:
case 1786:
case 832:
case 2969:
case 986:
case 2080:
case 1104:
case 2973:
case 90:
case 597:
case 1912:
case 2268:
case 572:
case 1948:
case 2597:
case 3752:
case 764:
case 2111:
case 1297:
case 3023:
case 2549:
case 3500:
case 1416:
case 3780:
case 2688:
case 334:
case 1476:
case 1633:
case 2994:
case 1568:
case 2875:
case 453:
case 229:
case 908:
case 872:
case 1386:
case 2007:
case 1509:
case 1246:
case 1251:
case 3352:
case 343:
case 2323:
case 2790:
case 939:
case 1096:
case 897:
case 3221:
case 1025:
case 3240:
case 2546:
case 2167:
case 1884:
case 2908:
case 159:
case 1454:
case 1463:
case 3587:
case 1803:
case 382:
case 63:
case 3192:
case 3216:
case 2570:
case 1601:
case 2510:
case 3739:
case 185:
case 2891:
case 962:
case 569:
case 1358:
case 148:
case 3497:
case 1692:
case 2945:
case 3449:
case 177:
case 171:
case 2659:
case 2674:
case 2614:
case 884:
case 192:
case 2039:
case 1210:
case 2129:
case 593:
case 3971:
case 415:
case 2368:
case 1988:
case 3009:
case 822:
case 3430:
case 1694:
case 3194:
case 3596:
case 1751:
case 1746:
case 286:
case 3525:
case 20:
case 2255:
case 1590:
case 2131:
case 3740:
case 2648:
case 338:
case 4063:
case 3113:
case 2021:
case 726:
case 3832:
case 1669:
case 2672:
case 1436:
case 2612:
case 2306:
case 3207:
case 324:
case 309:
case 3319:
case 1480:
case 2737:
case 3239:
case 3776:
case 953:
case 3363:
case 408:
case 3982:
case 628:
case 810:
case 1850:
case 634:
case 1941:
case 3995:
case 257:
case 3950:
case 3856:
case 1895:
case 1627:
case 545:
case 127:
case 240:
case 2447:
case 3657:
case 2076:
case 666:
case 2681:
case 1157:
case 588:
case 1882:
case 1561:
case 1143:
case 1724:
case 262:
case 486:
case 4040:
case 3754:
case 3763:
case 2530:
case 1191:
case 2277:
case 3779:
case 3145:
case 1258:
case 1102:
case 1914:
case 3228:
case 1974:
case 674:
case 2103:
case 2425:
case 173:
case 2558:
case 2634:
case 2992:
case 3814:
case 3859:
case 845:
case 2985:
case 506:
case 2054:
case 3489:
case 2079:
case 1310:
case 1370:
case 2019:
case 1230:
case 1608:
case 790:
case 3944:
case 2835:
case 1160:
case 3321:
case 2898:
case 522:
case 904:
case 1346:
case 695:
case 3252:
case 2223:
case 341:
case 1115:
case 929:
case 3166:
case 4016:
case 3340:
case 3547:
case 378:
case 1000:
case 2586:
case 440:
case 2232:
case 2288:
case 2372:
case 3401:
case 2312:
case 3197:
case 2015:
case 1373:
case 284:
case 2807:
case 1766:
case 1369:
case 3855:
case 3492:
case 1955:
case 3996:
case 3890:
case 3204:
case 1084:
case 3925:
case 3511:
case 738:
case 1394:
case 4043:
case 3571:
case 3715:
case 3775:
case 2533:
case 77:
case 2668:
case 3760:
case 1003:
case 2002:
case 1961:
case 2381:
case 2305:
case 1435:
case 3550:
case 2241:
case 1520:
case 1327:
case 3791:
case 1119:
case 3034:
case 1163:
case 1556:
case 3595:
case 297:
case 469:
case 3124:
case 2162:
case 804:
case 272:
case 829:
case 3538:
case 3619:
case 3861:
case 3679:
case 3654:
case 2444:
case 2705:
case 2585:
case 1670:
case 2501:
case 2781:
case 676:
case 1917:
case 3743:
case 2958:
case 3165:
case 4015:
case 2274:
case 3170:
case 4060:
case 1404:
case 3529:
case 2043:
case 2293:
case 1559:
case 1042:
case 529:
case 1176:
case 1292:
case 3391:
case 1574:
case 3005:
case 1285:
case 2471:
case 1201:
case 2637:
case 2411:
case 2836:
case 2930:
case 3817:
case 4091:
case 1769:
case 1366:
case 906:
case 2880:
case 741:
case 2712:
case 2748:
case 3640:
case 3953:
case 3964:
case 36:
case 1923:
case 390:
case 1651:
case 2495:
case 472:
case 1853:
case 1864:
case 2187:
case 3823:
case 655:
case 3567:
case 1121:
case 3315:
case 3151:
case 3235:
case 269:
case 3012:
case 2482:
case 3072:
case 1308:
case 778:
case 1031:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744376401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,];
var gg_b = "1744376401/";

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
