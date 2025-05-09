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
case 3340:
case 3409:
case 2170:
case 2536:
case 1347:
case 2920:
case 3783:
case 1678:
case 2930:
case 952:
case 841:
case 2316:
case 1210:
case 3217:
case 1719:
case 953:
case 258:
case 18:
case 3179:
case 3045:
case 2662:
case 2400:
case 389:
case 3163:
case 2852:
case 3523:
case 322:
case 3351:
case 511:
case 1794:
case 543:
case 2291:
case 3533:
case 287:
case 498:
case 3322:
case 1006:
case 2609:
case 2434:
case 2114:
case 2424:
case 761:
case 3512:
case 1125:
case 149:
case 2555:
case 409:
case 3313:
case 2387:
case 1135:
case 3600:
case 1415:
case 1548:
case 655:
case 620:
case 1354:
case 978:
case 3791:
case 691:
case 1711:
case 2036:
case 3682:
case 2214:
case 93:
case 2026:
case 3952:
case 2341:
case 312:
case 3842:
case 4004:
case 3171:
case 3263:
case 2475:
case 521:
case 341:
case 1174:
case 3978:
case 84:
case 902:
case 2637:
case 208:
case 903:
case 1753:
case 3401:
case 806:
case 170:
case 3568:
case 3804:
case 3138:
case 758:
case 181:
case 3023:
case 2695:
case 444:
case 669:
case 261:
case 51:
case 2270:
case 3367:
case 3799:
case 1256:
case 1827:
case 1837:
case 2266:
case 2779:
case 1360:
case 3907:
case 3820:
case 1065:
case 3012:
case 459:
case 2839:
case 2055:
case 773:
case 2790:
case 2618:
case 1777:
case 1381:
case 926:
case 4020:
case 823:
case 3437:
case 822:
case 2183:
case 2601:
case 889:
case 840:
case 1819:
case 1638:
case 1997:
case 1200:
case 3990:
case 1628:
case 1709:
case 3207:
case 3557:
case 2120:
case 734:
case 2560:
case 476:
case 17:
case 1483:
case 1846:
case 1550:
case 2130:
case 2576:
case 163:
case 505:
case 3643:
case 3080:
case 892:
case 162:
case 930:
case 3129:
case 2999:
case 2054:
case 964:
case 3502:
case 4005:
case 3963:
case 1617:
case 3494:
case 418:
case 591:
case 1405:
case 2914:
case 3891:
case 988:
case 2392:
case 621:
case 2215:
case 282:
case 2721:
case 3715:
case 1925:
case 1894:
case 1762:
case 1935:
case 510:
case 2731:
case 2619:
case 2443:
case 3358:
case 2886:
case 760:
case 1679:
case 317:
case 3152:
case 642:
case 3131:
case 3411:
case 2425:
case 2060:
case 171:
case 3971:
case 3057:
case 392:
case 393:
case 428:
case 3814:
case 180:
case 1050:
case 555:
case 1701:
case 2348:
case 2905:
case 1587:
case 3069:
case 1564:
case 1718:
case 1690:
case 3928:
case 1124:
case 3697:
case 1134:
case 3742:
case 340:
case 1808:
case 2554:
case 520:
case 2890:
case 1877:
case 2739:
case 2547:
case 3002:
case 1326:
case 2220:
case 729:
case 879:
case 1100:
case 3635:
case 3107:
case 1041:
case 1499:
case 2093:
case 3477:
case 1466:
case 4070:
case 835:
case 3044:
case 2456:
case 3720:
case 2653:
case 1549:
case 1737:
case 1910:
case 2983:
case 1663:
case 3899:
case 3730:
case 3917:
case 368:
case 3037:
case 3972:
case 1020:
case 1030:
case 395:
case 3027:
case 384:
case 1448:
case 4065:
case 3122:
case 531:
case 1823:
case 3151:
case 1465:
case 3412:
case 3363:
case 1293:
case 1773:
case 2524:
case 2082:
case 766:
case 3636:
case 3741:
case 144:
case 3848:
case 2187:
case 553:
case 3433:
case 3113:
case 3865:
case 404:
case 552:
case 516:
case 1598:
case 470:
case 3018:
case 3655:
case 1042:
case 3985:
case 481:
case 785:
case 2759:
case 1147:
case 846:
case 3001:
case 1276:
case 1356:
case 851:
case 3259:
case 2149:
case 1796:
case 607:
case 2399:
case 990:
case 2784:
case 1281:
case 2116:
case 833:
case 3749:
case 2885:
case 1520:
case 1247:
case 1160:
case 688:
case 449:
case 53:
case 1936:
case 1015:
case 1658:
case 3716:
case 2668:
case 1988:
case 1926:
case 2383:
case 3317:
case 2034:
case 503:
case 3159:
case 266:
case 3892:
case 3518:
case 748:
case 2391:
case 3222:
case 3232:
case 467:
case 186:
case 3251:
case 2141:
case 1289:
case 85:
case 2287:
case 1492:
case 30:
case 351:
case 1845:
case 2858:
case 3386:
case 346:
case 4092:
case 3595:
case 696:
case 1761:
case 2264:
case 3009:
case 2751:
case 1374:
case 2305:
case 2732:
case 2342:
case 2669:
case 2543:
case 315:
case 2192:
case 1873:
case 1070:
case 3681:
case 3444:
case 3103:
case 2265:
case 1441:
case 2493:
case 4041:
case 2304:
case 2248:
case 557:
case 1255:
case 3676:
case 3913:
case 1667:
case 2987:
case 1844:
case 2696:
case 596:
case 3594:
case 2657:
case 374:
case 2867:
case 1236:
case 1014:
case 3850:
case 300:
case 1288:
case 588:
case 1896:
case 947:
case 1226:
case 2320:
case 3185:
case 1947:
case 991:
case 3469:
case 2106:
case 3053:
case 3519:
case 2476:
case 471:
case 825:
case 837:
case 128:
case 3496:
case 1583:
case 3457:
case 4050:
case 3329:
case 910:
case 602:
case 2025:
case 775:
case 2035:
case 2859:
case 3339:
case 2680:
case 1960:
case 3307:
case 4049:
case 1976:
case 2043:
case 3654:
case 2556:
case 2597:
case 1126:
case 724:
case 3285:
case 3984:
case 4016:
case 1599:
case 1632:
case 920:
case 507:
case 1981:
case 2447:
case 3706:
case 3203:
case 3046:
case 350:
case 4064:
case 1514:
case 2941:
case 1993:
case 2832:
case 463:
case 4087:
case 99:
case 9:
case 337:
case 1861:
case 2292:
case 1487:
case 545:
case 2315:
case 325:
case 2822:
case 1640:
case 3508:
case 47:
case 275:
case 1324:
case 2489:
case 3864:
case 3511:
case 2165:
case 2703:
case 3461:
case 653:
case 2813:
case 2148:
case 2613:
case 303:
case 1206:
case 1043:
case 2449:
case 3996:
case 2960:
case 302:
case 3590:
case 1556:
case 477:
case 3038:
case 1661:
case 2981:
case 33:
case 2622:
case 2599:
case 2632:
case 3086:
case 912:
case 3309:
case 3440:
case 1941:
case 4054:
case 674:
case 2745:
case 2993:
case 2464:
case 3616:
case 2514:
case 2861:
case 2487:
case 551:
case 3413:
case 114:
case 1315:
case 1822:
case 139:
case 1832:
case 3563:
case 175:
case 2640:
case 276:
case 2334:
case 2155:
case 728:
case 3422:
case 615:
case 3268:
case 1165:
case 1543:
case 124:
case 2659:
case 2591:
case 2873:
case 3318:
case 3223:
case 3893:
case 2989:
case 316:
case 1669:
case 3090:
case 2066:
case 3755:
case 2802:
case 2712:
case 1056:
case 625:
case 1248:
case 2375:
case 3538:
case 331:
case 2255:
case 718:
case 3145:
case 3528:
case 2441:
case 3395:
case 2684:
case 3212:
case 2099:
case 1964:
case 1696:
case 802:
case 568:
case 1657:
case 906:
case 1574:
case 2844:
case 803:
case 2896:
case 2226:
case 2857:
case 2236:
case 1330:
case 3327:
case 1644:
case 3459:
case 378:
case 1884:
case 3063:
case 923:
case 1602:
case 826:
case 3467:
case 2382:
case 4060:
case 989:
case 1476:
case 1916:
case 3788:
case 2869:
case 776:
case 1025:
case 3484:
case 3346:
case 2530:
case 2176:
case 759:
case 3157:
case 472:
case 1885:
case 2160:
case 3031:
case 2988:
case 209:
case 1668:
case 2936:
case 65:
case 1645:
case 3319:
case 2015:
case 2658:
case 2603:
case 3485:
case 744:
case 917:
case 2098:
case 993:
case 2672:
case 1740:
case 3529:
case 3539:
case 830:
case 2406:
case 1249:
case 992:
case 2193:
case 286:
case 2542:
case 1391:
case 3458:
case 2343:
case 1803:
case 458:
case 3933:
case 3923:
case 1713:
case 3280:
case 2868:
case 3472:
case 1287:
case 2845:
case 537:
case 3789:
case 1575:
case 1858:
case 2504:
case 684:
case 3144:
case 3403:
case 550:
case 2254:
case 1751:
case 2374:
case 1305:
case 1722:
case 2685:
case 3394:
case 3912:
case 1314:
case 574:
case 3202:
case 2465:
case 3552:
case 2823:
case 4055:
case 2293:
case 259:
case 2515:
case 2448:
case 651:
case 357:
case 1082:
case 1534:
case 3244:
case 2154:
case 3968:
case 1524:
case 2325:
case 3180:
case 2812:
case 2702:
case 2335:
case 3039:
case 3578:
case 3855:
case 2042:
case 979:
case 1612:
case 3781:
case 3648:
case 2769:
case 2397:
case 3836:
case 786:
case 1366:
case 3888:
case 3377:
case 1623:
case 3269:
case 1767:
case 1399:
case 1075:
case 1149:
case 2757:
case 364:
case 1633:
case 1784:
case 2281:
case 388:
case 935:
case 1426:
case 3551:
case 4035:
case 3532:
case 3699:
case 3084:
case 119:
case 1863:
case 3522:
case 2853:
case 3333:
case 3162:
case 2679:
case 3067:
case 1076:
case 82:
case 280:
case 1060:
case 3201:
case 3775:
case 512:
case 1365:
case 1198:
case 556:
case 3825:
case 2275:
case 2701:
case 2587:
case 541:
case 1905:
case 627:
case 1081:
case 2564:
case 2690:
case 3897:
case 2336:
case 1230:
case 1729:
case 1608:
case 811:
case 3540:
case 843:
case 1890:
case 3237:
case 2388:
case 951:
case 2041:
case 2499:
case 2100:
case 3479:
case 2282:
case 2470:
case 932:
case 160:
case 3109:
case 4056:
case 836:
case 2663:
case 1653:
case 2910:
case 2737:
case 780:
case 3051:
case 771:
case 1970:
case 2956:
case 2550:
case 821:
case 475:
case 1410:
case 3417:
case 1089:
case 1694:
case 4010:
case 506:
case 414:
case 2087:
case 968:
case 32:
case 3691:
case 3209:
case 1581:
case 2182:
case 3810:
case 3700:
case 984:
case 81:
case 640:
case 3040:
case 2405:
case 3101:
case 1047:
case 95:
case 3683:
case 1778:
case 2617:
case 336:
case 129:
case 3428:
case 2541:
case 1142:
case 3438:
case 3118:
case 183:
case 1215:
case 693:
case 2234:
case 1721:
case 2224:
case 692:
case 177:
case 2925:
case 2894:
case 2762:
case 3471:
case 1298:
case 589:
case 3368:
case 1886:
case 3195:
case 4043:
case 1828:
case 523:
case 738:
case 3345:
case 2491:
case 1838:
case 617:
case 311:
case 1443:
case 1104:
case 3908:
case 1026:
case 3302:
case 3735:
case 2801:
case 320:
case 540:
case 1475:
case 2143:
case 3253:
case 355:
case 2592:
case 2639:
case 2708:
case 1341:
case 4075:
case 3572:
case 767:
case 78:
case 1998:
case 1637:
case 3194:
case 2753:
case 3620:
case 1763:
case 593:
case 1627:
case 3208:
case 2235:
case 3558:
case 3875:
case 517:
case 2934:
case 281:
case 622:
case 2442:
case 270:
case 689:
case 204:
case 3604:
case 3119:
case 161:
case 3439:
case 3429:
case 3277:
case 3396:
case 1266:
case 2360:
case 1779:
case 3357:
case 2297:
case 1482:
case 3146:
case 2900:
case 847:
case 1350:
case 2256:
case 3909:
case 2048:
case 64:
case 1839:
case 1055:
case 2065:
case 3642:
case 950:
case 1299:
case 3369:
case 3797:
case 606:
case 925:
case 2420:
case 2430:
case 749:
case 3177:
case 2156:
case 1170:
case 2092:
case 3219:
case 1930:
case 3800:
case 305:
case 974:
case 3937:
case 3698:
case 1920:
case 494:
case 2719:
case 781:
case 2809:
case 1316:
case 2210:
case 1349:
case 3058:
case 1199:
case 2631:
case 485:
case 2746:
case 2652:
case 2794:
case 187:
case 3361:
case 16:
case 466:
case 2243:
case 1821:
case 89:
case 3774:
case 1831:
case 2498:
case 3901:
case 1424:
case 1942:
case 704:
case 4034:
case 310:
case 1609:
case 1728:
case 1434:
case 1114:
case 1555:
case 1878:
case 1387:
case 641:
case 2135:
case 2415:
case 535:
case 3111:
case 3431:
case 3380:
case 2125:
case 249:
case 2607:
case 3452:
case 3743:
case 1364:
case 173:
case 3294:
case 2354:
case 1904:
case 3108:
case 2975:
case 172:
case 391:
case 795:
case 2184:
case 1021:
case 1319:
case 768:
case 2167:
case 2240:
case 491:
case 3885:
case 784:
case 1529:
case 366:
case 1169:
case 3249:
case 1747:
case 2159:
case 1692:
case 1078:
case 971:
case 3216:
case 3582:
case 3383:
case 410:
case 3024:
case 576:
case 394:
case 3803:
case 2787:
case 3713:
case 1923:
case 1754:
case 2251:
case 2468:
case 3872:
case 2222:
case 3391:
case 2518:
case 3732:
case 3305:
case 3751:
case 2009:
case 3264:
case 1912:
case 3965:
case 4003:
case 3722:
case 2595:
case 405:
case 1606:
case 145:
case 251:
case 1789:
case 2338:
case 20:
case 2412:
case 2132:
case 1552:
case 2562:
case 1161:
case 1521:
case 2122:
case 130:
case 295:
case 3992:
case 866:
case 963:
case 2037:
case 268:
case 196:
case 1311:
case 686:
case 1029:
case 97:
case 2113:
case 3187:
case 1578:
case 1855:
case 2958:
case 1308:
case 1244:
case 3534:
case 3082:
case 1945:
case 2636:
case 2688:
case 3164:
case 3906:
case 3250:
case 3370:
case 1836:
case 2001:
case 3759:
case 1826:
case 2390:
case 3366:
case 2985:
case 1665:
case 2655:
case 665:
case 3436:
case 3426:
case 751:
case 70:
case 3488:
case 3623:
case 455:
case 2379:
case 1760:
case 25:
case 164:
case 3149:
case 2259:
case 628:
case 981:
case 2984:
case 2285:
case 3950:
case 565:
case 442:
case 1957:
case 2307:
case 102:
case 1071:
case 443:
case 2094:
case 2689:
case 3447:
case 2816:
case 1440:
case 1309:
case 3785:
case 436:
case 509:
case 225:
case 3822:
case 2553:
case 2321:
case 314:
case 1133:
case 2019:
case 1902:
case 700:
case 1123:
case 3851:
case 1563:
case 126:
case 2480:
case 250:
case 1422:
case 3148:
case 3535:
case 4032:
case 4022:
case 1451:
case 3398:
case 3525:
case 586:
case 1432:
case 1112:
case 2792:
case 3489:
case 904:
case 3772:
case 3010:
case 1854:
case 2508:
case 2748:
case 2932:
case 2077:
case 1090:
case 967:
case 98:
case 2444:
case 153:
case 1233:
case 215:
case 544:
case 3543:
case 1893:
case 41:
case 3669:
case 1571:
case 2172:
case 152:
case 1223:
case 3342:
case 1980:
case 2660:
case 2594:
case 3696:
case 1650:
case 3987:
case 3574:
case 2676:
case 1145:
case 2473:
case 3304:
case 2158:
case 3964:
case 1528:
case 1395:
case 2053:
case 2940:
case 2469:
case 875:
case 725:
case 2185:
case 618:
case 1860:
case 3867:
case 1788:
case 2339:
case 3673:
case 4084:
case 1726:
case 3035:
case 3859:
case 3025:
case 1484:
case 1736:
case 2693:
case 954:
case 2457:
case 2496:
case 1517:
case 3460:
case 3476:
case 1467:
case 1881:
case 241:
case 155:
case 3475:
case 256:
case 858:
case 2842:
case 2495:
case 212:
case 464:
case 2952:
case 2931:
case 3915:
case 2921:
case 120:
case 1962:
case 1725:
case 488:
case 2138:
case 2804:
case 1558:
case 1875:
case 2186:
case 2568:
case 2714:
case 1620:
case 3637:
case 1194:
case 3763:
case 1585:
case 723:
case 1277:
case 1396:
case 3350:
case 1146:
case 722:
case 789:
case 2799:
case 2830:
case 872:
case 361:
case 1119:
case 667:
case 4039:
case 976:
case 3695:
case 1429:
case 873:
case 2023:
case 3601:
case 430:
case 3183:
case 2437:
case 2117:
case 86:
case 887:
case 1:
case 496:
case 1882:
case 3618:
case 2766:
case 3055:
case 2359:
case 1909:
case 1369:
case 2770:
case 1797:
case 3299:
case 1642:
case 563:
case 3930:
case 3717:
case 1219:
case 3807:
case 808:
case 562:
case 1937:
case 1698:
case 797:
case 3588:
case 2624:
case 3526:
case 756:
case 2409:
case 712:
case 3400:
case 3349:
case 1058:
case 604:
case 2045:
case 2179:
case 899:
case 358:
case 2217:
case 2929:
case 2939:
case 3738:
case 3786:
case 3609:
case 3728:
case 3821:
case 1153:
case 2322:
case 387:
case 928:
case 36:
case 681:
case 1478:
case 2351:
case 3852:
case 1901:
case 289:
case 4078:
case 2332:
case 1774:
case 3831:
case 2271:
case 1294:
case 2791:
case 373:
case 1824:
case 1834:
case 3771:
case 3205:
case 1108:
case 372:
case 861:
case 2600:
case 4031:
case 2462:
case 3878:
case 407:
case 2814:
case 3991:
case 998:
case 2704:
case 292:
case 1775:
case 2096:
case 1084:
case 319:
case 3863:
case 3425:
case 1532:
case 3242:
case 570:
case 217:
case 581:
case 1333:
case 1522:
case 3554:
case 2656:
case 909:
case 2938:
case 2697:
case 1670:
case 2986:
case 1666:
case 1825:
case 3198:
case 2069:
case 1295:
case 2178:
case 2453:
case 1835:
case 3348:
case 1059:
case 4079:
case 1782:
case 2625:
case 662:
case 2073:
case 2635:
case 1540:
case 1227:
case 3729:
case 1897:
case 3547:
case 735:
case 3739:
case 1237:
case 2730:
case 779:
case 3983:
case 2899:
case 2229:
case 416:
case 11:
case 3879:
case 504:
case 3653:
case 360:
case 1109:
case 2044:
case 986:
case 1614:
case 3497:
case 67:
case 882:
case 2477:
case 1490:
case 3576:
case 3410:
case 1567:
case 717:
case 1137:
case 3120:
case 2207:
case 1051:
case 1584:
case 3966:
case 1032:
case 792:
case 3970:
case 567:
case 834:
case 3054:
case 3707:
case 2883:
case 3817:
case 2080:
case 2569:
case 1691:
case 1013:
case 426:
case 2139:
case 2419:
case 1428:
case 382:
case 1486:
case 4038:
case 2231:
case 549:
case 1734:
case 190:
case 1724:
case 1843:
case 3392:
case 227:
case 383:
case 2891:
case 3914:
case 2798:
case 2610:
case 2303:
case 1040:
case 1953:
case 1683:
case 2963:
case 1101:
case 3047:
case 142:
case 3886:
case 554:
case 3443:
case 1908:
case 4071:
case 143:
case 111:
case 3619:
case 1345:
case 1874:
case 2805:
case 279:
case 3752:
case 3646:
case 2544:
case 680:
case 377:
case 671:
case 2715:
case 3721:
case 3483:
case 558:
case 2137:
case 1557:
case 2605:
case 1674:
case 660:
case 3550:
case 3200:
case 3819:
case 1207:
case 1990:
case 2584:
case 2032:
case 1883:
case 3064:
case 721:
case 2810:
case 2209:
case 1643:
case 2559:
case 3087:
case 1139:
case 363:
case 22:
case 3671:
case 1080:
case 1573:
case 2438:
case 1891:
case 2428:
case 3541:
case 1252:
case 2486:
case 1372:
case 1231:
case 2734:
case 1494:
case 1502:
case 2101:
case 1303:
case 2040:
case 2953:
case 1358:
case 3049:
case 211:
case 2345:
case 587:
case 2195:
case 2368:
case 2471:
case 2874:
case 3234:
case 179:
case 1544:
case 1057:
case 1096:
case 508:
case 371:
case 3795:
case 3679:
case 2162:
case 2333:
case 1121:
case 2084:
case 1131:
case 2323:
case 2551:
case 400:
case 1928:
case 3564:
case 599:
case 72:
case 1986:
case 3808:
case 1656:
case 3414:
case 2670:
case 1697:
case 1938:
case 2835:
case 2059:
case 2463:
case 629:
case 2312:
case 2994:
case 3811:
case 87:
case 682:
case 2295:
case 2479:
case 2946:
case 3100:
case 2782:
case 3499:
case 1107:
case 790:
case 1866:
case 3388:
case 2237:
case 2856:
case 474:
case 3336:
case 736:
case 3737:
case 561:
case 1239:
case 21:
case 3549:
case 1730:
case 1899:
case 1229:
case 415:
case 985:
case 3466:
case 338:
case 1477:
case 4077:
case 3516:
case 3282:
case 720:
case 40:
case 2698:
case 106:
case 2072:
case 451:
case 2927:
case 3678:
case 2219:
case 446:
case 3197:
case 881:
case 3156:
case 2003:
case 1190:
case 2177:
case 3652:
case 433:
case 3631:
case 269:
case 1068:
case 432:
case 38:
case 1939:
case 3809:
case 924:
case 2085:
case 1351:
case 1523:
case 122:
case 1163:
case 2774:
case 3498:
case 2153:
case 1815:
case 1322:
case 2361:
case 804:
case 3975:
case 3354:
case 2294:
case 1791:
case 699:
case 2995:
case 2824:
case 7:
case 2452:
case 3565:
case 4062:
case 2380:
case 349:
case 79:
case 2111:
case 2431:
case 529:
case 3548:
case 1600:
case 3415:
case 247:
case 583:
case 1238:
case 1313:
case 156:
case 1263:
case 3393:
case 113:
case 2373:
case 3592:
case 2253:
case 3404:
case 3143:
case 88:
case 2503:
case 2962:
case 1682:
case 197:
case 2735:
case 1952:
case 705:
case 3801:
case 1931:
case 673:
case 519:
case 1714:
case 370:
case 3924:
case 1545:
case 381:
case 1418:
case 3235:
case 534:
case 2558:
case 2208:
case 2344:
case 2630:
case 1978:
case 769:
case 1401:
case 3753:
case 2620:
case 3256:
case 3827:
case 560:
case 2146:
case 1367:
case 1830:
case 3376:
case 1820:
case 2585:
case 658:
case 3360:
case 3837:
case 710:
case 1033:
case 2119:
case 2439:
case 1675:
case 2:
case 4037:
case 939:
case 854:
case 3110:
case 3420:
case 495:
case 4027:
case 747:
case 1437:
case 1117:
case 1770:
case 2797:
case 1012:
case 2642:
case 3065:
case 1766:
case 1359:
case 2909:
case 1765:
case 1922:
case 2961:
case 1951:
case 675:
case 3066:
case 703:
case 1932:
case 1077:
case 216:
case 3989:
case 818:
case 252:
case 2223:
case 3873:
case 958:
case 2318:
case 115:
case 2650:
case 4002:
case 1913:
case 174:
case 1402:
case 2980:
case 73:
case 2212:
case 3684:
case 2168:
case 3099:
case 2528:
case 2395:
case 2145:
case 1473:
case 231:
case 2079:
case 3375:
case 3954:
case 2063:
case 1469:
case 4069:
case 876:
case 2459:
case 1850:
case 100:
case 1546:
case 3236:
case 3014:
case 2876:
case 440:
case 1185:
case 2337:
case 3288:
case 2860:
case 3869:
case 1011:
case 2736:
case 417:
case 1693:
case 1329:
case 2641:
case 2788:
case 1008:
case 492:
case 1457:
case 1496:
case 328:
case 548:
case 716:
case 3416:
case 3570:
case 1654:
case 753:
case 479:
case 1984:
case 2590:
case 1577:
case 2847:
case 2957:
case 566:
case 2071:
case 3449:
case 3300:
case 2687:
case 203:
case 1967:
case 3613:
case 2440:
case 1959:
case 1094:
case 318:
case 1706:
case 435:
case 3599:
case 3622:
case 2579:
case 2038:
case 1352:
case 828:
case 2902:
case 1480:
case 2362:
case 137:
case 3514:
case 150:
case 3745:
case 778:
case 2451:
case 4061:
case 2268:
case 2112:
case 1511:
case 2422:
case 2944:
case 585:
case 1378:
case 1887:
case 1461:
case 3155:
case 376:
case 3640:
case 594:
case 1792:
case 1864:
case 961:
case 1647:
case 2273:
case 3833:
case 1562:
case 2161:
case 2521:
case 1122:
case 1412:
case 1132:
case 2552:
case 1151:
case 3823:
case 2202:
case 898:
case 1972:
case 168:
case 1027:
case 1433:
case 1113:
case 524:
case 3335:
case 4023:
case 2180:
case 3325:
case 3598:
case 3812:
case 2029:
case 1865:
case 1626:
case 1688:
case 3773:
case 1958:
case 694:
case 1741:
case 2244:
case 3147:
case 2296:
case 3356:
case 3769:
case 1267:
case 1655:
case 1284:
case 666:
case 3042:
case 1985:
case 886:
case 288:
case 983:
case 1509:
case 982:
case 3281:
case 101:
case 3796:
case 264:
case 3757:
case 3004:
case 1259:
case 2269:
case 1750:
case 2021:
case 3015:
case 1806:
case 796:
case 1062:
case 730:
case 1184:
case 1716:
case 757:
case 2196:
case 3160:
case 3520:
case 3247:
case 1749:
case 3176:
case 844:
case 1167:
case 2346:
case 1240:
case 422:
case 3406:
case 2747:
case 2078:
case 2539:
case 398:
case 423:
case 859:
case 934:
case 3310:
case 3603:
case 1787:
case 3289:
case 1501:
case 575:
case 2933:
case 1222:
case 3343:
case 2173:
case 1445:
case 2261:
case 2007:
case 3542:
case 2754:
case 386:
case 1371:
case 4045:
case 3761:
case 2394:
case 764:
case 3374:
case 1009:
case 3504:
case 151:
case 2789:
case 1213:
case 406:
case 3492:
case 1328:
case 2472:
case 1386:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746799202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,];
var gg_b = "1746799202/";

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
