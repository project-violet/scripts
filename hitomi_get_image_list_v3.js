// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 1348:
case 3620:
case 3401:
case 1086:
case 3354:
case 4055:
case 90:
case 837:
case 2987:
case 2827:
case 7:
case 3126:
case 1799:
case 1113:
case 2503:
case 85:
case 1534:
case 2487:
case 2428:
case 2184:
case 3713:
case 3296:
case 1731:
case 3180:
case 1916:
case 2181:
case 3918:
case 3310:
case 976:
case 1551:
case 3739:
case 1674:
case 1832:
case 2505:
case 3295:
case 645:
case 2115:
case 1133:
case 3365:
case 2671:
case 1096:
case 422:
case 395:
case 1523:
case 786:
case 867:
case 3366:
case 3800:
case 378:
case 2128:
case 2611:
case 3046:
case 1719:
case 1067:
case 3611:
case 2073:
case 2870:
case 2893:
case 1585:
case 2276:
case 1982:
case 2774:
case 1021:
case 1999:
case 3784:
case 2021:
case 603:
case 2784:
case 379:
case 3786:
case 3580:
case 2958:
case 1796:
case 3901:
case 2231:
case 1365:
case 2364:
case 118:
case 1336:
case 2755:
case 3015:
case 2112:
case 822:
case 3115:
case 375:
case 753:
case 785:
case 2401:
case 1356:
case 2010:
case 3284:
case 2122:
case 1710:
case 2201:
case 2027:
case 535:
case 211:
case 2490:
case 2862:
case 3137:
case 2060:
case 2731:
case 2143:
case 3266:
case 3260:
case 3234:
case 441:
case 2921:
case 2948:
case 889:
case 3626:
case 2794:
case 1612:
case 3438:
case 1252:
case 3771:
case 3422:
case 3241:
case 3258:
case 1095:
case 1605:
case 1599:
case 2552:
case 3843:
case 2881:
case 2938:
case 396:
case 2623:
case 1906:
case 2084:
case 3589:
case 2642:
case 3251:
case 2818:
case 3532:
case 1283:
case 2249:
case 3481:
case 983:
case 3395:
case 3575:
case 2723:
case 722:
case 1028:
case 3372:
case 3673:
case 3737:
case 2260:
case 1418:
case 2882:
case 663:
case 2146:
case 1579:
case 861:
case 3446:
case 1156:
case 1655:
case 225:
case 1803:
case 2593:
case 3583:
case 3197:
case 828:
case 614:
case 1717:
case 21:
case 2209:
case 2972:
case 3996:
case 2746:
case 1897:
case 1636:
case 2341:
case 3522:
case 865:
case 1112:
case 1047:
case 2322:
case 2499:
case 2682:
case 1648:
case 2764:
case 2799:
case 3161:
case 1316:
case 1591:
case 613:
case 706:
case 3995:
case 4003:
case 2572:
case 793:
case 701:
case 3789:
case 507:
case 647:
case 1234:
case 2480:
case 1976:
case 1792:
case 2860:
case 471:
case 961:
case 2683:
case 1401:
case 3822:
case 1962:
case 2914:
case 2822:
case 1353:
case 3721:
case 1163:
case 3074:
case 4081:
case 1281:
case 1952:
case 2678:
case 290:
case 3262:
case 1004:
case 513:
case 3997:
case 1730:
case 25:
case 3637:
case 91:
case 853:
case 2811:
case 2370:
case 2151:
case 361:
case 2247:
case 2066:
case 3556:
case 3078:
case 3858:
case 1543:
case 3856:
case 1623:
case 2556:
case 806:
case 1960:
case 2523:
case 2908:
case 1424:
case 3292:
case 1760:
case 1245:
case 2530:
case 3850:
case 1027:
case 3906:
case 1577:
case 590:
case 1049:
case 289:
case 864:
case 3603:
case 3356:
case 3727:
case 3102:
case 3834:
case 131:
case 87:
case 3600:
case 1600:
case 14:
case 2031:
case 329:
case 4042:
case 146:
case 2795:
case 1123:
case 924:
case 4095:
case 2762:
case 2174:
case 764:
case 1917:
case 4061:
case 1690:
case 367:
case 2464:
case 1141:
case 2852:
case 3038:
case 3963:
case 440:
case 955:
case 1415:
case 1435:
case 1969:
case 2531:
case 1846:
case 1938:
case 3314:
case 2296:
case 485:
case 1075:
case 958:
case 2546:
case 1074:
case 3326:
case 1924:
case 1089:
case 821:
case 4085:
case 617:
case 3812:
case 1029:
case 3701:
case 3110:
case 1725:
case 3194:
case 893:
case 3124:
case 1186:
case 2903:
case 3291:
case 1714:
case 3875:
case 3135:
case 2057:
case 3616:
case 1454:
case 1400:
case 3108:
case 2835:
case 3652:
case 3313:
case 111:
case 2064:
case 2125:
case 3155:
case 3119:
case 2599:
case 1762:
case 3352:
case 235:
case 3835:
case 1696:
case 3772:
case 105:
case 3466:
case 1287:
case 4078:
case 68:
case 2946:
case 3054:
case 3394:
case 3898:
case 2992:
case 1265:
case 3613:
case 1083:
case 1830:
case 401:
case 3651:
case 2026:
case 992:
case 1298:
case 1525:
case 3453:
case 1798:
case 1650:
case 246:
case 2252:
case 1453:
case 2292:
case 3798:
case 1243:
case 3829:
case 2932:
case 2421:
case 3342:
case 1677:
case 3723:
case 2970:
case 2375:
case 3061:
case 3323:
case 1378:
case 1946:
case 2173:
case 369:
case 1985:
case 1769:
case 1911:
case 1688:
case 643:
case 2947:
case 411:
case 265:
case 354:
case 630:
case 1433:
case 397:
case 2725:
case 688:
case 1398:
case 2053:
case 2957:
case 237:
case 137:
case 262:
case 3910:
case 1561:
case 644:
case 3052:
case 3873:
case 3598:
case 2287:
case 2617:
case 3217:
case 272:
case 2493:
case 2479:
case 1403:
case 474:
case 565:
case 2002:
case 1815:
case 3249:
case 1967:
case 2169:
case 3333:
case 2218:
case 316:
case 3011:
case 3563:
case 1767:
case 2629:
case 1778:
case 3173:
case 652:
case 3730:
case 1321:
case 3413:
case 896:
case 2555:
case 1391:
case 1936:
case 1837:
case 1932:
case 2553:
case 416:
case 1931:
case 3360:
case 2468:
case 103:
case 3335:
case 1504:
case 1739:
case 447:
case 2390:
case 2845:
case 374:
case 1942:
case 230:
case 2919:
case 2667:
case 3238:
case 1425:
case 2618:
case 1822:
case 1139:
case 3520:
case 2980:
case 2688:
case 3558:
case 894:
case 2439:
case 4012:
case 1148:
case 2700:
case 1430:
case 3671:
case 97:
case 1184:
case 849:
case 2472:
case 2658:
case 2685:
case 818:
case 1828:
case 1836:
case 941:
case 2931:
case 2789:
case 2769:
case 3863:
case 2878:
case 51:
case 457:
case 1879:
case 1500:
case 449:
case 1176:
case 337:
case 84:
case 1635:
case 2089:
case 2432:
case 333:
case 3819:
case 427:
case 2533:
case 4070:
case 1367:
case 1821:
case 1171:
case 2897:
case 1116:
case 3648:
case 3953:
case 1874:
case 3033:
case 3341:
case 3256:
case 2238:
case 3150:
case 431:
case 1441:
case 550:
case 1477:
case 3572:
case 2942:
case 3426:
case 529:
case 1362:
case 1530:
case 1267:
case 2989:
case 2955:
case 3239:
case 2030:
case 1207:
case 3925:
case 927:
case 3791:
case 795:
case 3050:
case 1022:
case 920:
case 4037:
case 1855:
case 1479:
case 3741:
case 2879:
case 752:
case 2070:
case 2677:
case 1814:
case 1877:
case 1779:
case 3122:
case 3968:
case 1450:
case 1473:
case 3596:
case 544:
case 185:
case 1809:
case 2372:
case 3255:
case 2740:
case 3091:
case 1103:
case 2859:
case 305:
case 619:
case 3390:
case 704:
case 1604:
case 2188:
case 1393:
case 3759:
case 3388:
case 2756:
case 618:
case 2691:
case 1380:
case 524:
case 1164:
case 3663:
case 2096:
case 99:
case 3879:
case 2765:
case 3825:
case 3283:
case 104:
case 3888:
case 665:
case 3072:
case 3938:
case 1749:
case 3376:
case 1583:
case 238:
case 1842:
case 1030:
case 3136:
case 2079:
case 1535:
case 223:
case 977:
case 1052:
case 495:
case 1590:
case 2895:
case 3570:
case 1242:
case 3298:
case 2454:
case 2871:
case 1203:
case 215:
case 2246:
case 1487:
case 2489:
case 2120:
case 3362:
case 3355:
case 1468:
case 3973:
case 912:
case 1489:
case 2592:
case 3473:
case 971:
case 3927:
case 677:
case 1878:
case 721:
case 1895:
case 3948:
case 2373:
case 3423:
case 22:
case 3744:
case 817:
case 2813:
case 911:
case 1589:
case 2509:
case 2900:
case 2954:
case 2844:
case 3468:
case 559:
case 126:
case 3565:
case 1519:
case 3806:
case 2305:
case 1981:
case 1541:
case 2934:
case 3966:
case 3541:
case 1149:
case 541:
case 3148:
case 1097:
case 957:
case 718:
case 1898:
case 3227:
case 2417:
case 595:
case 1411:
case 569:
case 2950:
case 3233:
case 102:
case 1198:
case 4090:
case 2894:
case 942:
case 3585:
case 820:
case 3579:
case 690:
case 2129:
case 96:
case 2407:
case 1840:
case 288:
case 1667:
case 3378:
case 2045:
case 2867:
case 122:
case 1700:
case 1347:
case 1:
case 881:
case 4063:
case 965:
case 2134:
case 390:
case 182:
case 3293:
case 3615:
case 934:
case 3797:
case 1126:
case 1825:
case 638:
case 699:
case 3338:
case 516:
case 557:
case 2537:
case 1625:
case 1360:
case 2510:
case 982:
case 3068:
case 3130:
case 1436:
case 106:
case 3117:
case 334:
case 1325:
case 402:
case 464:
case 302:
case 1550:
case 1428:
case 4008:
case 1608:
case 897:
case 227:
case 3067:
case 3277:
case 511:
case 2268:
case 1349:
case 2983:
case 62:
case 1873:
case 1972:
case 3004:
case 406:
case 3614:
case 1713:
case 830:
case 990:
case 2761:
case 3386:
case 1131:
case 3899:
case 1711:
case 359:
case 3106:
case 2679:
case 523:
case 1915:
case 454:
case 2993:
case 3675:
case 1389:
case 2320:
case 162:
case 3597:
case 181:
case 3720:
case 2999:
case 2191:
case 1206:
case 3548:
case 1574:
case 1598:
case 3462:
case 2498:
case 944:
case 2663:
case 1676:
case 662:
case 1121:
case 3429:
case 1684:
case 1621:
case 3169:
case 3149:
case 859:
case 4052:
case 3768:
case 3991:
case 960:
case 3275:
case 2661:
case 3201:
case 1233:
case 1782:
case 45:
case 3321:
case 1617:
case 2492:
case 2873:
case 488:
case 1101:
case 661:
case 936:
case 2727:
case 2925:
case 1786:
case 2647:
case 480:
case 3216:
case 210:
case 501:
case 4071:
case 116:
case 1780:
case 2359:
case 456:
case 521:
case 898:
case 1660:
case 2266:
case 712:
case 3878:
case 1734:
case 1831:
case 2457:
case 1280:
case 3458:
case 1723:
case 389:
case 2940:
case 2259:
case 3127:
case 2024:
case 1606:
case 255:
case 3555:
case 3641:
case 1706:
case 1035:
case 1183:
case 1797:
case 743:
case 3913:
case 522:
case 2040:
case 1632:
case 2455:
case 1000:
case 1800:
case 2628:
case 3923:
case 2672:
case 1663:
case 2131:
case 2011:
case 3339:
case 1652:
case 1954:
case 787:
case 1861:
case 1002:
case 1559:
case 1807:
case 3855:
case 3885:
case 1016:
case 1031:
case 3425:
case 1236:
case 2240:
case 2385:
case 2059:
case 700:
case 174:
case 3460:
case 1672:
case 4073:
case 1565:
case 2245:
case 3581:
case 566:
case 2527:
case 165:
case 3722:
case 430:
case 2434:
case 3909:
case 1081:
case 3103:
case 1305:
case 2865:
case 384:
case 616:
case 229:
case 3748:
case 242:
case 3501:
case 4082:
case 2864:
case 408:
case 2352:
case 2971:
case 1627:
case 2441:
case 2608:
case 3452:
case 1862:
case 226:
case 2636:
case 2239:
case 2750:
case 923:
case 1658:
case 2508:
case 3645:
case 1084:
case 3245:
case 3766:
case 1182:
case 2400:
case 1568:
case 1540:
case 1087:
case 423:
case 2469:
case 1682:
case 198:
case 3082:
case 160:
case 2786:
case 23:
case 838:
case 1269:
case 970:
case 1759:
case 1274:
case 1866:
case 3236:
case 514:
case 1949:
case 3837:
case 594:
case 2299:
case 2744:
case 10:
case 1458:
case 3099:
case 1894:
case 1099:
case 2820:
case 1371:
case 2088:
case 48:
case 3240:
case 3989:
case 2425:
case 1451:
case 656:
case 110:
case 2851:
case 187:
case 615:
case 2450:
case 799:
case 609:
case 463:
case 2848:
case 3315:
case 1841:
case 3027:
case 3246:
case 2135:
case 3832:
case 2136:
case 932:
case 1649:
case 3705:
case 3793:
case 650:
case 3343:
case 1409:
case 148:
case 995:
case 2377:
case 193:
case 2294:
case 1457:
case 349:
case 2098:
case 2453:
case 2846:
case 3377:
case 3582:
case 1844:
case 2032:
case 2058:
case 1041:
case 2307:
case 3116:
case 1463:
case 3133:
case 4047:
case 1192:
case 4011:
case 1847:
case 3221:
case 1180:
case 1613:
case 3080:
case 1870:
case 2044:
case 509:
case 991:
case 749:
case 1350:
case 1823:
case 2380:
case 1485:
case 3090:
case 2781:
case 299:
case 2898:
case 1595:
case 2767:
case 646:
case 2912:
case 3569:
case 3653:
case 219:
case 1276:
case 1118:
case 2094:
case 2745:
case 3776:
case 3406:
case 3983:
case 1628:
case 2345:
case 791:
case 723:
case 1631:
case 729:
case 2494:
case 2290:
case 781:
case 2063:
case 2525:
case 3961:
case 3058:
case 2324:
case 3529:
case 76:
case 4065:
case 3509:
case 83:
case 947:
case 2106:
case 2219:
case 3387:
case 197:
case 3731:
case 3949:
case 2565:
case 1286:
case 3254:
case 3100:
case 328:
case 3795:
case 39:
case 1341:
case 3710:
case 1091:
case 1787:
case 798:
case 2967:
case 1431:
case 3297:
case 1580:
case 2776:
case 740:
case 2828:
case 2196:
case 2514:
case 4020:
case 2459:
case 196:
case 63:
case 267:
case 2087:
case 1785:
case 2042:
case 1202:
case 2804:
case 3134:
case 1289:
case 3551:
case 1406:
case 3907:
case 2360:
case 1007:
case 684:
case 1408:
case 3479:
case 1080:
case 2203:
case 3924:
case 588:
case 3494:
case 2467:
case 2842:
case 1055:
case 274:
case 3542:
case 3691:
case 2342:
case 998:
case 2589:
case 1125:
case 2463:
case 3359:
case 962:
case 3594:
case 2440:
case 172:
case 3916:
case 368:
case 4024:
case 3199:
case 1505:
case 2998:
case 1010:
case 2102:
case 1512:
case 933:
case 2624:
case 461:
case 3629:
case 3540:
case 2183:
case 3846:
case 3:
case 1478:
case 1597:
case 2451:
case 901:
case 1272:
case 3632:
case 2554:
case 1570:
case 2371:
case 552:
case 3643:
case 1493:
case 3427:
case 2466:
case 1575:
case 1098:
case 3242:
case 418:
case 343:
case 1092:
case 3897:
case 596:
case 2382:
case 2609:
case 2911:
case 2263:
case 880:
case 3854:
case 1871:
case 2579:
case 825:
case 2330:
case 2884:
case 1562:
case 1227:
case 2178:
case 2438:
case 1249:
case 2035:
case 784:
case 2009:
case 2716:
case 3690:
case 2182:
case 2147:
case 207:
case 2447:
case 2365:
case 1889:
case 3531:
case 2405:
case 1119:
case 2483:
case 2153:
case 2192:
case 3886:
case 1805:
case 73:
case 82:
case 2704:
case 2006:
case 3274:
case 553:
case 1526:
case 2310:
case 3818:
case 2497:
case 2549:
case 2959:
case 189:
case 2424:
case 1557:
case 2541:
case 3624:
case 2686:
case 2206:
case 2692:
case 3128:
case 1464:
case 3085:
case 1200:
case 3828:
case 1241:
case 403:
case 639:
case 2619:
case 800:
case 3421:
case 2311:
case 310:
case 1930:
case 3195:
case 264:
case 3123:
case 4060:
case 883:
case 2945:
case 3586:
case 682:
case 1257:
case 3758:
case 1056:
case 2986:
case 186:
case 1746:
case 2891:
case 455:
case 2104:
case 2953:
case 2166:
case 3044:
case 2594:
case 3877:
case 2936:
case 1891:
case 2872:
case 1747:
case 2939:
case 2306:
case 1271:
case 2588:
case 4031:
case 3745:
case 3780:
case 3590:
case 2226:
case 871:
case 2049:
case 1194:
case 1015:
case 803:
case 1199:
case 3368:
case 3853:
case 3734:
case 2:
case 298:
case 2347:
case 2787:
case 3999:
case 2580:
case 240:
case 1698:
case 2097:
case 2436:
case 3278:
case 3656:
case 2644:
case 840:
case 756:
case 666:
case 3270:
case 4077:
case 1301:
case 2001:
case 1013:
case 697:
case 1729:
case 2366:
case 3400:
case 2708:
case 1853:
case 3801:
case 910:
case 708:
case 3361:
case 974:
case 2896:
case 1964:
case 922:
case 256:
case 2397:
case 2810:
case 964:
case 3904:
case 1111:
case 4075:
case 1429:
case 1753:
case 2241:
case 2694:
case 4023:
case 1038:
case 1039:
case 648:
case 3696:
case 3604:
case 3524:
case 1332:
case 1742:
case 1681:
case 915:
case 1726:
case 3862:
case 774:
case 52:
case 1465:
case 727:
case 3840:
case 1503:
case 3609:
case 554:
case 908:
case 2751:
case 1538:
case 2854:
case 114:
case 2637:
case 1157:
case 2488:
case 3965:
case 2869:
case 133:
case 3587:
case 3084:
case 3165:
case 492:
case 2680:
case 3301:
case 3912:
case 2163:
case 598:
case 1231:
case 602:
case 1881:
case 2728:
case 2354:
case 2540:
case 332:
case 3073:
case 3838:
case 3783:
case 287:
case 1607:
case 2702:
case 1282:
case 858:
case 1058:
case 1567:
case 1892:
case 2062:
case 3461:
case 2832:
case 956:
case 3184:
case 3176:
case 1602:
case 3782:
case 1263:
case 1177:
case 2743:
case 3688:
case 3474:
case 3774:
case 1480:
case 2564:
case 950:
case 2061:
case 2429:
case 903:
case 1205:
case 2571:
case 1955:
case 3097:
case 1228:
case 4045:
case 3957:
case 918:
case 1110:
case 3040:
case 326:
case 2482:
case 2640:
case 547:
case 2398:
case 263:
case 2974:
case 2785:
case 271:
case 3769:
case 3707:
case 3815:
case 6:
case 153:
case 3007:
case 3841:
case 3039:
case 877:
case 2937:
case 1481:
case 3959:
case 1640:
case 2788:
case 2504:
case 506:
case 1438:
case 3437:
case 2303:
case 3412:
case 1683:
case 3606:
case 862:
case 2512:
case 2399:
case 3247:
case 2103:
case 1314:
case 1801:
case 1317:
case 3410:
case 2414:
case 1222:
case 1735:
case 3206:
case 2340:
case 576:
case 3220:
case 735:
case 249:
case 3211:
case 3868:
case 3896:
case 3869:
case 3944:
case 3478:
case 1318:
case 2465:
case 321:
case 253:
case 3331:
case 3816:
case 770:
case 2705:
case 1639:
case 2605:
case 1051:
case 539:
case 3638:
case 2319:
case 2351:
case 134:
case 3411:
case 3933:
case 921:
case 2561:
case 3679:
case 3492:
case 2138:
case 317:
case 100:
case 136:
case 3472:
case 168:
case 2230:
case 2477:
case 269:
case 490:
case 3568:
case 436:
case 3205:
case 2646:
case 3817:
case 1076:
case 2237:
case 3521:
case 863:
case 2078:
case 1509:
case 243:
case 2484:
case 621:
case 2004:
case 3676:
case 37:
case 3872:
case 363:
case 4044:
case 1737:
case 745:
case 3516:
case 826:
case 1014:
case 1440:
case 527:
case 2141:
case 3263:
case 1913:
case 3985:
case 2051:
case 1544:
case 1622:
case 3647:
case 3057:
case 1670:
case 3702:
case 1824:
case 1659:
case 88:
case 2308:
case 3463:
case 61:
case 1449:
case 2615:
case 802:
case 3939:
case 1758:
case 705:
case 587:
case 1563:
case 1120:
case 257:
case 3190:
case 2838:
case 560:
case 180:
case 3880:
case 3917:
case 2747:
case 3998:
case 1294:
case 2982:
case 1127:
case 3893:
case 754:
case 3578:
case 3557:
case 3694:
case 4027:
case 3779:
case 3069:
case 2792:
case 1989:
case 2616:
case 1997:
case 3093:
case 1023:
case 3433:
case 4080:
case 1848:
case 3622:
case 783:
case 3279:
case 1172:
case 2709:
case 2317:
case 3592:
case 2511:
case 140:
case 120:
case 1951:
case 1643:
case 1816:
case 4066:
case 2081:
case 2696:
case 963:
case 139:
case 3223:
case 3810:
case 1395:
case 1975:
case 2701:
case 1795:
case 3294:
case 792:
case 876:
case 1736:
case 2095:
case 890:
case 3874:
case 882:
case 347:
case 2521:
case 1998:
case 3210:
case 1545:
case 1748:
case 1802:
case 850:
case 3288:
case 4088:
case 3891:
case 2376:
case 248:
case 1918:
case 686:
case 2567:
case 1219:
case 2295:
case 1032:
case 1357:
case 892:
case 98:
case 3179:
case 3530:
case 2028:
case 1528:
case 241:
case 1446:
case 2836:
case 1508:
case 3086:
case 808:
case 169:
case 1216:
case 3576:
case 827:
case 307:
case 1384:
case 1455:
case 3449:
case 1666:
case 3936:
case 1204:
case 2665:
case 3932:
case 2357:
case 1484:
case 1993:
case 1549:
case 3794:
case 914:
case 2481:
case 2114:
case 935:
case 2213:
case 3384:
case 3760:
case 755:
case 1427:
case 1715:
case 1240:
case 3849:
case 3348:
case 1108:
case 3506:
case 1114:
case 1426:
case 1494:
case 1901:
case 1220:
case 143:
case 3159:
case 586:
case 3340:
case 1155:
case 121:
case 79:
case 4032:
case 1344:
case 3654:
case 3922:
case 1366:
case 531:
case 568:
case 3902:
case 3981:
case 1388:
case 3087:
case 1521:
case 907:
case 1709:
case 1685:
case 1387:
case 1358:
case 1772:
case 55:
case 385:
case 1818:
case 1462:
case 2430:
case 2681:
case 3591:
case 1069:
case 1657:
case 2456:
case 1691:
case 3777:
case 3809:
case 3619:
case 4086:
case 3593:
case 3890:
case 3222:
case 3235:
case 996:
case 2814:
case 1610:
case 1008:
case 163:
case 2532:
case 810:
case 612:
case 641:
case 2557:
case 1629:
case 2595:
case 1770:
case 600:
case 3178:
case 3154:
case 2055:
case 3153:
case 2569:
case 2771:
case 1115:
case 155:
case 2985:
case 946:
case 1320:
case 1068:
case 2199:
case 3969:
case 1820:
case 2124:
case 2335:
case 1044:
case 2298:
case 1776:
case 3487:
case 382:
case 1661:
case 2205:
case 1827:
case 1720:
case 218:
case 2107:
case 3668:
case 1571:
case 3424:
case 3451:
case 1073:
case 3010:
case 132:
case 1230:
case 3867:
case 58:
case 747:
case 1147:
case 856:
case 1443:
case 1678:
case 1070:
case 2261:
case 2339:
case 2076:
case 1741:
case 1539:
case 2518:
case 1212:
case 658:
case 1859:
case 1941:
case 1213:
case 2418:
case 3836:
case 47:
case 279:
case 2177:
case 293:
case 2386:
case 1703:
case 2943:
case 152:
case 4094:
case 412:
case 2257:
case 3287:
case 2635:
case 1520:
case 3371:
case 2215:
case 4026:
case 336:
case 1036:
case 3459:
case 3237:
case 2227:
case 1138:
case 1323:
case 1379:
case 4050:
case 673:
case 1775:
case 489:
case 3992:
case 675:
case 2025:
case 3280:
case 1712:
case 1392:
case 2626:
case 2758:
case 145:
case 3527:
case 2736:
case 1311:
case 3929:
case 1244:
case 1576:
case 3381:
case 997:
case 3844:
case 1498:
case 2885:
case 315:
case 435:
case 2603:
case 3347:
case 452:
case 3639:
case 3092:
case 2085:
case 3204:
case 2485:
case 3034:
case 926:
case 3031:
case 902:
case 1783:
case 952:
case 214:
case 2732:
case 930:
case 1410:
case 1001:
case 801:
case 3692:
case 1865:
case 3200:
case 3808:
case 3272:
case 460:
case 2419:
case 1546:
case 1896:
case 1467:
case 1352:
case 2289:
case 3409:
case 437:
case 13:
case 3332:
case 1808:
case 3060:
case 2941:
case 15:
case 499:
case 1905:
case 1253:
case 2075:
case 2099:
case 309:
case 308:
case 3350:
case 2830:
case 558:
case 2713:
case 459:
case 2152:
case 572:
case 496:
case 1937:
case 216:
case 847:
case 1342:
case 32:
case 304:
case 3664:
case 4016:
case 674:
case 1637:
case 291:
case 891:
case 1634:
case 251:
case 1501:
case 2791:
case 1548:
case 1351:
case 1584:
case 3979:
case 3305:
case 462:
case 2327:
case 3493:
case 1794:
case 2633:
case 2782:
case 3393:
case 3104:
case 2282:
case 3336:
case 2648:
case 40:
case 2632:
case 2314:
case 1806:
case 1912:
case 1260:
case 3505:
case 3020:
case 1656:
case 909:
case 3934:
case 3755:
case 1019:
case 46:
case 2041:
case 3059:
case 2699:
case 3677:
case 2161:
case 3307:
case 3971:
case 18:
case 4006:
case 1948:
case 2065:
case 2412:
case 217:
case 2649:
case 2133:
case 2016:
case 2251:
case 2790:
case 3706:
case 591:
case 417:
case 3147:
case 2952:
case 1266:
case 2210:
case 1354:
case 2384:
case 2526:
case 2164:
case 4039:
case 3017:
case 1129:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1690488002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,];
var gg_b = "1690488002/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
