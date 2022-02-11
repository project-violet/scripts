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
var o = 1;
switch (g) {
case 1212:
case 1093:
case 2455:
case 3218:
case 3209:
case 3802:
case 2774:
case 3058:
case 3353:
case 2661:
case 182:
case 2066:
case 482:
case 95:
case 1702:
case 2906:
case 3644:
case 3647:
case 1054:
case 2270:
case 2014:
case 3021:
case 3583:
case 3284:
case 3478:
case 3085:
case 601:
case 3921:
case 106:
case 1574:
case 799:
case 2506:
case 1994:
case 3127:
case 1240:
case 26:
case 2391:
case 986:
case 3873:
case 285:
case 2732:
case 1680:
case 1800:
case 1472:
case 1342:
case 2356:
case 436:
case 2699:
case 236:
case 705:
case 520:
case 1635:
case 1857:
case 25:
case 3513:
case 1657:
case 950:
case 3183:
case 669:
case 1885:
case 2187:
case 1123:
case 1108:
case 795:
case 3953:
case 2500:
case 1305:
case 2843:
case 125:
case 460:
case 2128:
case 3372:
case 302:
case 1288:
case 2337:
case 1695:
case 3413:
case 1196:
case 584:
case 1349:
case 1323:
case 3389:
case 529:
case 718:
case 1575:
case 3715:
case 3788:
case 144:
case 483:
case 20:
case 711:
case 3501:
case 1284:
case 1707:
case 3749:
case 1629:
case 2127:
case 3237:
case 331:
case 3634:
case 746:
case 4079:
case 3779:
case 2766:
case 1738:
case 1477:
case 461:
case 3496:
case 2197:
case 4008:
case 433:
case 3858:
case 280:
case 1819:
case 273:
case 1590:
case 2213:
case 3692:
case 1931:
case 3618:
case 3818:
case 13:
case 277:
case 3812:
case 2037:
case 1676:
case 2776:
case 2887:
case 541:
case 1970:
case 72:
case 1619:
case 4093:
case 815:
case 863:
case 899:
case 471:
case 3958:
case 1896:
case 1998:
case 2049:
case 181:
case 466:
case 6:
case 3509:
case 3689:
case 758:
case 3473:
case 2403:
case 4050:
case 2855:
case 3920:
case 245:
case 3364:
case 3192:
case 1387:
case 1866:
case 170:
case 2470:
case 1402:
case 3775:
case 468:
case 3341:
case 1712:
case 713:
case 1669:
case 1895:
case 907:
case 988:
case 2122:
case 1618:
case 226:
case 346:
case 1239:
case 4005:
case 960:
case 1300:
case 444:
case 3769:
case 4059:
case 1953:
case 3719:
case 3688:
case 4085:
case 3143:
case 1916:
case 2583:
case 287:
case 1306:
case 2945:
case 1243:
case 2737:
case 3990:
case 1962:
case 3691:
case 2417:
case 2286:
case 1292:
case 2142:
case 1202:
case 2958:
case 615:
case 3279:
case 1694:
case 2333:
case 60:
case 747:
case 250:
case 1260:
case 962:
case 2046:
case 399:
case 370:
case 365:
case 1801:
case 1044:
case 469:
case 2429:
case 4063:
case 1528:
case 4029:
case 625:
case 2277:
case 3887:
case 3813:
case 3010:
case 2164:
case 573:
case 3283:
case 1298:
case 4088:
case 1958:
case 3572:
case 431:
case 3103:
case 409:
case 53:
case 3948:
case 3141:
case 1835:
case 2039:
case 3497:
case 1646:
case 2526:
case 305:
case 2966:
case 312:
case 116:
case 459:
case 272:
case 917:
case 361:
case 2104:
case 3937:
case 3082:
case 3838:
case 4080:
case 515:
case 3169:
case 470:
case 2451:
case 3017:
case 1253:
case 3365:
case 2773:
case 704:
case 2967:
case 3690:
case 3055:
case 3463:
case 2540:
case 1340:
case 204:
case 1729:
case 1813:
case 3248:
case 3987:
case 2181:
case 3238:
case 835:
case 291:
case 3694:
case 2848:
case 1740:
case 448:
case 467:
case 2072:
case 2864:
case 3414:
case 382:
case 4049:
case 322:
case 230:
case 161:
case 1043:
case 2899:
case 3247:
case 660:
case 2933:
case 672:
case 2420:
case 2338:
case 462:
case 721:
case 683:
case 3752:
case 3667:
case 1102:
case 3842:
case 604:
case 2054:
case 909:
case 1758:
case 2440:
case 76:
case 1297:
case 2768:
case 3768:
case 1163:
case 3117:
case 2924:
case 2083:
case 2988:
case 193:
case 194:
case 853:
case 2102:
case 3014:
case 2751:
case 3394:
case 2875:
case 1943:
case 2671:
case 265:
case 3412:
case 3648:
case 4073:
case 2753:
case 22:
case 2849:
case 186:
case 724:
case 3851:
case 1012:
case 1910:
case 1675:
case 2579:
case 2442:
case 1258:
case 4065:
case 2860:
case 3334:
case 703:
case 2028:
case 1550:
case 1744:
case 2759:
case 3327:
case 1853:
case 3116:
case 1321:
case 1488:
case 2383:
case 206:
case 373:
case 3869:
case 3481:
case 1:
case 2351:
case 1911:
case 2227:
case 1379:
case 1134:
case 1463:
case 3907:
case 1510:
case 223:
case 969:
case 2929:
case 3036:
case 3462:
case 259:
case 4002:
case 3241:
case 1796:
case 2717:
case 2514:
case 1303:
case 3514:
case 1264:
case 871:
case 696:
case 2126:
case 2493:
case 3145:
case 692:
case 3685:
case 4075:
case 1395:
case 28:
case 1400:
case 4013:
case 3299:
case 3226:
case 3789:
case 3091:
case 3026:
case 168:
case 1265:
case 3231:
case 932:
case 3980:
case 3542:
case 3940:
case 473:
case 2010:
case 2027:
case 3219:
case 441:
case 3969:
case 1042:
case 423:
case 735:
case 2382:
case 3268:
case 2825:
case 1922:
case 2208:
case 249:
case 3051:
case 1927:
case 3270:
case 3707:
case 624:
case 3927:
case 1698:
case 2305:
case 1250:
case 2106:
case 3608:
case 1756:
case 3236:
case 113:
case 2379:
case 3732:
case 1848:
case 2004:
case 2061:
case 1415:
case 1497:
case 2517:
case 796:
case 63:
case 3555:
case 202:
case 1062:
case 1275:
case 2353:
case 2069:
case 1491:
case 2544:
case 1364:
case 896:
case 2465:
case 2309:
case 2838:
case 589:
case 3188:
case 3672:
case 739:
case 3221:
case 1235:
case 81:
case 215:
case 2792:
case 3356:
case 2631:
case 3521:
case 2770:
case 753:
case 3142:
case 2499:
case 2035:
case 3901:
case 779:
case 1724:
case 176:
case 1780:
case 374:
case 789:
case 1977:
case 3108:
case 3361:
case 1070:
case 804:
case 583:
case 3225:
case 2545:
case 1056:
case 1595:
case 784:
case 1336:
case 1049:
case 2148:
case 2605:
case 3483:
case 1150:
case 903:
case 3423:
case 556:
case 195:
case 2894:
case 14:
case 1096:
case 2987:
case 1299:
case 474:
case 3333:
case 3217:
case 2040:
case 2445:
case 2817:
case 3223:
case 1601:
case 3684:
case 2944:
case 3457:
case 3255:
case 2882:
case 3420:
case 3000:
case 1396:
case 1786:
case 1027:
case 2267:
case 1763:
case 2230:
case 3653:
case 1398:
case 595:
case 3107:
case 248:
case 271:
case 2760:
case 3380:
case 889:
case 1426:
case 3106:
case 3477:
case 3728:
case 876:
case 3754:
case 3466:
case 1824:
case 1492:
case 2866:
case 3882:
case 3860:
case 3704:
case 809:
case 3753:
case 1469:
case 2530:
case 2365:
case 3808:
case 1862:
case 2785:
case 731:
case 2643:
case 3150:
case 568:
case 592:
case 2109:
case 493:
case 2000:
case 1217:
case 944:
case 2005:
case 3489:
case 2388:
case 3362:
case 3182:
case 1376:
case 2871:
case 2175:
case 3417:
case 2480:
case 3133:
case 4019:
case 3592:
case 1508:
case 2352:
case 238:
case 1429:
case 1384:
case 3629:
case 629:
case 3035:
case 2191:
case 1570:
case 1933:
case 50:
case 3312:
case 2056:
case 3982:
case 3470:
case 458:
case 2752:
case 4030:
case 681:
case 407:
case 3669:
case 222:
case 1035:
case 2464:
case 2521:
case 2983:
case 3235:
case 1283:
case 3782:
case 2331:
case 2665:
case 484:
case 1630:
case 1708:
case 2448:
case 685:
case 1882:
case 1627:
case 820:
case 1674:
case 1171:
case 2533:
case 261:
case 1172:
case 135:
case 1754:
case 3318:
case 2872:
case 979:
case 3523:
case 821:
case 2700:
case 2183:
case 1723:
case 3472:
case 2603:
case 1152:
case 3988:
case 920:
case 1739:
case 2511:
case 2030:
case 3909:
case 3587:
case 1061:
case 179:
case 2593:
case 1425:
case 2144:
case 1643:
case 2029:
case 2098:
case 1884:
case 3730:
case 3652:
case 3916:
case 3403:
case 1735:
case 2677:
case 3795:
case 3351:
case 402:
case 3437:
case 1679:
case 949:
case 856:
case 1960:
case 2416:
case 1480:
case 1718:
case 1974:
case 3199:
case 1210:
case 3884:
case 2994:
case 1715:
case 1153:
case 2642:
case 3785:
case 488:
case 3833:
case 3586:
case 941:
case 2497:
case 395:
case 1717:
case 445:
case 2490:
case 1064:
case 3571:
case 816:
case 3759:
case 2087:
case 2581:
case 2913:
case 1000:
case 2065:
case 2698:
case 2846:
case 1071:
case 1967:
case 2219:
case 1112:
case 3804:
case 849:
case 806:
case 2281:
case 335:
case 839:
case 1422:
case 2274:
case 2094:
case 3814:
case 3100:
case 3486:
case 3863:
case 2647:
case 3097:
case 1640:
case 2355:
case 2022:
case 590:
case 2754:
case 7:
case 2702:
case 4:
case 2378:
case 2956:
case 2921:
case 2884:
case 367:
case 2589:
case 3061:
case 539:
case 3013:
case 3328:
case 3677:
case 2488:
case 1820:
case 3431:
case 588:
case 587:
case 2477:
case 1632:
case 3450:
case 2586:
case 4095:
case 78:
case 760:
case 919:
case 3360:
case 2167:
case 31:
case 329:
case 1986:
case 3566:
case 2313:
case 3487:
case 965:
case 2823:
case 1498:
case 1431:
case 3722:
case 1495:
case 2169:
case 1245:
case 3315:
case 3999:
case 398:
case 3287:
case 3599:
case 2447:
case 989:
case 1145:
case 3094:
case 1059:
case 611:
case 1611:
case 3985:
case 3839:
case 2129:
case 504:
case 598:
case 1310:
case 1714:
case 1446:
case 3115:
case 1383:
case 1980:
case 1356:
case 2670:
case 862:
case 2782:
case 2897:
case 1262:
case 130:
case 1149:
case 2980:
case 3118:
case 2689:
case 2764:
case 1082:
case 2572:
case 425:
case 1815:
case 282:
case 885:
case 1547:
case 3843:
case 297:
case 1201:
case 4069:
case 2460:
case 3770:
case 3630:
case 3757:
case 1912:
case 3011:
case 2141:
case 2001:
case 3174:
case 549:
case 2573:
case 1490:
case 3550:
case 1304:
case 1915:
case 2863:
case 2597:
case 2137:
case 785:
case 2073:
case 2261:
case 516:
case 1951:
case 2:
case 2325:
case 2783:
case 3663:
case 2016:
case 2360:
case 1494:
case 1113:
case 2971:
case 2962:
case 2893:
case 2284:
case 211:
case 108:
case 930:
case 1287:
case 2433:
case 456:
case 379:
case 152:
case 3170:
case 2828:
case 951:
case 2669:
case 3155:
case 414:
case 3976:
case 2060:
case 252:
case 608:
case 2923:
case 3646:
case 1825:
case 967:
case 1453:
case 212:
case 626:
case 1668:
case 1290:
case 3917:
case 3434:
case 2150:
case 3171:
case 189:
case 1972:
case 1571:
case 3955:
case 3088:
case 2097:
case 2048:
case 737:
case 2071:
case 3443:
case 3714:
case 3111:
case 870:
case 3220:
case 2139:
case 847:
case 1485:
case 2930:
case 2720:
case 2745:
case 1864:
case 3239:
case 597:
case 1014:
case 745:
case 2672:
case 1313:
case 1095:
case 1434:
case 452:
case 925:
case 3945:
case 3257:
case 2454:
case 978:
case 2567:
case 12:
case 818:
case 2034:
case 1784:
case 3744:
case 2928:
case 1371:
case 1493:
case 3099:
case 2920:
case 3367:
case 4074:
case 1443:
case 1870:
case 1140:
case 3249:
case 267:
case 1701:
case 1034:
case 1307:
case 1526:
case 3459:
case 3631:
case 645:
case 2636:
case 2566:
case 3297:
case 3358:
case 1965:
case 1424:
case 383:
case 2103:
case 998:
case 1175:
case 2101:
case 73:
case 1607:
case 2359:
case 3596:
case 3246:
case 3936:
case 1530:
case 45:
case 1872:
case 850:
case 1591:
case 3101:
case 857:
case 2384:
case 3336:
case 1200:
case 2249:
case 3914:
case 3425:
case 3661:
case 740:
case 1005:
case 1476:
case 79:
case 2041:
case 1875:
case 937:
case 593:
case 3044:
case 3750:
case 3324:
case 694:
case 865:
case 2134:
case 2989:
case 2621:
case 1461:
case 2756:
case 3755:
case 1073:
case 2075:
case 2192:
case 2653:
case 1516:
case 1215:
case 381:
case 2024:
case 1745:
case 3578:
case 3536:
case 3064:
case 3406:
case 971:
case 3045:
case 1737:
case 1616:
case 1085:
case 884:
case 2528:
case 4000:
case 1233:
case 1302:
case 1644:
case 3837:
case 1944:
case 4017:
case 1612:
case 642:
case 172:
case 1199:
case 767:
case 3040:
case 495:
case 2819:
case 2125:
case 1069:
case 3232:
case 3654:
case 221:
case 936:
case 699:
case 69:
case 2548:
case 3612:
case 3121:
case 2421:
case 1186:
case 3245:
case 1608:
case 3384:
case 2991:
case 3906:
case 2683:
case 1359:
case 1987:
case 1578:
case 1894:
case 1816:
case 2418:
case 2007:
case 114:
case 2685:
case 981:
case 1081:
case 3962:
case 1100:
case 36:
case 582:
case 958:
case 3301:
case 567:
case 3194:
case 319:
case 3252:
case 2409:
case 2879:
case 1450:
case 546:
case 1878:
case 142:
case 158:
case 1769:
case 952:
case 2600:
case 2739:
case 3502:
case 1952:
case 606:
case 3294:
case 1127:
case 1567:
case 2160:
case 2165:
case 3269:
case 2466:
case 1837:
case 3320:
case 639:
case 507:
case 2298:
case 3758:
case 3081:
case 1651:
case 2233:
case 1683:
case 1930:
case 3657:
case 3374:
case 3224:
case 2623:
case 310:
case 788:
case 1110:
case 1055:
case 2904:
case 3147:
case 3180:
case 434:
case 1136:
case 1311:
case 1105:
case 3049:
case 3405:
case 1013:
case 3627:
case 1411:
case 1975:
case 701:
case 3778:
case 2542:
case 2343:
case 2935:
case 3453:
case 858:
case 4057:
case 693:
case 64:
case 2276:
case 3366:
case 2668:
case 2011:
case 2829:
case 1867:
case 24:
case 4060:
case 2124:
case 973:
case 1522:
case 153:
case 1125:
case 120:
case 2503:
case 2554:
case 1120:
case 93:
case 2519:
case 4083:
case 2026:
case 2801:
case 3379:
case 1844:
case 298:
case 1719:
case 1470:
case 3165:
case 1452:
case 4070:
case 1703:
case 115:
case 1637:
case 1865:
case 1592:
case 3683:
case 2296:
case 1501:
case 4089:
case 1979:
case 3543:
case 956:
case 1808:
case 3703:
case 3811:
case 2364:
case 134:
case 1502:
case 2889:
case 3846:
case 309:
case 328:
case 557:
case 2020:
case 2999:
case 3867:
case 3430:
case 2680:
case 3548:
case 3375:
case 333:
case 1776:
case 3708:
case 3465:
case 2242:
case 1610:
case 3540:
case 3738:
case 2452:
case 3070:
case 435:
case 1155:
case 1620:
case 890:
case 1781:
case 2638:
case 3197:
case 2336:
case 2107:
case 3376:
case 3686:
case 2892:
case 2370:
case 396:
case 1484:
case 1890:
case 1294:
case 1934:
case 868:
case 1295:
case 3546:
case 3971:
case 614:
case 2658:
case 3925:
case 3625:
case 3418:
case 3731:
case 2186:
case 3042:
case 852:
case 2505:
case 3590:
case 3771:
case 3632:
case 3193:
case 199:
case 1474:
case 2659:
case 3569:
case 1413:
case 3363:
case 1029:
case 1173:
case 2912:
case 656:
case 1709:
case 2639:
case 2809:
case 756:
case 3878:
case 1458:
case 959:
case 3401:
case 812:
case 657:
case 4056:
case 682:
case 634:
case 1017:
case 3065:
case 2339:
case 566:
case 0:
case 3968:
case 1534:
case 2804:
case 3494:
case 3050:
case 3272:
case 1203:
case 2979:
case 1317:
case 2275:
case 1430:
case 2606:
case 2390:
case 3908:
case 2206:
case 492:
case 1089:
case 1764:
case 1151:
case 883:
case 2609:
case 2708:
case 2861:
case 457:
case 1602:
case 1031:
case 2099:
case 673:
case 3767:
case 2308:
case 2730:
case 1794:
case 1361:
case 38:
case 1626:
case 2949:
case 490:
case 1901:
case 3879:
case 3063:
case 3281:
case 1684:
case 2816:
case 2748:
case 1204:
case 391:
case 3821:
case 1267:
case 270:
case 2853:
case 3250:
case 2575:
case 3416:
case 2273:
case 3001:
case 2869:
case 475:
case 1261:
case 2441:
case 1999:
case 2266:
case 1251:
case 1478:
case 2003:
case 151:
case 2678:
case 1165:
case 2179:
case 2710:
case 1736:
case 1160:
case 551:
case 139:
case 819:
case 2584:
case 1521:
case 1390:
case 1790:
case 4009:
case 3229:
case 23:
case 1897:
case 3195:
case 3682:
case 3095:
case 1742:
case 1775:
case 3635:
case 1141:
case 3577:
case 3801:
case 1517:
case 3798:
case 1033:
case 1954:
case 442:
case 2294:
case 3743:
case 2556:
case 506:
case 953:
case 1600:
case 1256:
case 3008:
case 2473:
case 1902:
case 3885:
case 798:
case 2986:
case 1731:
case 3126:
case 2406:
case 2615:
case 2981:
case 430:
case 750:
case 1045:
case 817:
case 528:
case 2121:
case 2758:
case 2534:
case 3673:
case 1755:
case 3151:
case 175:
case 3441:
case 1889:
case 3966:
case 1327:
case 3560:
case 3114:
case 3582:
case 526:
case 2590:
case 1438:
case 966:
case 1433:
case 1184:
case 2541:
case 2922:
case 3292:
case 671:
case 1830:
case 1316:
case 1805:
case 408:
case 1117:
case 3756:
case 2562:
case 542:
case 278:
case 1022:
case 1358:
case 1804:
case 404:
case 2888:
case 2974:
case 3510:
case 1122:
case 1842:
case 1052:
case 208:
case 3834:
case 3347:
case 3913:
case 1496:
case 3623:
case 356:
case 3996:
case 3439:
case 385:
case 3342:
case 275:
case 2563:
case 2439:
case 2570:
case 61:
case 2386:
case 2799:
case 3745:
case 709:
case 2033:
case 1873:
case 3296:
case 1237:
case 976:
case 184:
case 384:
case 1615:
case 1730:
case 388:
case 1324:
case 499:
case 3137:
case 3332:
case 1969:
case 3537:
case 993:
case 786:
case 2734:
case 3007:
case 2397:
case 2622:
case 3404:
case 880:
case 3978:
case 3944:
case 3809:
case 372:
case 3898:
case 3176:
case 2898:
case 1747:
case 881:
case 1449:
case 3381:
case 3974:
case 3076:
case 2648:
case 3640:
case 1700:
case 2917:
case 4014:
case 2349:
case 999:
case 413:
case 30:
case 171:
case 3711:
case 1372:
case 3816:
case 323:
case 2635:
case 946:
case 2002:
case 641:
case 730:
case 3280:
case 3552:
case 3475:
case 2492:
case 3206:
case 562:
case 2314:
case 1716:
case 2221:
case 3392:
case 638:
case 3764:
case 2132:
case 3997:
case 3585:
case 3840:
case 1341:
case 591:
case 2402:
case 3189:
case 823:
case 2832:
case 3606:
case 1710:
case 3015:
case 2654:
case 3387:
case 1350:
case 1334:
case 2255:
case 811:
case 1822:
case 2660:
case 1296:
case 2676:
case 517:
case 3551:
case 3122:
case 2231:
case 3826:
case 2461:
case 3317:
case 1382:
case 3535:
case 2874:
case 276:
case 3602:
case 128:
case 119:
case 1926:
case 3233:
case 422:
case 1532:
case 2948:
case 2765:
case 3915:
case 3259:
case 1026:
case 501:
case 1984:
case 3783:
case 2845:
case 519:
case 3526:
case 3254:
case 341:
case 2895:
case 3396:
case 3314:
case 2620:
case 3006:
case 2926:
case 214:
case 2017:
case 1552:
case 765:
case 4006:
case 3310:
case 1771:
case 3415:
case 2347:
case 3261:
case 3639:
case 3850:
case 3438:
case 2058:
case 307:
case 187:
case 3687:
case 2504:
case 2138:
case 1278:
case 2289:
case 4007:
case 3157:
case 2086:
case 2200:
case 3615:
case 848:
case 1861:
case 609:
case 213:
case 3009:
case 3277:
case 3638:
case 743:
case 3619:
case 3620:
case 3957:
case 1932:
case 1859:
case 1589:
case 1937:
case 1360:
case 1721:
case 1078:
case 2182:
case 54:
case 2489:
case 4046:
case 538:
case 29:
case 3643:
case 2902:
case 3104:
case 3797:
case 1394:
case 67:
case 1460:
case 1286:
case 3665:
case 3928:
case 2317:
case 478:
case 2711:
case 833:
case 1351:
case 2629:
case 3421:
case 82:
case 2797:
case 2881:
case 3039:
case 2927:
case 3419:
case 2876:
case 1649:
case 104:
case 1544:
case 687:
case 132:
case 3202:
case 1075:
case 1185:
case 3397:
case 2714:
case 781:
case 2786:
case 1393:
case 2135:
case 2453:
case 882:
case 4054:
case 1579:
case 617:
case 1798:
case 2806:
case 2389:
case 3436:
case 535:
case 665:
case 3482:
case 2820:
case 2385:
case 1525:
case 1693:
case 521:
case 2911:
case 803:
case 2419:
case 2795:
case 3173:
case 2727:
case 296:
case 2964:
case 3110:
case 156:
case 1639:
case 77:
case 1863:
case 80:
case 3484:
case 2995:
case 3557:
case 1560:
case 1996:
case 4003:
case 3970:
case 1734:
case 505:
case 41:
case 1519:
case 418:
case 2159:
case 4032:
case 411:
case 1397:
case 1614:
case 1940:
case 3979:
case 2835:
case 3624:
case 3525:
case 3950:
case 1795:
case 2793:
case 3872:
case 1128:
case 3098:
case 57:
case 2617:
case 888:
case 3156:
case 2330:
case 2509:
case 1665:
case 3086:
case 1752:
case 1983:
case 1766:
case 1076:
case 841:
case 4025:
case 1833:
case 3896:
case 1257:
case 3422:
case 3662:
case 2198:
case 2354:
case 2580:
case 1947:
case 2194:
case 2557:
case 1330:
case 2245:
case 2728:
case 131:
case 2644:
case 227:
case 2321:
case 695:
case 4033:
case 2537:
case 1232:
case 1273:
case 4043:
case 776:
case 1899:
case 65:
case 1198:
case 2301:
case 1404:
case 3215:
case 496:
case 1631:
case 2285:
case 3468:
case 4047:
case 3124:
case 1760:
case 2750:
case 1368:
case 545:
case 3580:
case 926:
case 2531:
case 522:
case 1869:
case 3607:
case 1191:
case 1921:
case 3670:
case 3696:
case 2031:
case 401:
case 183:
case 2217:
case 2263:
case 2063:
case 2840:
case 1389:
case 18:
case 1981:
case 2264:
case 2814:
case 537:
case 494:
case 1229:
case 2108:
case 727:
case 2163:
case 2431:
case 773:
case 3043:
case 3440:
case 1427:
case 2755:
case 3346:
case 1677:
case 1773:
case 480:
case 1083:
case 1597:
case 1308:
case 1419:
case 3066:
case 612:
case 1146:
case 1529:
case 1585:
case 1242:
case 1949:
case 2950:
case 3005:
case 1633:
case 1860:
case 3369:
case 3211:
case 455:
case 1162:
case 4020:
case 1883:
case 1006:
case 1131:
case 4094:
case 2051:
case 51:
case 1891:
case 1166:
case 1409:
case 2724:
case 2393:
case 2251:
case 2326:
case 1091:
case 648:
case 378:
case 1116:
case 3710:
case 2315:
case 1725:
case 3271:
case 2361:
case 3382:
case 2078:
case 3037:
case 1423:
case 2941:
case 1749:
case 3961:
case 684:
case 1456:
case 3159:
case 107:
case 3952:
case 1138:
case 3975:
case 2435:
case 3965:
case 755:
case 2936:
case 1104:
case 3025:
case 3866:
case 1001:
case 1746:
case 203:
case 2290:
case 1566:
case 145:
case 1818:
case 3148:
case 2675:
case 2858:
case 2634:
case 2656:
case 1992:
case 3874:
case 1638:
case 508:
case 3859:
case 1849:
case 1106:
case 650:
case 1412:
case 2238:
case 3398:
case 196:
case 3289:
case 3716:
case 2162:
case 1518:
case 898:
case 994:
case 1855:
case 3517:
case 1838:
case 1687:
case 293:
case 2195:
case 861:
case 3087:
case 2253:
case 1777:
case 472:
case 2857:
case 89:
case 1246:
case 836:
case 284:
case 1060:
case 3828:
case 3529:
case 2827:
case 834:
case 2396:
case 1743:
case 3395:
case 2729:
case 797:
case 622:
case 2547:
case 393:
case 1227:
case 3617:
case 710:
case 1094:
case 2050:
case 961:
case 894:
case 180:
case 1997:
case 4051:
case 1021:
case 1363:
case 2459:
case 790:
case 911:
case 1462:
case 1858:
case 2303:
case 2781:
case 2120:
case 1846:
case 349:
case 1663:
case 653:
case 3391:
case 3240:
case 295:
case 2663:
case 689:
case 2812:
case 2118:
case 11:
case 3604:
case 3449:
case 3760:
case 1362:
case 3306:
case 1836:
case 2794:
case 3579:
case 2180:
case 1320:
case 2691:
case 3393:
case 800:
case 1176:
case 2951:
case 3681:
case 2436:
case 2934:
case 3371:
case 4034:
case 3544:
case 2762:
case 3504:
case 1420:
case 2340:
case 70:
case 757:
case 1259:
case 1194:
case 3930:
case 439:
case 3574:
case 2467:
case 2811:
case 3162:
case 3019:
case 2578:
case 825:
case 3123:
case 3733:
case 129:
case 3321:
case 62:
case 357:
case 2651:
case 1466:
case 2877:
case 1733:
case 294:
case 3561:
case 3780:
case 3152:
case 415:
case 2847:
case 1785:
case 3062:
case 1840:
case 210:
case 1223:
case 3675:
case 1207:
case 613:
case 3208:
case 2943:
case 1435:
case 375:
case 3773:
case 2258:
case 463:
case 814:
case 3003:
case 3057:
case 3600:
case 1772:
case 3991:
case 3339:
case 1586:
case 3899:
case 1923:
case 1599:
case 2997:
case 4016:
case 4040:
case 3724:
case 810:
case 3244:
case 558:
case 2831:
case 1685:
case 3530:
case 1748:
case 561:
case 3856:
case 955:
case 3480:
case 389:
case 3871:
case 241:
case 1581:
case 1139:
case 117:
case 2297:
case 2946:
case 3564:
case 1929:
case 1277:
case 4023:
case 1011:
case 231:
case 1906:
case 133:
case 1696:
case 1337:
case 3817:
case 4021:
case 1205:
case 3078:
case 3660:
case 2404:
case 3810:
case 1036:
case 2203:
case 2112:
case 3735:
case 3734:
case 3499:
case 4044:
case 559:
case 1727:
case 1847:
case 3288:
case 1007:
case 2925:
case 1066:
case 2616:
case 3234:
case 3338:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1644598801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,];
var gg_b = "1644598801/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
