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
case 3:
case 924:
case 2457:
case 2324:
case 3745:
case 64:
case 1450:
case 845:
case 3194:
case 2398:
case 1173:
case 2388:
case 3352:
case 1946:
case 2864:
case 0:
case 1054:
case 3536:
case 894:
case 1266:
case 1940:
case 1084:
case 2947:
case 702:
case 3382:
case 851:
case 2122:
case 849:
case 996:
case 1490:
case 3543:
case 2895:
case 607:
case 3471:
case 3165:
case 184:
case 3369:
case 3928:
case 168:
case 2315:
case 169:
case 3570:
case 1411:
case 3444:
case 1591:
case 1581:
case 510:
case 1013:
case 3812:
case 1973:
case 3994:
case 1760:
case 876:
case 1146:
case 3829:
case 2002:
case 4046:
case 250:
case 1108:
case 1766:
case 2601:
case 603:
case 2147:
case 3965:
case 1832:
case 2922:
case 710:
case 55:
case 2333:
case 1899:
case 2805:
case 1115:
case 1924:
case 2407:
case 1400:
case 799:
case 3560:
case 1448:
case 2237:
case 1230:
case 2777:
case 1035:
case 877:
case 3521:
case 222:
case 2616:
case 3791:
case 3135:
case 1243:
case 2610:
case 1347:
case 21:
case 3210:
case 2308:
case 3104:
case 75:
case 3015:
case 599:
case 598:
case 873:
case 1075:
case 2737:
case 718:
case 1124:
case 3281:
case 272:
case 1188:
case 3716:
case 4058:
case 2691:
case 1198:
case 3291:
case 2373:
case 3058:
case 2082:
case 3677:
case 241:
case 2277:
case 3426:
case 258:
case 827:
case 2092:
case 3088:
case 29:
case 3710:
case 3904:
case 3098:
case 4063:
case 913:
case 3420:
case 3935:
case 3063:
case 2651:
case 1276:
case 4024:
case 3461:
case 901:
case 3175:
case 518:
case 1322:
case 1649:
case 160:
case 3024:
case 2413:
case 3845:
case 965:
case 2593:
case 2583:
case 2723:
case 2131:
case 237:
case 1638:
case 2971:
case 763:
case 2011:
case 3229:
case 2764:
case 1603:
case 3957:
case 3348:
case 563:
case 3801:
case 2144:
case 1479:
case 3300:
case 306:
case 2795:
case 1232:
case 174:
case 968:
case 2553:
case 406:
case 2223:
case 984:
case 2931:
case 196:
case 1821:
case 832:
case 767:
case 2327:
case 2454:
case 3187:
case 2264:
case 3729:
case 1057:
case 3589:
case 3599:
case 2465:
case 2944:
case 1087:
case 2718:
case 3559:
case 2090:
case 2428:
case 3695:
case 1326:
case 567:
case 1529:
case 1127:
case 1799:
case 1789:
case 2705:
case 2161:
case 2475:
case 3380:
case 1870:
case 2274:
case 3356:
case 3674:
case 1942:
case 3386:
case 2741:
case 3532:
case 1876:
case 3851:
case 1452:
case 4027:
case 2126:
case 2503:
case 1927:
case 6:
case 2435:
case 2920:
case 44:
case 2578:
case 2205:
case 3634:
case 1331:
case 34:
case 117:
case 2774:
case 282:
case 1007:
case 2000:
case 3816:
case 3509:
case 1469:
case 1843:
case 2006:
case 4042:
case 454:
case 2241:
case 1614:
case 407:
case 1259:
case 1836:
case 491:
case 3704:
case 4070:
case 2366:
case 27:
case 3910:
case 940:
case 3735:
case 3070:
case 3151:
case 1176:
case 1682:
case 3275:
case 528:
case 3474:
case 725:
case 1493:
case 1483:
case 2826:
case 1930:
case 3546:
case 729:
case 893:
case 1224:
case 2321:
case 1827:
case 3191:
case 4076:
case 1298:
case 1367:
case 2861:
case 3181:
case 1652:
case 3916:
case 3076:
case 2635:
case 1976:
case 3204:
case 1016:
case 36:
case 3434:
case 3110:
case 552:
case 4030:
case 1136:
case 335:
case 575:
case 1669:
case 2539:
case 1724:
case 752:
case 604:
case 1594:
case 439:
case 3573:
case 813:
case 1584:
case 779:
case 3043:
case 1528:
case 657:
case 2977:
case 1970:
case 3991:
case 1798:
case 2017:
case 4043:
case 3116:
case 1010:
case 3981:
case 3754:
case 2343:
case 945:
case 1438:
case 1240:
case 824:
case 1208:
case 1966:
case 3558:
case 209:
case 3765:
case 2592:
case 1045:
case 2429:
case 621:
case 2722:
case 1233:
case 3563:
case 1403:
case 1921:
case 3728:
case 3588:
case 2552:
case 2831:
case 1679:
case 3524:
case 1602:
case 949:
case 1246:
case 3784:
case 132:
case 1001:
case 948:
case 1960:
case 3794:
case 1740:
case 874:
case 1708:
case 3423:
case 1166:
case 747:
case 50:
case 4060:
case 2654:
case 2376:
case 3464:
case 4021:
case 3622:
case 1504:
case 2222:
case 671:
case 3619:
case 3265:
case 330:
case 1535:
case 2219:
case 1478:
case 642:
case 3021:
case 570:
case 1733:
case 3945:
case 2628:
case 1121:
case 816:
case 1160:
case 2694:
case 3887:
case 2370:
case 4066:
case 1377:
case 3495:
case 1639:
case 2871:
case 3303:
case 3835:
case 3437:
case 1318:
case 1648:
case 28:
case 2550:
case 2726:
case 371:
case 630:
case 2586:
case 1159:
case 2416:
case 764:
case 4089:
case 731:
case 1815:
case 1727:
case 1587:
case 3059:
case 1417:
case 531:
case 127:
case 1597:
case 173:
case 2974:
case 2941:
case 3707:
case 2068:
case 2083:
case 1162:
case 421:
case 1959:
case 3875:
case 2481:
case 589:
case 1395:
case 785:
case 321:
case 1385:
case 2309:
case 3477:
case 788:
case 177:
case 789:
case 585:
case 1824:
case 1999:
case 1898:
case 3661:
case 2261:
case 2174:
case 3378:
case 1863:
case 3062:
case 1449:
case 1696:
case 2362:
case 1650:
case 2657:
case 1507:
case 635:
case 2819:
case 1932:
case 2185:
case 1109:
case 2195:
case 638:
case 2155:
case 2123:
case 639:
case 176:
case 3542:
case 2164:
case 3884:
case 2697:
case 3929:
case 357:
case 3368:
case 3297:
case 1690:
case 869:
case 1680:
case 3894:
case 2687:
case 3383:
case 3912:
case 2271:
case 149:
case 1012:
case 3813:
case 2118:
case 1972:
case 3644:
case 1611:
case 884:
case 3314:
case 194:
case 2995:
case 2038:
case 780:
case 3032:
case 2399:
case 1833:
case 353:
case 2231:
case 2923:
case 2401:
case 3527:
case 2003:
case 3797:
case 145:
case 3787:
case 1514:
case 3473:
case 431:
case 1484:
case 1295:
case 2326:
case 1285:
case 2209:
case 2732:
case 3609:
case 742:
case 1080:
case 2272:
case 1718:
case 809:
case 2866:
case 2097:
case 3196:
case 3703:
case 647:
case 3150:
case 3180:
case 2860:
case 1086:
case 1096:
case 3534:
case 1171:
case 1050:
case 805:
case 1465:
case 1223:
case 1255:
case 1931:
case 571:
case 2821:
case 2320:
case 1795:
case 2402:
case 4031:
case 485:
case 1785:
case 385:
case 620:
case 721:
case 3031:
case 643:
case 1553:
case 3203:
case 3433:
case 3111:
case 2772:
case 3996:
case 3778:
case 1342:
case 4044:
case 3044:
case 756:
case 3980:
case 1629:
case 3990:
case 1593:
case 3574:
case 1583:
case 389:
case 3408:
case 137:
case 3440:
case 3238:
case 87:
case 2259:
case 3659:
case 3585:
case 3415:
case 3817:
case 1006:
case 3148:
case 1241:
case 3783:
case 757:
case 1774:
case 293:
case 2142:
case 3793:
case 3555:
case 1000:
case 3106:
case 3768:
case 2007:
case 3523:
case 1048:
case 3699:
case 136:
case 1205:
case 2289:
case 1578:
case 704:
case 1234:
case 2331:
case 3488:
case 2452:
case 553:
case 3498:
case 3518:
case 4020:
case 3463:
case 3061:
case 3900:
case 1741:
case 2625:
case 3714:
case 3225:
case 2262:
case 2876:
case 3662:
case 4061:
case 3424:
case 1161:
case 3906:
case 3268:
case 1538:
case 1475:
case 99:
case 1877:
case 3283:
case 2371:
case 955:
case 213:
case 2693:
case 629:
case 4026:
case 2492:
case 2512:
case 2832:
case 1919:
case 937:
case 425:
case 265:
case 1922:
case 1079:
case 346:
case 3803:
case 1002:
case 1549:
case 150:
case 1818:
case 3304:
case 1601:
case 2766:
case 446:
case 1147:
case 4047:
case 3939:
case 2760:
case 1315:
case 268:
case 328:
case 2721:
case 329:
case 269:
case 2591:
case 2581:
case 428:
case 581:
case 1487:
case 1497:
case 2510:
case 539:
case 735:
case 1895:
case 2456:
case 1119:
case 2809:
case 2908:
case 933:
case 2872:
case 1947:
case 1039:
case 1358:
case 1267:
case 3660:
case 2260:
case 2946:
case 1388:
case 3902:
case 3139:
case 2054:
case 56:
case 3022:
case 738:
case 2496:
case 3979:
case 478:
case 1855:
case 2516:
case 739:
case 452:
case 535:
case 3621:
case 1324:
case 4022:
case 379:
case 2065:
case 443:
case 420:
case 2501:
case 685:
case 2319:
case 2649:
case 88:
case 343:
case 3717:
case 1052:
case 19:
case 3427:
case 3354:
case 3676:
case 3182:
case 2743:
case 3192:
case 3384:
case 172:
case 2198:
case 1373:
case 1691:
case 3394:
case 2163:
case 159:
case 2270:
case 141:
case 1082:
case 2545:
case 1874:
case 3893:
case 688:
case 1737:
case 2730:
case 2075:
case 2124:
case 2915:
case 370:
case 730:
case 2406:
case 982:
case 2776:
case 447:
case 3643:
case 3313:
case 2243:
case 11:
case 347:
case 2617:
case 1610:
case 861:
case 1308:
case 2770:
case 2963:
case 1777:
case 1616:
case 2004:
case 2998:
case 2899:
case 2115:
case 1805:
case 2400:
case 1834:
case 3567:
case 3630:
case 1237:
case 1025:
case 2898:
case 3852:
case 2364:
case 1053:
case 2742:
case 363:
case 223:
case 2449:
case 240:
case 2863:
case 3183:
case 619:
case 506:
case 2355:
case 822:
case 2989:
case 3476:
case 2227:
case 1451:
case 1491:
case 706:
case 2959:
case 1481:
case 161:
case 134:
case 1941:
case 3914:
case 3700:
case 1093:
case 3892:
case 2858:
case 3882:
case 1083:
case 273:
case 3993:
case 4041:
case 3041:
case 644:
case 1761:
case 3329:
case 3206:
case 3968:
case 2189:
case 3869:
case 467:
case 872:
case 1556:
case 2199:
case 1580:
case 699:
case 2597:
case 1134:
case 3005:
case 89:
case 2557:
case 855:
case 1332:
case 1726:
case 2159:
case 3034:
case 3925:
case 3114:
case 1141:
case 3248:
case 3953:
case 1607:
case 3520:
case 4018:
case 3756:
case 3978:
case 1771:
case 2846:
case 3018:
case 245:
case 1399:
case 2305:
case 1389:
case 226:
case 366:
case 3879:
case 3561:
case 909:
case 466:
case 1955:
case 908:
case 1401:
case 1923:
case 2909:
case 1985:
case 2132:
case 1995:
case 905:
case 711:
case 610:
case 251:
case 3750:
case 2012:
case 3796:
case 2808:
case 1244:
case 3211:
case 1118:
case 3290:
case 1697:
case 1164:
case 1687:
case 2680:
case 2656:
case 3938:
case 1155:
case 1731:
case 4095:
case 4085:
case 74:
case 507:
case 3095:
case 791:
case 3023:
case 690:
case 1185:
case 2109:
case 2932:
case 4023:
case 707:
case 214:
case 1819:
case 4055:
case 754:
case 3064:
case 2686:
case 1744:
case 1362:
case 3421:
case 1078:
case 1657:
case 4064:
case 2970:
case 2763:
case 3459:
case 2798:
case 3752:
case 3806:
case 2010:
case 3345:
case 2215:
case 7:
case 2669:
case 2414:
case 2130:
case 2594:
case 2584:
case 5:
case 390:
case 2136:
case 3489:
case 3792:
case 2565:
case 1635:
case 2976:
case 1604:
case 3301:
case 2298:
case 2367:
case 2652:
case 1579:
case 192:
case 3252:
case 2288:
case 1861:
case 2170:
case 3663:
case 2425:
case 2930:
case 666:
case 2453:
case 3769:
case 1321:
case 3624:
case 2715:
case 2224:
case 882:
case 1820:
case 3462:
case 2827:
case 100:
case 2936:
case 3547:
case 2513:
case 1826:
case 17:
case 2943:
case 2692:
case 3077:
case 2176:
case 3282:
case 2746:
case 1684:
case 1167:
case 1694:
case 3880:
case 2377:
case 344:
case 1370:
case 3702:
case 3856:
case 837:
case 2639:
case 1871:
case 1569:
case 3472:
case 499:
case 2733:
case 399:
case 398:
case 2121:
case 35:
case 2535:
case 3896:
case 2708:
case 4067:
case 3351:
case 3202:
case 3646:
case 3316:
case 2246:
case 2773:
case 3633:
case 319:
case 286:
case 2921:
case 2679:
case 833:
case 1552:
case 1330:
case 419:
case 2337:
case 105:
case 415:
case 1592:
case 2045:
case 1429:
case 1722:
case 315:
case 1613:
case 1343:
case 2240:
case 3310:
case 1247:
case 3640:
case 3811:
case 2575:
case 1891:
case 839:
case 1390:
case 3668:
case 2397:
case 1881:
case 3942:
case 2293:
case 3371:
case 3870:
case 3683:
case 669:
case 401:
case 497:
case 3512:
case 3482:
case 3799:
case 3127:
case 2518:
case 2488:
case 86:
case 280:
case 2463:
case 665:
case 2225:
case 2948:
case 3625:
case 2900:
case 2253:
case 1907:
case 2424:
case 103:
case 1532:
case 835:
case 1851:
case 2793:
case 3007:
case 1816:
case 3299:
case 2699:
case 1634:
case 14:
case 1572:
case 3836:
case 3259:
case 107:
case 3469:
case 1042:
case 2595:
case 2415:
case 3762:
case 962:
case 2585:
case 1311:
case 881:
case 2214:
case 1107:
case 2100:
case 2817:
case 2778:
case 2956:
case 1229:
case 1306:
case 2980:
case 1987:
case 2574:
case 288:
case 316:
case 416:
case 534:
case 3709:
case 2632:
case 761:
case 734:
case 474:
case 2433:
case 2203:
case 1957:
case 2996:
case 1300:
case 2111:
case 830:
case 1618:
case 2986:
case 4057:
case 1197:
case 2534:
case 1187:
case 1422:
case 1419:
case 3057:
case 1589:
case 1712:
case 2278:
case 1623:
case 3821:
case 2609:
case 264:
case 3732:
case 3272:
case 2911:
case 2150:
case 2703:
case 1302:
case 1521:
case 3998:
case 3004:
case 1216:
case 954:
case 3988:
case 20:
case 1781:
case 2169:
case 3889:
case 3115:
case 3899:
case 2630:
case 3448:
case 1560:
case 1637:
case 991:
case 2442:
case 270:
case 3859:
case 2636:
case 1566:
case 3406:
case 2313:
case 3243:
case 2643:
case 1751:
case 1135:
case 821:
case 2814:
case 2217:
case 2394:
case 903:
case 3188:
case 2152:
case 1281:
case 2384:
case 1339:
case 1058:
case 1677:
case 2670:
case 1426:
case 2883:
case 508:
case 509:
case 616:
case 911:
case 2328:
case 4075:
case 3501:
case 3322:
case 674:
case 709:
case 1024:
case 505:
case 220:
case 360:
case 2249:
case 3319:
case 1904:
case 2825:
case 1098:
case 1088:
case 2853:
case 2192:
case 1420:
case 1251:
case 1352:
case 853:
case 1667:
case 3260:
case 1530:
case 2660:
case 52:
case 2902:
case 2139:
case 3516:
case 4065:
case 1:
case 279:
case 3933:
case 1745:
case 1128:
case 275:
case 1165:
case 3809:
case 3456:
case 1543:
case 1471:
case 3028:
case 3940:
case 3084:
case 3094:
case 2666:
case 1701:
case 3266:
case 1382:
case 512:
case 1913:
case 1392:
case 57:
case 792:
case 2939:
case 1984:
case 2047:
case 1829:
case 1040:
case 1008:
case 3760:
case 369:
case 229:
case 1369:
case 697:
case 1245:
case 368:
case 3581:
case 2179:
case 700:
case 468:
case 2838:
case 601:
case 3411:
case 3591:
case 3551:
case 3832:
case 1965:
case 225:
case 1954:
case 1113:
case 2803:
case 1046:
case 33:
case 3766:
case 1201:
case 2304:
case 2460:
case 2055:
case 314:
case 3932:
case 2711:
case 3172:
case 3696:
case 2064:
case 2296:
case 3650:
case 2421:
case 2250:
case 582:
case 3873:
case 1894:
case 2290:
case 1884:
case 3690:
case 1297:
case 1368:
case 1929:
case 1671:
case 2256:
case 1393:
case 1912:
case 2178:
case 1383:
case 782:
case 2466:
case 104:
case 1009:
case 2085:
case 3012:
case 348:
case 4029:
case 1757:
case 1813:
case 351:
case 1644:
case 3972:
case 2211:
case 1314:
case 3808:
case 3611:
case 2786:
case 4012:
case 448:
case 2796:
case 1112:
case 8:
case 445:
case 2018:
case 345:
case 2780:
case 1787:
case 1129:
case 3846:
case 266:
case 153:
case 326:
case 3833:
case 1631:
case 2879:
case 3334:
case 1099:
case 3557:
case 938:
case 1835:
case 1303:
case 2953:
case 3318:
case 1804:
case 96:
case 2642:
case 2968:
case 3606:
case 2443:
case 427:
case 3189:
case 1338:
case 3417:
case 3587:
case 3959:
case 2544:
case 2470:
case 1477:
case 3385:
case 2914:
case 2748:
case 3162:
case 3364:
case 1661:
case 2852:
case 3888:
case 3898:
case 440:
case 340:
case 3863:
case 2183:
case 1062:
case 323:
case 156:
case 632:
case 263:
case 981:
case 686:
case 3323:
case 737:
case 3227:
case 3989:
case 1765:
case 215:
case 1754:
case 79:
case 3966:
case 3575:
case 2811:
case 1317:
case 2310:
case 541:
case 3240:
case 555:
case 4001:
case 2432:
case 772:
case 59:
case 640:
case 3960:
case 1784:
case 623:
case 3246:
case 332:
case 386:
case 3921:
case 3403:
case 3233:
case 1563:
case 3337:
case 1598:
case 2279:
case 1588:
case 3679:
case 25:
case 904:
case 3478:
case 130:
case 1619:
case 3535:
case 2886:
case 3708:
case 2896:
case 806:
case 1455:
case 2351:
case 957:
case 2880:
case 3160:
case 3273:
case 2391:
case 1897:
case 3746:
case 1515:
case 2856:
case 244:
case 722:
case 3377:
case 1485:
case 2409:
case 2779:
case 627:
case 298:
case 3121:
case 1228:
case 3733:
case 2547:
case 1540:
case 1508:
case 1275:
case 3936:
case 1910:
case 3081:
case 2917:
case 750:
case 1704:
case 651:
case 649:
case 891:
case 3258:
case 2658:
case 2077:
case 4091:
case 3176:
case 3943:
case 1181:
case 2252:
case 3288:
case 1916:
case 550:
case 3652:
case 3367:
case 3298:
case 1533:
case 3051:
case 2663:
case 3170:
case 3263:
case 1546:
case 3453:
case 921:
case 626:
case 2462:
case 2624:
case 2949:
case 803:
case 135:
case 614:
case 3136:
case 1775:
case 3565:
case 1951:
case 1235:
case 2782:
case 2519:
case 3758:
case 3143:
case 2489:
case 16:
case 3016:
case 2800:
case 1807:
case 2301:
case 2848:
case 1204:
case 1043:
case 3842:
case 3528:
case 1116:
case 2752:
case 1981:
case 2459:
case 942:
case 2615:
case 3724:
case 676:
case 387:
case 3584:
case 3594:
case 3414:
case 1573:
case 3130:
case 2098:
case 2904:
case 355:
case 39:
case 2088:
case 4052:
case 3651:
case 1182:
case 2251:
case 1676:
case 2420:
case 2175:
case 143:
case 2024:
case 1249:
case 1328:
case 2291:
case 4082:
case 441:
case 3681:
case 2716:
case 372:
case 2339:
case 358:
case 1893:
case 2426:
case 3277:
case 732:
case 2677:
case 3082:
case 341:
case 1992:
case 1982:
case 2751:
case 3308:
case 1814:
case 2210:
case 147:
case 3610:
case 2015:
case 1442:
case 170:
case 1636:
case 2975:
case 4069:
case 1169:
case 3805:
case 2560:
case 3237:
case 1630:
case 863:
case 3834:
case 2379:
case 3777:
case 2791:
case 2781:
case 3616:
case 1952:
case 262:
case 633:
case 3549:
case 2954:
case 1803:
case 146:
case 3002:
case 2113:
case 2431:
case 583:
case 2576:
case 3919:
case 2033:
case 3079:
case 125:
case 1577:
case 3315:
case 2245:
case 2369:
case 3645:
case 985:
case 1838:
case 1179:
case 2040:
case 2008:
case 3767:
case 3947:
case 2382:
case 2913:
case 2392:
case 3039:
case 3517:
case 3122:
case 175:
case 1375:
case 587:
case 3885:
case 3895:
case 1979:
case 636:
case 964:
case 1022:
case 3823:
case 787:
case 1019:
case 2128:
case 3324:
case 3457:
case 3864:
case 2184:
case 3388:
case 3267:
case 2667:
case 1139:
case 1585:
case 1214:
case 3241:
case 2311:
case 810:
case 1817:
case 1753:
case 2107:
case 2572:
case 576:
case 1689:
case 3920:
case 3435:
case 1699:
case 436:
case 24:
case 1793:
case 4048:
case 947:
case 3048:
case 3000:
case 1555:
case 1768:
case 3961:
case 3741:
case 1714:
case 2907:
case 2396:
case 545:
case 2350:
case 1357:
case 2851:
case 1662:
case 2532:
case 794:
case 1488:
case 802:
case 3503:
case 3126:
case 180:
case 211:
case 1849:
case 726:
case 920:
case 3705:
case 1026:
case 2380:
case 548:
case 1387:
case 551:
case 3161:
case 2390:
case 3877:
case 3090:
case 3718:
case 1911:
case 3944:
case 573:
case 4080:
case 1150:
case 4090:
case 3484:
case 979:
case 1473:
case 1541:
case 3494:
case 978:
case 3285:
case 164:
case 2685:
case 2695:
case 3255:
case 1738:
case 3454:
case 727:
case 1534:
case 3096:
case 2664:
case 433:
case 1180:
case 2422:
case 819:
case 3867:
case 3086:
case 773:
case 1278:
case 3171:
case 2712:
case 622:
case 1433:
case 85:
case 1203:
case 1950:
case 69:
case 2300:
case 540:
case 1996:
case 2801:
case 2348:
case 3795:
case 206:
case 1446:
case 1031:
case 928:
case 3525:
case 777:
case 3583:
case 2845:
case 1440:
case 337:
case 3568:
case 2447:
case 3131:
case 3755:
case 1238:
case 3723:
case 1408:
case 844:
case 3971:
case 672:
case 2212:
case 3342:
case 1778:
case 3629:
case 2306:
case 2997:
case 2229:
case 723:
case 641:
case 1472:
case 2228:
case 199:
case 2066:
case 3694:
case 1391:
case 1673:
case 1880:
case 2284:
case 2897:
case 1239:
case 1702:
case 2495:
case 3569:
case 144:
case 1067:
case 2060:
case 3747:
case 2455:
case 2713:
case 885:
case 2254:
case 1351:
case 3654:
case 15:
case 2021:
case 1633:
case 405:
case 2418:
case 3831:
case 2588:
case 3552:
case 560:
case 1279:
case 1739:
case 1432:
case 2794:
case 2784:
case 2213:
case 3343:
case 2754:
case 1811:
case 2101:
case 3247:
case 2317:
case 308:
case 2765:
case 309:
case 409:
case 3336:
case 408:
case 3429:
case 1345:
case 1269:
case 584:
case 2036:
case 2043:
case 1806:
case 2116:
case 1459:
case 2991:
case 2951:
case 1499:
case 2405:
case 1792:
case 2807:
case 2434:
case 2110:
case 26:
case 880:
case 1848:
case 2204:
case 967:
case 784:
case 2775:
case 2030:
case 235:
case 1037:
case 2546:
case 4049:
case 768:
case 400:
case 1462:
case 300:
case 1624:
case 3321:
case 2916:
case 2181:
case 1252:
case 392:
case 2191:
case 1698:
case 53:
case 1663:
case 2533:
case 492:
case 1917:
case 3366:
case 963:
case 1658:
case 2151:
case 1292:
case 569:
case 568:
case 1149:
case 110:
case 2474:
case 915:
case 166:
case 3923:
case 3401:
case 701:
case 1879:
case 3231:
case 852:
case 1802:
case 3771:
case 1978:
case 2112:
case 879:
case 1790:
case 2797:
case 2129:
case 4003:
case 2757:
case 1103:
case 875:
case 3244:
case 3118:
case 2644:
case 4038:
case 597:
case 3359:
case 918:
case 501:
case 3155:
case 1095:
case 2828:
case 1085:
case 2009:
case 204:
case 2894:
case 3687:
case 2287:
case 2929:
case 3164:
case 612:
case 2393:
case 3271:
case 2912:
case 1256:
case 3918:
case 593:
case 2325:
case 3744:
case 944:
case 4078:
case 1064:
case 1250:
case 62:
case 3078:
case 1903:
case 3362:
case 825:
case 2467:
case 3822:
case 846:
case 999:
case 3185:
case 910:
case 3934:
case 716:
case 1476:
case 2620:
case 1627:
case 3261:
case 2661:
case 2062:
case 163:
case 2378:
case 3174:
case 4053:
case 1153:
case 870:
case 3941:
case 3372:
case 1882:
case 3093:
case 1892:
case 774:
case 608:
case 3481:
case 461:
case 2875:
case 1544:
case 434:
case 361:
case 3226:
case 2626:
case 847:
case 3720:
case 1869:
case 1443:
case 524:
case 2338:
case 3590:
case 796:
case 2059:
case 1983:
case 902:
case 3974:
case 1312:
case 1993:
case 1968:
case 1206:
case 3761:
case 1329:
case 1041:
case 2835:
case 2303:
case 2207:
case 843:
case 38:
case 3141:
case 2437:
case 271:
case 3726:
case 2099:
case 3332:
case 3550:
case 242:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751176801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,];
var gg_b = "1751176801/";

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
