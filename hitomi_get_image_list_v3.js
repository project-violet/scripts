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
case 288:
case 3452:
case 2521:
case 3678:
case 1133:
case 486:
case 2562:
case 3861:
case 2610:
case 3663:
case 2972:
case 2693:
case 3428:
case 1008:
case 837:
case 2908:
case 2843:
case 868:
case 1496:
case 2966:
case 3722:
case 2089:
case 1479:
case 15:
case 1568:
case 2475:
case 4016:
case 2533:
case 2128:
case 1211:
case 239:
case 2589:
case 1151:
case 1060:
case 3925:
case 2184:
case 2872:
case 646:
case 1185:
case 1300:
case 780:
case 3825:
case 1932:
case 447:
case 1290:
case 930:
case 1550:
case 689:
case 1631:
case 3208:
case 4085:
case 2073:
case 1694:
case 2672:
case 3762:
case 2853:
case 3277:
case 2677:
case 2359:
case 757:
case 3751:
case 493:
case 2712:
case 1174:
case 3837:
case 807:
case 899:
case 3965:
case 1547:
case 1607:
case 3583:
case 4028:
case 3071:
case 257:
case 3800:
case 2519:
case 429:
case 3600:
case 954:
case 2246:
case 1826:
case 4057:
case 3856:
case 2993:
case 2574:
case 1997:
case 69:
case 706:
case 145:
case 1461:
case 1066:
case 2557:
case 280:
case 3391:
case 1868:
case 3011:
case 1059:
case 1933:
case 1972:
case 798:
case 3996:
case 564:
case 2765:
case 616:
case 1722:
case 3374:
case 3167:
case 3480:
case 2656:
case 206:
case 2139:
case 3283:
case 4033:
case 2978:
case 1356:
case 2895:
case 3456:
case 4006:
case 3287:
case 3863:
case 2245:
case 3336:
case 2510:
case 3396:
case 3385:
case 3721:
case 3878:
case 1166:
case 2788:
case 526:
case 1771:
case 1052:
case 3244:
case 2429:
case 2844:
case 3001:
case 3950:
case 2718:
case 666:
case 1239:
case 2940:
case 747:
case 1183:
case 3333:
case 2786:
case 3529:
case 1986:
case 1202:
case 914:
case 2390:
case 2806:
case 2287:
case 2230:
case 266:
case 451:
case 1636:
case 823:
case 955:
case 1119:
case 2989:
case 651:
case 60:
case 1194:
case 202:
case 1135:
case 2897:
case 937:
case 2408:
case 1130:
case 2771:
case 877:
case 1873:
case 3490:
case 2094:
case 1099:
case 377:
case 140:
case 3500:
case 2869:
case 1232:
case 452:
case 3886:
case 3944:
case 3930:
case 3851:
case 4069:
case 3747:
case 2808:
case 2240:
case 3855:
case 17:
case 1089:
case 587:
case 3398:
case 3450:
case 3737:
case 3697:
case 2713:
case 3623:
case 3958:
case 805:
case 2997:
case 2504:
case 1168:
case 766:
case 3991:
case 3801:
case 969:
case 1012:
case 2764:
case 2912:
case 75:
case 1567:
case 350:
case 2365:
case 1782:
case 1863:
case 2954:
case 2920:
case 1364:
case 755:
case 3424:
case 466:
case 698:
case 1742:
case 1394:
case 3746:
case 1369:
case 1603:
case 2582:
case 4051:
case 3214:
case 1920:
case 1177:
case 944:
case 3993:
case 2165:
case 1706:
case 117:
case 825:
case 2578:
case 3883:
case 2995:
case 2430:
case 834:
case 853:
case 2525:
case 657:
case 185:
case 2202:
case 1053:
case 1126:
case 422:
case 2962:
case 925:
case 3750:
case 3098:
case 311:
case 711:
case 1260:
case 3260:
case 3025:
case 3104:
case 3939:
case 2332:
case 3349:
case 826:
case 1231:
case 1666:
case 1430:
case 3319:
case 2747:
case 3791:
case 3876:
case 4020:
case 3717:
case 2018:
case 1051:
case 407:
case 2453:
case 895:
case 483:
case 958:
case 624:
case 1067:
case 1525:
case 2111:
case 10:
case 530:
case 3557:
case 3650:
case 3460:
case 1912:
case 2252:
case 3211:
case 1710:
case 3318:
case 1024:
case 510:
case 3023:
case 1731:
case 392:
case 1515:
case 1240:
case 2415:
case 2774:
case 719:
case 904:
case 1852:
case 489:
case 2296:
case 1355:
case 3508:
case 3216:
case 846:
case 1400:
case 1370:
case 3645:
case 1276:
case 1904:
case 360:
case 2116:
case 1437:
case 53:
case 1955:
case 247:
case 273:
case 229:
case 2275:
case 2323:
case 3432:
case 424:
case 3545:
case 4027:
case 3543:
case 3179:
case 2527:
case 2366:
case 2424:
case 3768:
case 2900:
case 2362:
case 1393:
case 3122:
case 3840:
case 769:
case 3471:
case 1847:
case 3967:
case 3674:
case 3761:
case 213:
case 2087:
case 109:
case 3897:
case 2652:
case 3654:
case 3185:
case 2789:
case 2616:
case 3259:
case 1442:
case 3467:
case 2013:
case 862:
case 2714:
case 2529:
case 2709:
case 2785:
case 3858:
case 3116:
case 1806:
case 2818:
case 3074:
case 2515:
case 3699:
case 1172:
case 358:
case 3256:
case 2186:
case 2219:
case 3621:
case 3726:
case 3701:
case 3261:
case 1856:
case 163:
case 3593:
case 3002:
case 2399:
case 866:
case 135:
case 3940:
case 2437:
case 3757:
case 1296:
case 2313:
case 636:
case 975:
case 278:
case 2909:
case 970:
case 126:
case 767:
case 2125:
case 2398:
case 3979:
case 2591:
case 1562:
case 1892:
case 2827:
case 1147:
case 1132:
case 3017:
case 2570:
case 1358:
case 3527:
case 2669:
case 3437:
case 1034:
case 1079:
case 3941:
case 2006:
case 1676:
case 729:
case 1244:
case 1324:
case 3520:
case 3670:
case 1638:
case 62:
case 3414:
case 2615:
case 2738:
case 1176:
case 3620:
case 246:
case 1918:
case 3477:
case 865:
case 1551:
case 4019:
case 3765:
case 991:
case 54:
case 528:
case 454:
case 369:
case 686:
case 1794:
case 3787:
case 3688:
case 18:
case 1339:
case 763:
case 2236:
case 1648:
case 642:
case 1924:
case 1371:
case 2273:
case 84:
case 453:
case 588:
case 3631:
case 1812:
case 81:
case 1611:
case 3766:
case 3998:
case 210:
case 2315:
case 1886:
case 388:
case 179:
case 1695:
case 607:
case 3191:
case 2770:
case 728:
case 2260:
case 1003:
case 404:
case 1228:
case 2251:
case 1673:
case 2471:
case 283:
case 413:
case 555:
case 2123:
case 2435:
case 1157:
case 2083:
case 2012:
case 3672:
case 3250:
case 3531:
case 297:
case 492:
case 3926:
case 2646:
case 1093:
case 984:
case 1454:
case 538:
case 1330:
case 1748:
case 1830:
case 830:
case 2005:
case 2291:
case 3704:
case 1989:
case 1316:
case 2279:
case 111:
case 2674:
case 3710:
case 1922:
case 859:
case 3755:
case 148:
case 3571:
case 2944:
case 3067:
case 2905:
case 2725:
case 4086:
case 631:
case 3975:
case 3058:
case 4050:
case 2756:
case 3019:
case 3199:
case 63:
case 2731:
case 525:
case 3212:
case 425:
case 3146:
case 1213:
case 3611:
case 759:
case 2699:
case 1923:
case 1703:
case 4068:
case 3184:
case 398:
case 980:
case 3705:
case 3641:
case 2470:
case 1860:
case 3647:
case 2932:
case 3498:
case 999:
case 1604:
case 1680:
case 1505:
case 2517:
case 2798:
case 2142:
case 306:
case 2338:
case 1857:
case 2257:
case 2179:
case 138:
case 516:
case 1171:
case 2783:
case 1991:
case 1835:
case 4010:
case 1746:
case 2666:
case 1308:
case 921:
case 2795:
case 2355:
case 3230:
case 1526:
case 3815:
case 730:
case 2642:
case 4022:
case 2668:
case 2620:
case 96:
case 2719:
case 3405:
case 1237:
case 1874:
case 1376:
case 2618:
case 3000:
case 2356:
case 1687:
case 1065:
case 2727:
case 3813:
case 1754:
case 2226:
case 4066:
case 3246:
case 468:
case 641:
case 3114:
case 1594:
case 2943:
case 1708:
case 1410:
case 1113:
case 248:
case 3317:
case 3454:
case 3513:
case 775:
case 1023:
case 1016:
case 3411:
case 544:
case 2536:
case 1819:
case 3087:
case 78:
case 2679:
case 2811:
case 2678:
case 2162:
case 2754:
case 3321:
case 2019:
case 1973:
case 362:
case 3274:
case 3209:
case 473:
case 4065:
case 1484:
case 983:
case 3152:
case 1810:
case 2190:
case 760:
case 3034:
case 351:
case 1345:
case 2537:
case 1491:
case 3207:
case 2984:
case 286:
case 532:
case 3136:
case 28:
case 2553:
case 2271:
case 416:
case 2882:
case 3202:
case 193:
case 3412:
case 3749:
case 1229:
case 1431:
case 2178:
case 2411:
case 3720:
case 2146:
case 3042:
case 2445:
case 3616:
case 3874:
case 3455:
case 688:
case 2496:
case 3423:
case 563:
case 2505:
case 51:
case 916:
case 949:
case 2888:
case 2431:
case 3584:
case 39:
case 1460:
case 4059:
case 2732:
case 254:
case 200:
case 1163:
case 2054:
case 1884:
case 3715:
case 1071:
case 2633:
case 4073:
case 2833:
case 1139:
case 3552:
case 1261:
case 2999:
case 125:
case 3252:
case 90:
case 2068:
case 3729:
case 2583:
case 313:
case 2404:
case 1224:
case 2044:
case 2161:
case 4071:
case 27:
case 3170:
case 2555:
case 2575:
case 2060:
case 3388:
case 3894:
case 2241:
case 1418:
case 1576:
case 1701:
case 3472:
case 1728:
case 3821:
case 3700:
case 1652:
case 3495:
case 3962:
case 2312:
case 876:
case 2095:
case 1804:
case 1333:
case 727:
case 1781:
case 2426:
case 2877:
case 237:
case 2124:
case 3100:
case 3504:
case 1764:
case 585:
case 4076:
case 2903:
case 344:
case 3887:
case 4045:
case 2289:
case 2069:
case 2581:
case 3463:
case 55:
case 985:
case 2985:
case 1599:
case 2801:
case 1815:
case 2081:
case 3805:
case 1427:
case 2661:
case 2878:
case 1747:
case 106:
case 1844:
case 3931:
case 149:
case 3233:
case 2256:
case 2192:
case 2640:
case 2703:
case 3302:
case 3425:
case 1821:
case 1256:
case 700:
case 1495:
case 744:
case 1730:
case 2334:
case 3397:
case 2851:
case 3890:
case 112:
case 536:
case 3160:
case 1354:
case 3307:
case 884:
case 136:
case 2248:
case 2140:
case 2974:
case 2110:
case 1610:
case 504:
case 3478:
case 2351:
case 1377:
case 1692:
case 89:
case 141:
case 527:
case 3050:
case 2187:
case 2848:
case 961:
case 2114:
case 2067:
case 1871:
case 1297:
case 550:
case 3759:
case 1941:
case 2508:
case 40:
case 1225:
case 968:
case 3698:
case 731:
case 4003:
case 1167:
case 1992:
case 3485:
case 4049:
case 3648:
case 2022:
case 3907:
case 3664:
case 1585:
case 2967:
case 1686:
case 1325:
case 3089:
case 65:
case 1837:
case 2971:
case 3526:
case 1741:
case 2342:
case 2237:
case 722:
case 2858:
case 3300:
case 1597:
case 1000:
case 2367:
case 1090:
case 57:
case 3005:
case 181:
case 1534:
case 3769:
case 319:
case 2650:
case 12:
case 3872:
case 749:
case 2716:
case 2389:
case 1616:
case 2495:
case 340:
case 2384:
case 3731:
case 1762:
case 2513:
case 3427:
case 3903:
case 821:
case 3708:
case 2579:
case 1055:
case 357:
case 3558:
case 431:
case 3568:
case 3959:
case 3877:
case 1266:
case 1974:
case 3496:
case 3763:
case 2181:
case 2032:
case 3248:
case 3798:
case 2120:
case 230:
case 3547:
case 3069:
case 1040:
case 3310:
case 2354:
case 1432:
case 844:
case 2631:
case 1598:
case 2090:
case 3846:
case 2102:
case 2635:
case 3294:
case 2108:
case 3917:
case 1259:
case 2580:
case 2088:
case 2500:
case 586:
case 1613:
case 2053:
case 3358:
case 477:
case 962:
case 3066:
case 3511:
case 4037:
case 285:
case 3869:
case 3719:
case 2991:
case 1230:
case 1875:
case 1732:
case 1511:
case 2518:
case 3284:
case 373:
case 3323:
case 119:
case 3255:
case 1407:
case 1027:
case 478:
case 3657:
case 692:
case 4043:
case 3293:
case 1914:
case 3162:
case 1618:
case 1953:
case 770:
case 3361:
case 443:
case 2720:
case 4030:
case 3512:
case 97:
case 3159:
case 1082:
case 2837:
case 2486:
case 3249:
case 2222:
case 4058:
case 3778:
case 1031:
case 1522:
case 3018:
case 3400:
case 2942:
case 1436:
case 3727:
case 1792:
case 3555:
case 2015:
case 1382:
case 635:
case 1628:
case 1641:
case 2372:
case 942:
case 2308:
case 2270:
case 24:
case 20:
case 2103:
case 2684:
case 1527:
case 2752:
case 2694:
case 3343:
case 2502:
case 3453:
case 699:
case 3693:
case 102:
case 1700:
case 3758:
case 1665:
case 615:
case 1253:
case 2333:
case 831:
case 293:
case 3215:
case 2784:
case 602:
case 2395:
case 3356:
case 655:
case 2321:
case 86:
case 3088:
case 177:
case 2990:
case 2663:
case 1669:
case 567:
case 375:
case 2330:
case 2454:
case 1537:
case 3665:
case 977:
case 1287:
case 739:
case 507:
case 1148:
case 677:
case 2608:
case 2368:
case 1934:
case 1642:
case 1317:
case 1075:
case 3972:
case 1294:
case 1045:
case 3918:
case 2176:
case 2084:
case 1502:
case 2106:
case 952:
case 3841:
case 2838:
case 597:
case 529:
case 4047:
case 3579:
case 223:
case 2800:
case 1846:
case 1043:
case 2665:
case 3879:
case 3667:
case 2695:
case 946:
case 420:
case 354:
case 3573:
case 1274:
case 302:
case 2955:
case 1042:
case 2220:
case 2133:
case 240:
case 212:
case 3718:
case 1590:
case 1037:
case 3330:
case 894:
case 80:
case 1486:
case 2987:
case 2432:
case 2349:
case 540:
case 661:
case 1083:
case 3999:
case 665:
case 3032:
case 3644:
case 1498:
case 3509:
case 3072:
case 113:
case 2584:
case 234:
case 1173:
case 1520:
case 2383:
case 4011:
case 2443:
case 3845:
case 1720:
case 1122:
case 1685:
case 2376:
case 3421:
case 1799:
case 2739:
case 174:
case 1385:
case 3842:
case 76:
case 3603:
case 808:
case 94:
case 3097:
case 2701:
case 1935:
case 1098:
case 1038:
case 1622:
case 508:
case 790:
case 1473:
case 1417:
case 3253:
case 693:
case 1115:
case 779:
case 2378:
case 3482:
case 3622:
case 3632:
case 1277:
case 3953:
case 3210:
case 1209:
case 1340:
case 2630:
case 1646:
case 3927:
case 2485:
case 1677:
case 1702:
case 2773:
case 1749:
case 2627:
case 886:
case 1948:
case 207:
case 1734:
case 3239:
case 3824:
case 3075:
case 3037:
case 842:
case 159:
case 2447:
case 973:
case 1572:
case 2576:
case 2096:
case 3873:
case 263:
case 2009:
case 3902:
case 2079:
case 509:
case 1222:
case 348:
case 2865:
case 2040:
case 6:
case 3254:
case 1811:
case 2450:
case 2339:
case 565:
case 897:
case 3880:
case 2768:
case 673:
case 1249:
case 524:
case 3627:
case 3461:
case 3291:
case 169:
case 1004:
case 22:
case 29:
case 3048:
case 1500:
case 3847:
case 1310:
case 1070:
case 520:
case 3446:
case 633:
case 2346:
case 1519:
case 2802:
case 934:
case 315:
case 1020:
case 287:
case 2931:
case 799:
case 245:
case 3679:
case 2822:
case 3257:
case 3892:
case 4046:
case 3638:
case 1558:
case 1678:
case 2149:
case 3236:
case 3039:
case 875:
case 1555:
case 2585:
case 2835:
case 584:
case 192:
case 1738:
case 3163:
case 1855:
case 1247:
case 2566:
case 874:
case 2524:
case 3345:
case 1726:
case 1423:
case 1672:
case 3540:
case 2328:
case 2534:
case 2659:
case 2875:
case 265:
case 3092:
case 312:
case 2317:
case 1440:
case 3981:
case 1510:
case 2167:
case 1152:
case 1453:
case 1531:
case 794:
case 2268:
case 1862:
case 2027:
case 131:
case 295:
case 49:
case 3462:
case 394:
case 2037:
case 681:
case 2963:
case 2225:
case 3458:
case 885:
case 3371:
case 3661:
case 1635:
case 3473:
case 2821:
case 4038:
case 797:
case 46:
case 1149:
case 2675:
case 2568:
case 3875:
case 1637:
case 2300:
case 1705:
case 1619:
case 2224:
case 3200:
case 3332:
case 2326:
case 960:
case 1775:
case 1508:
case 2645:
case 401:
case 3537:
case 1682:
case 199:
case 2371:
case 3020:
case 3986:
case 2231:
case 786:
case 3843:
case 3251:
case 1387:
case 2549:
case 1214:
case 58:
case 3196:
case 3640:
case 2074:
case 2523:
case 3690:
case 3024:
case 4056:
case 2325:
case 1546:
case 2572:
case 3223:
case 2958:
case 3954:
case 3574:
case 2104:
case 4:
case 3086:
case 1848:
case 945:
case 2680:
case 214:
case 2294:
case 3380:
case 3448:
case 1180:
case 3859:
case 226:
case 2434:
case 2207:
case 1715:
case 93:
case 1770:
case 1977:
case 1574:
case 3377:
case 3694:
case 3357:
case 596:
case 299:
case 1198:
case 498:
case 2829:
case 3138:
case 543:
case 1601:
case 3970:
case 1651:
case 3596:
case 3585:
case 3292:
case 1867:
case 3503:
case 2824:
case 2045:
case 1343:
case 1506:
case 3806:
case 2866:
case 384:
case 1620:
case 3156:
case 1885:
case 2996:
case 3407:
case 2545:
case 1721:
case 464:
case 1902:
case 1191:
case 754:
case 3022:
case 16:
case 281:
case 3386:
case 2059:
case 2141:
case 2706:
case 2548:
case 751:
case 465:
case 3334:
case 1210:
case 1998:
case 920:
case 2331:
case 2707:
case 3681:
case 3475:
case 1117:
case 1384:
case 3165:
case 3807:
case 3009:
case 1717:
case 988:
case 1845:
case 3524:
case 998:
case 1879:
case 2253:
case 1465:
case 939:
case 1824:
case 3308:
case 2150:
case 1643:
case 3158:
case 1444:
case 36:
case 1217:
case 1801:
case 612:
case 3789:
case 310:
case 3176:
case 3422:
case 3575:
case 3043:
case 272:
case 2938:
case 2907:
case 33:
case 1650:
case 2826:
case 270:
case 3449:
case 334:
case 469:
case 1342:
case 298:
case 782:
case 471:
case 3378:
case 3262:
case 3982:
case 3774:
case 1524:
case 803:
case 3921:
case 1963:
case 1446:
case 2459:
case 843:
case 3733:
case 2105:
case 3195:
case 3305:
case 2922:
case 403:
case 2769:
case 2035:
case 1978:
case 218:
case 791:
case 1030:
case 2077:
case 116:
case 211:
case 3795:
case 1869:
case 923:
case 1445:
case 1713:
case 1450:
case 318:
case 3989:
case 2363:
case 1001:
case 2767:
case 638:
case 92:
case 3809:
case 3905:
case 2698:
case 1592:
case 2282:
case 277:
case 19:
case 1467:
case 1712:
case 950:
case 3360:
case 3299:
case 2280:
case 802:
case 900:
case 684:
case 1102:
case 3605:
case 1014:
case 2191:
case 3111:
case 1532:
case 74:
case 439:
case 963:
case 326:
case 534:
case 4070:
case 3442:
case 2492:
case 2396:
case 3125:
case 2540:
case 1107:
case 127:
case 855:
case 3474:
case 2201:
case 1028:
case 470:
case 1707:
case 1242:
case 3399:
case 1903:
case 1822:
case 1668:
case 333:
case 1539:
case 2805:
case 3826:
case 3314:
case 3077:
case 2274:
case 47:
case 3510:
case 2174:
case 2655:
case 3006:
case 1104:
case 3506:
case 3221:
case 2945:
case 3964:
case 1994:
case 2135:
case 1523:
case 776:
case 505:
case 3021:
case 2107:
case 1985:
case 1797:
case 3781:
case 3362:
case 2410:
case 2941:
case 2232:
case 3175:
case 1041:
case 1832:
case 3730:
case 3803:
case 3401:
case 1657:
case 4004:
case 2748:
case 1238:
case 3754:
case 1774:
case 1569:
case 1120:
case 3295:
case 523:
case 1501:
case 2625:
case 2340:
case 940:
case 2357:
case 1476:
case 1492:
case 3029:
case 878:
case 406:
case 146:
case 2118:
case 3286:
case 2708:
case 2092:
case 1679:
case 2469:
case 733:
case 656:
case 981:
case 1880:
case 603:
case 2433:
case 4013:
case 1736:
case 3041:
case 4083:
case 3222:
case 2036:
case 2831:
case 2607:
case 3258:
case 2781:
case 1021:
case 1788:
case 559:
case 1457:
case 2193:
case 1062:
case 1480:
case 3601:
case 856:
case 1944:
case 3126:
case 2522:
case 4084:
case 1061:
case 267:
case 654:
case 1165:
case 225:
case 2893:
case 3420:
case 34:
case 1489:
case 2681:
case 25:
case 2314:
case 1947:
case 1833:
case 3822:
case 2846:
case 1658:
case 215:
case 3896:
case 3205:
case 2550:
case 1952:
case 3325:
case 3626:
case 1654:
case 2737:
case 1455:
case 444:
case 3740:
case 1632:
case 3607:
case 3788:
case 50:
case 2347:
case 535:
case 1381:
case 1587:
case 870:
case 3625:
case 556:
case 160:
case 720:
case 599:
case 1395:
case 2777:
case 2413:
case 3346:
case 3123:
case 3499:
case 423:
case 7:
case 228:
case 3709:
case 414:
case 2163:
case 2749:
case 3267:
case 3521:
case 2134:
case 924:
case 3370:
case 3501:
case 3272:
case 2169:
case 1072:
case 196:
case 1022:
case 3784:
case 3459:
case 332:
case 1110:
case 3635:
case 3553:
case 2466:
case 1895:
case 860:
case 2597:
case 3494:
case 255:
case 474:
case 1154:
case 710:
case 2772:
case 3901:
case 1470:
case 1913:
case 2606:
case 1073:
case 4079:
case 1556:
case 3852:
case 2386:
case 3231:
case 1306:
case 630:
case 3870:
case 1155:
case 1109:
case 1968:
case 3094:
case 611:
case 1753:
case 3920:
case 352:
case 2921:
case 2490:
case 2034:
case 482:
case 1363:
case 1518:
case 3516:
case 356:
case 2711:
case 151:
case 3587:
case 5:
case 490:
case 806:
case 2609:
case 1265:
case 1584:
case 2612:
case 674:
case 3695:
case 3:
case 1215:
case 2420:
case 2925:
case 322:
case 1996:
case 3854:
case 3802:
case 3618:
case 2569:
case 1304:
case 2605:
case 2243:
case 2676:
case 1471:
case 166:
case 947:
case 2173:
case 1087:
case 419:
case 515:
case 448:
case 3218:
case 339:
case 387:
case 79:
case 3303:
case 3936:
case 3065:
case 1983:
case 3559:
case 3447:
case 2883:
case 718:
case 2381:
case 1252:
case 1158:
case 2933:
case 409:
case 849:
case 2336:
case 2361:
case 3523:
case 723:
case 910:
case 258:
case 3655:
case 1399:
case 2864:
case 304:
case 1573:
case 566:
case 1323:
case 1048:
case 3804:
case 3595:
case 4075:
case 664:
case 221:
case 1840:
case 1124:
case 1586:
case 867:
case 327:
case 251:
case 2182:
case 1360:
case 2862:
case 974:
case 2277:
case 4072:
case 437:
case 3702:
case 3145:
case 301:
case 922:
case 1739:
case 2130:
case 3359:
case 2857:
case 3010:
case 3853:
case 107:
case 3282:
case 3866:
case 4000:
case 3118:
case 3337:
case 2613:
case 172:
case 3144:
case 1017:
case 1463:
case 487:
case 1319:
case 551:
case 2762:
case 2011:
case 3426:
case 2868:
case 3834:
case 2729:
case 1494:
case 100:
case 2259:
case 1103:
case 1807:
case 2138:
case 269:
case 735:
case 809:
case 3915:
case 21:
case 2632:
case 2969:
case 816:
case 3316:
case 3613:
case 1916:
case 3924:
case 2479:
case 1357:
case 3687:
case 964:
case 3309:
case 1270:
case 203:
case 3562:
case 3117:
case 1175:
case 396:
case 1350:
case 1751:
case 2828:
case 1796:
case 191:
case 2859:
case 1487:
case 2284:
case 2423:
case 2305:
case 2810:
case 1878:
case 1449:
case 3392:
case 4088:
case 1346:
case 3151:
case 1196:
case 3190:
case 1699:
case 1018:
case 2554:
case 1227:
case 589:
case 883:
case 2559:
case 3013:
case 3686:
case 1964:
case 1236:
case 408:
case 1246:
case 3327:
case 491:
case 2968:
case 2809:
case 1044:
case 1570:
case 591:
case 2416:
case 2474:
case 1114:
case 1969:
case 670:
case 2688:
case 1161:
case 1143:
case 4014:
case 3522:
case 1509:
case 2482:
case 1865:
case 3857:
case 2670:
case 972:
case 198:
case 1583:
case 841:
case 2171:
case 1727:
case 2425:
case 2341:
case 905:
case 557:
case 3352:
case 1917:
case 1662:
case 1533:
case 165:
case 891:
case 1516:
case 2456:
case 3676:
case 2306:
case 3812:
case 1424:
case 442:
case 3140:
case 3956:
case 435:
case 2792:
case 3073:
case 3868:
case 3213:
case 1080:
case 531:
case 2262:
case 347:
case 2935:
case 410:
case 663:
case 1483:
case 3045:
case 546:
case 959:
case 796:
case 2531:
case 715:
case 748:
case 3911:
case 341:
case 2855:
case 238:
case 3735:
case 3832:
case 3533:
case 2763:
case 1416:
case 1164:
case 3413:
case 3192:
case 3033:
case 1207:
case 2057:
case 3899:
case 547:
case 343:
case 3963:
case 1655:
case 2745:
case 1452:
case 4018:
case 2152:
case 1656:
case 2472:
case 1659:
case 190:
case 3554:
case 2901:
case 2957:
case 1925:
case 648:
case 1331:
case 3767:
case 672:
case 3675:
case 3479:
case 3149:
case 1138:
case 325:
case 2473:
case 795:
case 3582:
case 1928:
case 3589:
case 2803:
case 1286:
case 3243:
case 3943:
case 402:
case 2742:
case 3273:
case 2335:
case 2683:
case 691:
case 139:
case 771:
case 2221:
case 208:
case 3278:
case 1039:
case 1404:
case 2577:
case 1975:
case 1553:
case 338:
case 652:
case 1714:
case 236:
case 3713:
case 3530:
case 2724:
case 3124:
case 581:
case 1280:
case 1761:
case 2004:
case 1719:
case 3570:
case 2588:
case 2427:
case 3565:
case 3329:
case 1085:
case 660:
case 765:
case 1140:
case 3035:
case 1859:
case 3696:
case 3794:
case 1458:
case 3290:
case 1737:
case 2030:
case 2056:
case 3483:
case 746:
case 2980:
case 2757:
case 3556:
case 227:
case 155:
case 774:
case 1426:
case 4021:
case 1960:
case 3056:
case 363:
case 2477:
case 1772:
case 1142:
case 851:
case 2538:
case 521:
case 2528:
case 3139:
case 979:
case 2002:
case 2126:
case 1789:
case 1134:
case 3488:
case 1010:
case 3119:
case 3971:
case 67:
case 2440:
case 694:
case 2039:
case 1894:
case 2213:
case 2406:
case 2091:
case 863:
case 2157:
case 3348:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1675407601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,];
var gg_b = "1675407601/";

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
