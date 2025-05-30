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
case 330:
case 2084:
case 305:
case 1547:
case 3646:
case 2294:
case 553:
case 1535:
case 3179:
case 505:
case 437:
case 2015:
case 2048:
case 3210:
case 1566:
case 3162:
case 3808:
case 3686:
case 1587:
case 2330:
case 2063:
case 1416:
case 2273:
case 3397:
case 2773:
case 464:
case 1577:
case 3386:
case 3367:
case 2630:
case 1728:
case 3676:
case 2283:
case 1596:
case 2268:
case 3339:
case 413:
case 2719:
case 1259:
case 1759:
case 3149:
case 3697:
case 2764:
case 360:
case 801:
case 1302:
case 3346:
case 2071:
case 560:
case 467:
case 1724:
case 16:
case 2261:
case 3113:
case 3589:
case 3320:
case 3444:
case 564:
case 3893:
case 1618:
case 2703:
case 3513:
case 2203:
case 2658:
case 3536:
case 3919:
case 364:
case 1132:
case 3968:
case 2629:
case 3056:
case 1342:
case 3306:
case 1611:
case 3812:
case 601:
case 3964:
case 141:
case 1375:
case 3484:
case 723:
case 405:
case 3109:
case 1177:
case 3961:
case 3481:
case 3415:
case 3448:
case 1382:
case 1614:
case 368:
case 3474:
case 3412:
case 538:
case 2001:
case 3884:
case 181:
case 2126:
case 792:
case 567:
case 159:
case 285:
case 460:
case 1682:
case 2100:
case 3848:
case 2354:
case 1187:
case 3994:
case 1372:
case 513:
case 1135:
case 983:
case 3998:
case 3973:
case 334:
case 1507:
case 3606:
case 3888:
case 1337:
case 3863:
case 3841:
case 2329:
case 2580:
case 313:
case 646:
case 177:
case 2193:
case 2634:
case 127:
case 75:
case 106:
case 725:
case 689:
case 442:
case 202:
case 243:
case 403:
case 2178:
case 3275:
case 2631:
case 3036:
case 3299:
case 2809:
case 3426:
case 3799:
case 3242:
case 1706:
case 2174:
case 3556:
case 1206:
case 3742:
case 2260:
case 694:
case 3927:
case 2638:
case 1720:
case 3400:
case 8:
case 2184:
case 1007:
case 3737:
case 3269:
case 3769:
case 1930:
case 1155:
case 3079:
case 2181:
case 2115:
case 3245:
case 985:
case 2508:
case 3218:
case 3095:
case 2334:
case 686:
case 2905:
case 29:
case 3714:
case 3772:
case 178:
case 128:
case 2144:
case 3214:
case 3272:
case 2188:
case 283:
case 3211:
case 3785:
case 2141:
case 2331:
case 109:
case 2937:
case 2588:
case 6:
case 3880:
case 2541:
case 1929:
case 2101:
case 2436:
case 4036:
case 1297:
case 1310:
case 1958:
case 2350:
case 2918:
case 2413:
case 2945:
case 2969:
case 3628:
case 1523:
case 2544:
case 503:
case 1035:
case 2972:
case 1425:
case 2895:
case 3840:
case 1555:
case 3624:
case 736:
case 555:
case 37:
case 3705:
case 897:
case 2515:
case 2108:
case 2548:
case 120:
case 1822:
case 2584:
case 3621:
case 52:
case 57:
case 170:
case 2449:
case 2465:
case 4092:
case 4062:
case 2462:
case 2982:
case 2975:
case 889:
case 1422:
case 851:
case 3321:
case 2574:
case 382:
case 2512:
case 2865:
case 1552:
case 3702:
case 1246:
case 1239:
case 1096:
case 611:
case 2227:
case 2578:
case 894:
case 3870:
case 3009:
case 2479:
case 4079:
case 2593:
case 1853:
case 2813:
case 71:
case 1267:
case 1767:
case 176:
case 647:
case 2405:
case 4005:
case 40:
case 3075:
case 3749:
case 2119:
case 222:
case 2168:
case 705:
case 3265:
case 3765:
case 272:
case 2060:
case 1006:
case 684:
case 2770:
case 3099:
case 2270:
case 3213:
case 2143:
case 2333:
case 3789:
case 2191:
case 3037:
case 3427:
case 644:
case 1656:
case 3557:
case 1707:
case 3018:
case 3779:
case 995:
case 3069:
case 1830:
case 687:
case 3762:
case 696:
case 2240:
case 2198:
case 3262:
case 3795:
case 129:
case 840:
case 760:
case 4002:
case 2402:
case 492:
case 293:
case 2726:
case 4042:
case 2442:
case 1829:
case 3460:
case 1076:
case 1266:
case 3510:
case 2979:
case 2598:
case 3890:
case 2962:
case 30:
case 848:
case 2594:
case 1735:
case 2872:
case 2814:
case 2591:
case 1851:
case 323:
case 2811:
case 100:
case 135:
case 2561:
case 738:
case 847:
case 2882:
case 2543:
case 1524:
case 888:
case 2414:
case 4072:
case 1925:
case 767:
case 1451:
case 2965:
case 4085:
case 392:
case 2485:
case 2411:
case 1046:
case 3352:
case 2992:
case 165:
case 2875:
case 1732:
case 2949:
case 1521:
case 2899:
case 2936:
case 3709:
case 2519:
case 3209:
case 3970:
case 2842:
case 2583:
case 2437:
case 2027:
case 1429:
case 3860:
case 2469:
case 2989:
case 3623:
case 1528:
case 1953:
case 1458:
case 1277:
case 2913:
case 1777:
case 4018:
case 3490:
case 3137:
case 2284:
case 3632:
case 325:
case 632:
case 2715:
case 1755:
case 2248:
case 3118:
case 35:
case 2215:
case 3505:
case 3145:
case 575:
case 3335:
case 2094:
case 436:
case 3904:
case 2744:
case 1576:
case 1723:
case 3172:
case 3114:
case 1223:
case 3366:
case 3908:
case 2073:
case 1817:
case 2288:
case 2263:
case 2741:
case 3696:
case 2763:
case 2788:
case 1933:
case 1438:
case 3687:
case 1586:
case 3377:
case 2293:
case 117:
case 2793:
case 3175:
case 2457:
case 1417:
case 2956:
case 715:
case 2527:
case 2212:
case 163:
case 2274:
case 2064:
case 3199:
case 1431:
case 2061:
case 2043:
case 466:
case 1120:
case 2771:
case 2410:
case 3498:
case 3993:
case 1313:
case 1679:
case 1389:
case 3256:
case 3102:
case 3868:
case 3542:
case 1146:
case 2560:
case 1506:
case 3756:
case 0:
case 1336:
case 3607:
case 94:
case 3575:
case 3864:
case 742:
case 2622:
case 3974:
case 1365:
case 3912:
case 536:
case 621:
case 1392:
case 3971:
case 72:
case 336:
case 77:
case 2325:
case 1662:
case 157:
case 569:
case 1695:
case 3464:
case 2322:
case 1197:
case 339:
case 3891:
case 1692:
case 832:
case 1665:
case 3511:
case 566:
case 2704:
case 2625:
case 1176:
case 2204:
case 158:
case 3461:
case 3981:
case 1362:
case 3443:
case 3948:
case 1613:
case 2810:
case 2208:
case 3545:
case 3105:
case 3944:
case 993:
case 3468:
case 3963:
case 3537:
case 110:
case 154:
case 2803:
case 2182:
case 3457:
case 1626:
case 3019:
case 2396:
case 3083:
case 3956:
case 610:
case 3527:
case 654:
case 833:
case 3212:
case 3160:
case 3712:
case 783:
case 850:
case 3061:
case 658:
case 3043:
case 79:
case 2635:
case 2137:
case 863:
case 2632:
case 702:
case 2347:
case 1158:
case 3748:
case 2118:
case 3215:
case 3094:
case 1154:
case 973:
case 2387:
case 3744:
case 2010:
case 817:
case 2403:
case 3073:
case 90:
case 3288:
case 1151:
case 3763:
case 2111:
case 4064:
case 1031:
case 395:
case 239:
case 2891:
case 3701:
case 3201:
case 266:
case 2514:
case 2572:
case 1130:
case 1955:
case 1034:
case 2915:
case 4043:
case 2948:
case 1558:
case 3653:
case 3208:
case 21:
case 2105:
case 2545:
case 3590:
case 617:
case 1923:
case 2483:
case 4083:
case 2941:
case 1380:
case 2057:
case 1670:
case 1017:
case 2419:
case 3410:
case 3353:
case 2498:
case 2993:
case 1233:
case 1828:
case 1733:
case 2256:
case 2883:
case 1716:
case 2868:
case 2102:
case 2473:
case 2978:
case 2607:
case 1859:
case 2599:
case 810:
case 633:
case 2864:
case 1821:
case 4091:
case 132:
case 1952:
case 614:
case 3127:
case 858:
case 2494:
case 3325:
case 1824:
case 1640:
case 3616:
case 2037:
case 3191:
case 1439:
case 4027:
case 1897:
case 2557:
case 1517:
case 2279:
case 1966:
case 2779:
case 1308:
case 2045:
case 1876:
case 1467:
case 3194:
case 593:
case 826:
case 2072:
case 2014:
case 2762:
case 807:
case 3198:
case 1534:
case 2262:
case 180:
case 58:
case 461:
case 1947:
case 91:
case 2011:
case 1446:
case 1301:
case 1725:
case 1225:
case 34:
case 2082:
case 431:
case 54:
case 140:
case 2749:
case 879:
case 1932:
case 635:
case 3168:
case 322:
case 2265:
case 1601:
case 372:
case 2042:
case 936:
case 3060:
case 3316:
case 3164:
case 2236:
case 1497:
case 2736:
case 3909:
case 3270:
case 1886:
case 1253:
case 1608:
case 3143:
case 2213:
case 2289:
case 1867:
case 3333:
case 561:
case 608:
case 2655:
case 48:
case 3103:
case 187:
case 1681:
case 3543:
case 3414:
case 148:
case 3965:
case 629:
case 292:
case 2352:
case 3411:
case 679:
case 3992:
case 3875:
case 1684:
case 3949:
case 3936:
case 144:
case 3519:
case 1641:
case 3583:
case 3437:
case 1663:
case 2860:
case 2623:
case 3989:
case 1393:
case 3418:
case 3913:
case 3573:
case 3726:
case 1131:
case 1678:
case 1907:
case 3226:
case 95:
case 1363:
case 3837:
case 1406:
case 2460:
case 1341:
case 1030:
case 3979:
case 975:
case 3200:
case 1134:
case 1550:
case 925:
case 3818:
case 626:
case 2940:
case 1315:
case 44:
case 531:
case 1348:
case 188:
case 3814:
case 3872:
case 2652:
case 422:
case 273:
case 745:
case 3591:
case 1674:
case 472:
case 331:
case 1384:
case 1117:
case 865:
case 967:
case 1997:
case 215:
case 3317:
case 3409:
case 1496:
case 2237:
case 1229:
case 2737:
case 1887:
case 3338:
case 2800:
case 1258:
case 3790:
case 3181:
case 3290:
case 2245:
case 3115:
case 2218:
case 827:
case 3334:
case 3040:
case 39:
case 2772:
case 2714:
case 583:
case 1254:
case 806:
case 2272:
case 1751:
case 2785:
case 190:
case 3193:
case 2782:
case 3634:
case 543:
case 828:
case 1025:
case 2065:
case 302:
case 3902:
case 343:
case 2775:
case 3631:
case 937:
case 2426:
case 3070:
case 4026:
case 3809:
case 2799:
case 824:
case 3112:
case 2242:
case 968:
case 1939:
case 2927:
case 3260:
case 2742:
case 3171:
case 1487:
case 1986:
case 2400:
case 2013:
case 3571:
case 1694:
case 1361:
case 628:
case 2440:
case 1343:
case 2324:
case 678:
case 3975:
case 2321:
case 820:
case 2202:
case 3574:
case 3865:
case 3892:
case 674:
case 1383:
case 2960:
case 3227:
case 624:
case 4080:
case 3999:
case 1407:
case 3650:
case 3479:
case 3593:
case 1698:
case 2328:
case 3937:
case 2880:
case 1668:
case 3541:
case 1619:
case 3436:
case 1373:
case 3026:
case 2659:
case 3879:
case 930:
case 3000:
case 3413:
case 3969:
case 3544:
case 953:
case 627:
case 1394:
case 146:
case 677:
case 3895:
case 2840:
case 606:
case 27:
case 3581:
case 3548:
case 3862:
case 2621:
case 255:
case 189:
case 3465:
case 242:
case 1391:
case 402:
case 3492:
case 203:
case 2386:
case 3093:
case 2408:
case 4008:
case 3630:
case 512:
case 1125:
case 2165:
case 3268:
case 3768:
case 3783:
case 2136:
case 4001:
case 3071:
case 78:
case 2404:
case 1153:
case 101:
case 3084:
case 205:
case 3291:
case 2646:
case 641:
case 3791:
case 253:
case 74:
case 3294:
case 2804:
case 3794:
case 2179:
case 656:
case 86:
case 3048:
case 3298:
case 1750:
case 3140:
case 2808:
case 2162:
case 1250:
case 2376:
case 816:
case 2667:
case 3330:
case 903:
case 3063:
case 3273:
case 3526:
case 3773:
case 4012:
case 2412:
case 3351:
case 2474:
case 2991:
case 1452:
case 2884:
case 1234:
case 267:
case 585:
case 1855:
case 2562:
case 2848:
case 2815:
case 3354:
case 2994:
case 238:
case 1238:
case 1823:
case 3358:
case 2579:
case 3008:
case 4078:
case 2478:
case 234:
case 2257:
case 2757:
case 412:
case 2863:
case 213:
case 3580:
case 3329:
case 2320:
case 1033:
case 1928:
case 4044:
case 2893:
case 3658:
case 2513:
case 1959:
case 2536:
case 2919:
case 2463:
case 2968:
case 619:
case 3629:
case 2488:
case 1360:
case 1016:
case 2565:
case 352:
case 3651:
case 2592:
case 4084:
case 2484:
case 1921:
case 2109:
case 2961:
case 2481:
case 237:
case 4015:
case 2448:
case 2943:
case 4048:
case 268:
case 2871:
case 552:
case 1525:
case 2807:
case 3797:
case 2619:
case 294:
case 3929:
case 2683:
case 3523:
case 3776:
case 1628:
case 3087:
case 3453:
case 2398:
case 3066:
case 1205:
case 12:
case 427:
case 477:
case 3555:
case 1705:
case 2643:
case 406:
case 246:
case 3425:
case 3954:
case 757:
case 3035:
case 2664:
case 289:
case 602:
case 3047:
case 370:
case 251:
case 320:
case 3822:
case 2361:
case 1440:
case 2694:
case 69:
case 3246:
case 1202:
case 3032:
case 1321:
case 249:
case 3422:
case 1870:
case 1359:
case 710:
case 2906:
case 3739:
case 2368:
case 3096:
case 2383:
case 2920:
case 3610:
case 2698:
case 3077:
case 3853:
case 3286:
case 306:
case 4035:
case 1282:
case 327:
case 377:
case 1782:
case 2832:
case 4047:
case 1049:
case 470:
case 527:
case 2946:
case 1092:
case 1065:
case 506:
case 3206:
case 2516:
case 1927:
case 2939:
case 1426:
case 1299:
case 2986:
case 718:
case 2053:
case 4066:
case 1400:
case 2967:
case 3220:
case 1089:
case 2487:
case 2229:
case 1737:
case 1237:
case 3007:
case 211:
case 2997:
case 1245:
case 3155:
case 574:
case 2866:
case 1800:
case 1718:
case 2603:
case 1745:
case 2887:
case 2976:
case 328:
case 3123:
case 2835:
case 1772:
case 378:
case 1062:
case 509:
case 763:
case 309:
case 4032:
case 290:
case 1285:
case 528:
case 1513:
case 2553:
case 3618:
case 3669:
case 4023:
case 2033:
case 1320:
case 1441:
case 2016:
case 1463:
case 1968:
case 1488:
case 1983:
case 1056:
case 3342:
case 164:
case 419:
case 1536:
case 3399:
case 1549:
case 1964:
case 341:
case 885:
case 700:
case 3685:
case 3196:
case 1565:
case 1812:
case 3672:
case 1871:
case 168:
case 1415:
case 541:
case 1943:
case 3177:
case 4055:
case 2455:
case 1961:
case 3675:
case 2731:
case 359:
case 2231:
case 1884:
case 381:
case 3311:
case 2452:
case 852:
case 4052:
case 765:
case 1474:
case 1412:
case 1991:
case 3314:
case 138:
case 1471:
case 1994:
case 1848:
case 581:
case 1815:
case 2734:
case 167:
case 2234:
case 46:
case 3166:
case 3682:
case 3950:
case 3318:
case 2390:
case 1998:
case 990:
case 416:
case 2738:
case 1620:
case 3135:
case 3642:
case 3337:
case 1757:
case 2717:
case 1478:
case 1257:
case 3602:
case 1646:
case 53:
case 33:
case 3305:
case 726:
case 3055:
case 3934:
case 456:
case 707:
case 3938:
case 3433:
case 1376:
case 1162:
case 1710:
case 1686:
case 951:
case 2750:
case 1195:
case 946:
case 3416:
case 1367:
case 3728:
case 1903:
case 1386:
case 997:
case 3759:
case 1149:
case 1509:
case 3259:
case 3816:
case 704:
case 986:
case 1192:
case 1339:
case 1346:
case 779:
case 729:
case 3302:
case 56:
case 3221:
case 160:
case 459:
case 1136:
case 3224:
case 1113:
case 2153:
case 3724:
case 3605:
case 1189:
case 418:
case 2233:
case 3520:
case 3679:
case 3450:
case 1498:
case 2370:
case 1607:
case 3146:
case 3506:
case 2216:
case 1756:
case 1883:
case 1868:
case 1542:
case 720:
case 3392:
case 770:
case 3365:
case 3139:
case 2821:
case 1575:
case 450:
case 1864:
case 557:
case 414:
case 357:
case 2824:
case 1582:
case 2640:
case 3695:
case 3662:
case 3186:
case 136:
case 1494:
case 1511:
case 262:
case 1585:
case 139:
case 3649:
case 2031:
case 1915:
case 3362:
case 1948:
case 2955:
case 1461:
case 1981:
case 2034:
case 2340:
case 3395:
case 1572:
case 358:
case 2554:
case 1894:
case 2923:
case 2428:
case 2038:
case 510:
case 11:
case 1105:
case 1898:
case 3613:
case 3379:
case 2017:
case 3636:
case 2670:
case 1057:
case 1873:
case 1941:
case 1963:
case 1468:
case 1988:
case 1483:
case 1537:
case 1347:
case 3831:
case 314:
case 1632:
case 333:
case 1901:
case 727:
case 533:
case 514:
case 3755:
case 550:
case 15:
case 1145:
case 706:
case 1908:
case 1010:
case 2300:
case 1114:
case 318:
case 3838:
case 2154:
case 1387:
case 3723:
case 988:
case 2151:
case 1185:
case 3609:
case 3597:
case 1803:
case 1666:
case 2600:
case 1687:
case 3028:
case 3567:
case 3933:
case 996:
case 724:
case 987:
case 1175:
case 410:
case 491:
case 3252:
case 695:
case 3752:
case 709:
case 1502:
case 363:
case 563:
case 1635:
case 458:
case 3024:
case 728:
case 4006:
case 2406:
case 2388:
case 2678:
case 2907:
case 3097:
case 2131:
case 2550:
case 3766:
case 2693:
case 3266:
case 1510:
case 3858:
case 921:
case 2344:
case 2030:
case 3076:
case 4020:
case 426:
case 2138:
case 64:
case 3854:
case 2315:
case 247:
case 500:
case 407:
case 1005:
case 1355:
case 1940:
case 756:
case 3247:
case 1157:
case 3922:
case 3747:
case 300:
case 2384:
case 123:
case 3851:
case 173:
case 296:
case 248:
case 3925:
case 408:
case 68:
case 3454:
case 1655:
case 2681:
case 287:
case 565:
case 2648:
case 429:
case 3232:
case 2684:
case 479:
case 3732:
case 3451:
case 2374:
case 2312:
case 759:
case 192:
case 2806:
case 2688:
case 1860:
case 3039:
case 2641:
case 1209:
case 1970:
case 2378:
case 404:
case 244:
case 3777:
case 3953:
case 3277:
case 2393:
case 2644:
case 307:
case 1082:
case 2604:
case 1765:
case 2846:
case 526:
case 1792:
case 2601:
case 1075:
case 507:
case 400:
case 1749:
case 1736:
case 1236:
case 1099:
case 2996:
case 2839:
case 3356:
case 3430:
case 932:
case 3020:
case 2867:
case 2753:
case 1213:
case 3207:
case 2517:
case 2897:
case 1427:
case 1037:
case 3830:
case 962:
case 4067:
case 2987:
case 504:
case 2486:
case 2966:
case 2150:
case 579:
case 1262:
case 1795:
case 1110:
case 2534:
case 529:
case 1014:
case 1072:
case 2304:
case 2054:
case 2301:
case 661:
case 872:
case 1085:
case 329:
case 2947:
case 280:
case 1414:
case 2925:
case 4054:
case 3371:
case 1882:
case 2524:
case 1103:
case 1561:
case 3648:
case 2232:
case 1949:
case 587:
case 480:
case 1875:
case 873:
case 2451:
case 3374:
case 4051:
case 823:
case 3663:
case 2796:
case 3688:
case 4029:
case 1568:
case 1583:
case 2296:
case 2559:
case 1445:
case 4058:
case 2086:
case 2953:
case 2458:
case 3393:
case 1469:
case 3820:
case 1989:
case 3644:
case 3406:
case 3363:
case 1573:
case 384:
case 1818:
case 2766:
case 584:
case 1200:
case 2266:
case 950:
case 933:
case 3344:
case 2787:
case 3420:
case 388:
case 1814:
case 1872:
case 2235:
case 2854:
case 1594:
case 3138:
case 3348:
case 235:
case 3117:
case 399:
case 1475:
case 3384:
case 3674:
case 3612:
case 1811:
case 1885:
case 588:
case 2851:
case 2207:
case 3897:
case 2707:
case 204:
case 444:
case 2656:
case 3029:
case 958:
case 1616:
case 1191:
case 3876:
case 3467:
case 3987:
case 3538:
case 1805:
case 18:
case 487:
case 954:
case 1198:
case 3534:
case 496:
case 448:
case 3054:
case 3935:
case 193:
case 3051:
case 1402:
case 692:
case 1173:
case 279:
case 540:
case 447:
case 207:
case 226:
case 2128:
case 3725:
case 3604:
case 172:
case 701:
case 1168:
case 1802:
case 673:
case 623:
case 340:
case 957:
case 2121:
case 3497:
case 2006:
case 1316:
case 3996:
case 2430:
case 2020:
case 3476:
case 1503:
case 3886:
case 1201:
case 2665:
case 362:
case 749:
case 3551:
case 2692:
case 195:
case 869:
case 3421:
case 2197:
case 3031:
case 1322:
case 2362:
case 904:
case 2395:
case 3034:
case 1204:
case 3130:
case 258:
case 3554:
case 2176:
case 1625:
case 1704:
case 3038:
case 929:
case 1653:
case 1208:
case 1590:
case 2850:
case 2379:
case 2613:
case 979:
case 1810:
case 2636:
case 3017:
case 3529:
case 3380:
case 2389:
case 2520:
case 2450:
case 4050:
case 907:
case 2336:
case 3859:
case 3216:
case 3680:
case 3952:
case 751:
case 332:
case 625:
case 471:
case 2349:
case 1622:
case 257:
case 2695:
case 2662:
case 1325:
case 2167:
case 217:
case 1793:
case 965:
case 2586:
case 2567:
case 4038:
case 711:
case 2916:
case 1068:
case 1778:
case 1019:
case 1457:
case 1278:
case 1064:
case 1774:
case 1160:
case 2546:
case 2252:
case 1212:
case 1771:
case 2120:
case 1271:
case 666:
case 2024:
case 1043:
case 1061:
case 4034:
case 371:
case 1284:
case 2831:
case 321:
case 214:
case 669:
case 3129:
case 1091:
case 1094:
case 1190:
case 2834:
case 1715:
case 571:
case 2255:
case 1748:
case 1098:
case 3300:
case 900:
case 218:
case 3154:
case 2723:
case 2576:
case 1788:
case 1288:
case 3151:
case 1741:
case 1073:
case 1857:
case 3731:
case 3231:
case 281:
case 1001:
case 868:
case 1354:
case 2187:
case 3734:
case 3234:
case 748:
case 837:
case 2682:
case 2166:
case 796:
case 1540:
case 909:
case 3823:
case 3738:
case 2369:
case 928:
case 2642:
case 3660:
case 978:
case 2337:
case 2699:
case 3217:
case 864:
case 2669:
case 3423:
case 3033:
case 3360:
case 906:
case 784:
case 3016:
case 1629:
case 2342:
case 834:
case 977:
case 3921:
case 2375:
case 605:
case 2196:
case 152:
case 3525:
case 838:
case 2382:
case 3924:
case 3455:
case 2177:
case 216:
case 2833:
case 2728:
case 1630:
case 1093:
case 2759:
case 613:
case 2816:
case 3327:
case 634:
case 1856:
case 1283:
case 112:
case 1074:
case 2221:
case 830:
case 1170:
case 1764:
case 2532:
case 2721:
case 805:
case 2224:
case 2605:
case 638:
case 2724:
case 667:
case 1071:
case 2602:
case 2547:
case 1084:
case 1015:
case 23:
case 2305:
case 501:
case 1081:
case 2934:
case 1794:
case 637:
case 2535:
case 2023:
case 2938:
case 2587:
case 3250:
case 3750:
case 1500:
case 219:
case 1273:
case 4016:
case 1041:
case 1063:
case 3627:
case 1456:
case 87:
case 1462:
case 1982:
case 3343:
case 3361:
case 82:
case 1495:
case 2825:
case 1571:
case 842:
case 1892:
case 3116:
case 586:
case 1512:
case 1574:
case 803:
case 1865:
case 1849:
case 349:
case 2032:
case 855:
case 3319:
case 3407:
case 1578:
case 411:
case 1999:
case 2739:
case 2239:
case 615:
case 1727:
case 1942:
case 1889:
case 2610:
case 3698:
case 1650:
case 2286:
case 3619:
case 1436:
case 394:
case 1101:
case 2929:
case 3230:
case 1544:
case 2776:
case 2276:
case 2087:
case 1918:
case 1413:
case 594:
case 2066:
case 1000:
case 3661:
case 1548:
case 1862:
case 919:
case 1895:
case 2555:
case 589:
case 1914:
case 4025:
case 2954:
case 3394:
case 1492:
case 2951:
case 546:
case 3664:
case 732:
case 270:
case 220:
case 3229:
case 1080:
case 3496:
case 1409:
case 311:
case 224:
case 1184:
case 3758:
case 1290:
case 1148:
case 2155:
case 3258:
case 1790:
case 3603:
case 981:
case 1181:
case 2930:
case 3887:
case 3976:
case 1338:
case 3754:
case 228:
case 1504:
case 486:
case 1144:
case 3835:
case 3254:
case 1905:
case 1040:
case 682:
case 209:
case 390:
case 1141:
case 206:
case 446:
case 498:
case 3025:
case 3435:
case 227:
case 1634:
case 277:
case 1193:
case 3832:
case 642:
case 3447:
case 1631:
case 1178:
case 603:
case 102:
case 956:
case 3516:
case 2206:
case 1112:
case 3939:
case 3896:
case 3:
case 815:
case 5:
case 941:
case 3466:
case 2720:
case 2220:
case 3487:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748581201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,];
var gg_b = "1748581201/";

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
