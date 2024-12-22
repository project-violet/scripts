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
case 1051:
case 3073:
case 945:
case 2099:
case 1276:
case 1221:
case 3680:
case 3572:
case 118:
case 2997:
case 3201:
case 1186:
case 2302:
case 1332:
case 1152:
case 1845:
case 1346:
case 1618:
case 2276:
case 3571:
case 3212:
case 3273:
case 658:
case 1219:
case 725:
case 2691:
case 244:
case 1909:
case 4073:
case 1337:
case 3696:
case 146:
case 2765:
case 3200:
case 197:
case 482:
case 3494:
case 1415:
case 2826:
case 1652:
case 412:
case 3321:
case 2255:
case 3022:
case 283:
case 3662:
case 2773:
case 3760:
case 3046:
case 2521:
case 3703:
case 3208:
case 3053:
case 2254:
case 3892:
case 2546:
case 1952:
case 2863:
case 936:
case 3987:
case 1479:
case 203:
case 396:
case 223:
case 593:
case 1323:
case 3405:
case 381:
case 2351:
case 3092:
case 2558:
case 382:
case 102:
case 1939:
case 3491:
case 3267:
case 952:
case 1785:
case 1231:
case 230:
case 3859:
case 2198:
case 109:
case 3003:
case 1738:
case 3560:
case 2824:
case 2069:
case 2584:
case 1212:
case 2117:
case 2618:
case 4061:
case 2964:
case 2086:
case 1968:
case 3562:
case 2211:
case 3197:
case 1227:
case 1401:
case 504:
case 3299:
case 2969:
case 1787:
case 335:
case 1897:
case 365:
case 3975:
case 828:
case 486:
case 1502:
case 4078:
case 4024:
case 3074:
case 304:
case 428:
case 1705:
case 1209:
case 3271:
case 803:
case 3079:
case 3122:
case 638:
case 1307:
case 3510:
case 3682:
case 3423:
case 2578:
case 3014:
case 92:
case 1694:
case 2238:
case 3151:
case 51:
case 1169:
case 3139:
case 58:
case 2612:
case 1498:
case 2520:
case 2573:
case 3583:
case 834:
case 2541:
case 1320:
case 188:
case 3877:
case 2860:
case 3374:
case 3287:
case 2829:
case 2176:
case 2185:
case 2679:
case 1671:
case 1815:
case 3000:
case 1883:
case 2690:
case 1709:
case 3654:
case 3234:
case 2375:
case 2207:
case 3070:
case 959:
case 1880:
case 2163:
case 1640:
case 1516:
case 3390:
case 3943:
case 2608:
case 3812:
case 1419:
case 2921:
case 2472:
case 2196:
case 2251:
case 3611:
case 569:
case 1295:
case 3033:
case 657:
case 1980:
case 3652:
case 2787:
case 3338:
case 1701:
case 2213:
case 3526:
case 2750:
case 3189:
case 2985:
case 1358:
case 833:
case 2288:
case 1921:
case 675:
case 2094:
case 3218:
case 809:
case 2315:
case 1664:
case 2449:
case 2850:
case 3331:
case 2910:
case 1665:
case 3608:
case 1386:
case 3705:
case 1377:
case 278:
case 2926:
case 2866:
case 700:
case 2511:
case 305:
case 2157:
case 1947:
case 2136:
case 3225:
case 1074:
case 623:
case 1474:
case 3545:
case 2344:
case 3600:
case 2828:
case 3643:
case 1469:
case 1321:
case 3863:
case 3768:
case 3626:
case 423:
case 1454:
case 1733:
case 1661:
case 4089:
case 749:
case 1929:
case 185:
case 2425:
case 252:
case 3383:
case 216:
case 919:
case 2753:
case 394:
case 2481:
case 2987:
case 739:
case 914:
case 484:
case 3410:
case 1521:
case 989:
case 3114:
case 2411:
case 30:
case 2981:
case 3024:
case 2137:
case 369:
case 3537:
case 1510:
case 740:
case 2179:
case 78:
case 1549:
case 2614:
case 1575:
case 353:
case 3041:
case 3552:
case 946:
case 1708:
case 2681:
case 2769:
case 3346:
case 1873:
case 2498:
case 1162:
case 1621:
case 1700:
case 3653:
case 1316:
case 1345:
case 1117:
case 992:
case 3913:
case 3392:
case 3119:
case 2552:
case 852:
case 464:
case 2938:
case 1617:
case 3344:
case 1433:
case 379:
case 1877:
case 3730:
case 190:
case 2079:
case 1760:
case 3509:
case 2042:
case 1842:
case 1274:
case 1447:
case 939:
case 2594:
case 1115:
case 3790:
case 2081:
case 3466:
case 1903:
case 380:
case 3791:
case 2439:
case 792:
case 2049:
case 2677:
case 4052:
case 3029:
case 3061:
case 2382:
case 263:
case 3783:
case 1457:
case 1390:
case 1178:
case 3820:
case 3332:
case 668:
case 2512:
case 1713:
case 1892:
case 943:
case 692:
case 3874:
case 422:
case 1593:
case 2849:
case 21:
case 2768:
case 336:
case 3787:
case 4082:
case 1050:
case 1030:
case 3462:
case 3032:
case 1465:
case 866:
case 845:
case 1751:
case 2807:
case 1480:
case 1112:
case 556:
case 2078:
case 712:
case 2998:
case 311:
case 1965:
case 937:
case 1473:
case 4026:
case 2543:
case 2663:
case 2290:
case 3846:
case 1272:
case 1746:
case 3923:
case 3983:
case 142:
case 275:
case 3563:
case 4019:
case 893:
case 1774:
case 1501:
case 2087:
case 141:
case 1648:
case 3543:
case 2000:
case 858:
case 1177:
case 1081:
case 3340:
case 550:
case 742:
case 1554:
case 4001:
case 2261:
case 3585:
case 570:
case 2171:
case 1782:
case 2491:
case 3372:
case 2228:
case 857:
case 3799:
case 3938:
case 2497:
case 4070:
case 1639:
case 1072:
case 2784:
case 4013:
case 2193:
case 603:
case 3393:
case 1527:
case 1538:
case 3130:
case 3193:
case 1314:
case 2676:
case 371:
case 1930:
case 3978:
case 1899:
case 2852:
case 1646:
case 1511:
case 1284:
case 468:
case 1146:
case 1950:
case 2243:
case 597:
case 1391:
case 2487:
case 3043:
case 3485:
case 2234:
case 689:
case 2435:
case 1394:
case 2780:
case 1623:
case 3256:
case 1829:
case 3396:
case 2669:
case 1472:
case 2014:
case 3314:
case 309:
case 3322:
case 3268:
case 940:
case 948:
case 1858:
case 2698:
case 1850:
case 632:
case 2277:
case 176:
case 1955:
case 1870:
case 1635:
case 96:
case 332:
case 3045:
case 3347:
case 4029:
case 483:
case 74:
case 3004:
case 276:
case 444:
case 1706:
case 2654:
case 3965:
case 2332:
case 199:
case 3718:
case 2831:
case 1402:
case 2532:
case 1732:
case 2697:
case 2792:
case 152:
case 2684:
case 631:
case 2777:
case 2167:
case 1990:
case 4093:
case 1190:
case 99:
case 1042:
case 3836:
case 1429:
case 194:
case 990:
case 1525:
case 3180:
case 2817:
case 3912:
case 791:
case 3574:
case 1200:
case 3925:
case 1603:
case 2035:
case 1775:
case 1547:
case 703:
case 1898:
case 2423:
case 3789:
case 479:
case 1919:
case 3713:
case 1643:
case 129:
case 1118:
case 3006:
case 1591:
case 1163:
case 2799:
case 1647:
case 1167:
case 1976:
case 4049:
case 3011:
case 3738:
case 2128:
case 2665:
case 806:
case 2782:
case 2129:
case 1305:
case 3067:
case 595:
case 708:
case 158:
case 232:
case 2779:
case 511:
case 1683:
case 3454:
case 3848:
case 399:
case 1025:
case 848:
case 629:
case 535:
case 207:
case 2958:
case 1935:
case 3679:
case 3550:
case 971:
case 2316:
case 2169:
case 3988:
case 1367:
case 3852:
case 2206:
case 984:
case 1692:
case 4043:
case 1987:
case 1790:
case 110:
case 2088:
case 1238:
case 3083:
case 1055:
case 2862:
case 2901:
case 3144:
case 3153:
case 2150:
case 3613:
case 1741:
case 3979:
case 248:
case 1669:
case 1912:
case 585:
case 1298:
case 239:
case 3919:
case 3005:
case 1384:
case 2403:
case 2950:
case 2609:
case 442:
case 316:
case 616:
case 745:
case 0:
case 534:
case 2655:
case 2651:
case 1747:
case 2208:
case 138:
case 2451:
case 1324:
case 1515:
case 2855:
case 2307:
case 3775:
case 3265:
case 187:
case 1981:
case 3847:
case 1838:
case 1872:
case 1630:
case 2202:
case 2580:
case 3143:
case 2158:
case 1957:
case 50:
case 1410:
case 2215:
case 2615:
case 615:
case 3382:
case 196:
case 8:
case 1460:
case 1973:
case 2796:
case 2725:
case 2443:
case 3727:
case 1090:
case 2822:
case 2625:
case 900:
case 1020:
case 2366:
case 2467:
case 3087:
case 1119:
case 1318:
case 907:
case 3741:
case 2:
case 3017:
case 3221:
case 1028:
case 842:
case 2843:
case 2808:
case 3400:
case 3861:
case 69:
case 836:
case 218:
case 2174:
case 2755:
case 3085:
case 3944:
case 2438:
case 1607:
case 1941:
case 619:
case 3170:
case 3689:
case 1936:
case 3506:
case 3162:
case 3305:
case 827:
case 3475:
case 3246:
case 429:
case 3040:
case 3445:
case 1149:
case 3365:
case 131:
case 3213:
case 3377:
case 2740:
case 1114:
case 1619:
case 2135:
case 1383:
case 1846:
case 350:
case 1315:
case 3327:
case 942:
case 1534:
case 576:
case 3888:
case 2101:
case 2656:
case 240:
case 68:
case 2505:
case 1341:
case 4054:
case 113:
case 3525:
case 3187:
case 620:
case 639:
case 2834:
case 294:
case 302:
case 2631:
case 3610:
case 172:
case 1721:
case 1475:
case 2371:
case 2402:
case 3650:
case 2923:
case 3647:
case 3536:
case 3566:
case 3349:
case 3941:
case 1642:
case 1793:
case 1672:
case 2912:
case 3342:
case 1095:
case 2508:
case 1294:
case 2493:
case 3107:
case 888:
case 2660:
case 2380:
case 544:
case 3691:
case 2820:
case 3325:
case 733:
case 1461:
case 3211:
case 2241:
case 582:
case 1856:
case 2752:
case 1716:
case 3549:
case 3088:
case 815:
case 3666:
case 312:
case 3469:
case 3376:
case 4057:
case 2735:
case 1111:
case 3629:
case 1927:
case 3641:
case 3840:
case 2420:
case 2937:
case 1450:
case 2076:
case 956:
case 2112:
case 926:
case 2586:
case 978:
case 2120:
case 3245:
case 94:
case 319:
case 3565:
case 614:
case 2056:
case 348:
case 1937:
case 666:
case 2870:
case 2033:
case 455:
case 3747:
case 2064:
case 2601:
case 1196:
case 2116:
case 2389:
case 1108:
case 2190:
case 123:
case 1456:
case 1971:
case 2942:
case 2458:
case 3290:
case 998:
case 310:
case 775:
case 1890:
case 72:
case 869:
case 1001:
case 2973:
case 1082:
case 2360:
case 2730:
case 2260:
case 777:
case 3081:
case 3999:
case 2323:
case 67:
case 947:
case 873:
case 2726:
case 2597:
case 1440:
case 1257:
case 3926:
case 4030:
case 1514:
case 3052:
case 2952:
case 256:
case 2121:
case 1781:
case 996:
case 3644:
case 1963:
case 1584:
case 229:
case 1878:
case 1528:
case 1247:
case 3642:
case 2786:
case 1753:
case 136:
case 4005:
case 1217:
case 4079:
case 1053:
case 3910:
case 2893:
case 2887:
case 3178:
case 1211:
case 2460:
case 1297:
case 2977:
case 896:
case 6:
case 2619:
case 3546:
case 1657:
case 5:
case 1348:
case 2151:
case 2993:
case 242:
case 635:
case 3752:
case 2377:
case 2298:
case 211:
case 909:
case 2339:
case 3802:
case 2110:
case 1259:
case 2114:
case 2733:
case 1953:
case 617:
case 1052:
case 2762:
case 3955:
case 2547:
case 450:
case 3781:
case 1797:
case 1062:
case 1404:
case 2974:
case 2478:
case 1712:
case 2701:
case 2682:
case 2670:
case 259:
case 3109:
case 2800:
case 3922:
case 236:
case 2142:
case 3681:
case 737:
case 3547:
case 3500:
case 3436:
case 2918:
case 490:
case 2329:
case 2967:
case 662:
case 530:
case 3674:
case 1492:
case 2109:
case 1418:
case 2054:
case 1038:
case 1077:
case 4042:
case 3504:
case 3158:
case 237:
case 2220:
case 2188:
case 2711:
case 1265:
case 20:
case 1750:
case 3522:
case 3159:
case 112:
case 503:
case 1910:
case 2118:
case 2147:
case 3683:
case 2293:
case 1201:
case 3667:
case 1715:
case 1861:
case 3665:
case 3911:
case 1385:
case 3501:
case 3597:
case 764:
case 2764:
case 324:
case 1532:
case 36:
case 1372:
case 881:
case 2592:
case 4036:
case 3133:
case 320:
case 3898:
case 2888:
case 366:
case 1767:
case 3633:
case 3517:
case 3590:
case 49:
case 1379:
case 1142:
case 2517:
case 3646:
case 1398:
case 3296:
case 1803:
case 2200:
case 1504:
case 326:
case 2903:
case 347:
case 2434:
case 3146:
case 4014:
case 3054:
case 1422:
case 2823:
case 1710:
case 927:
case 290:
case 1353:
case 3735:
case 2648:
case 612:
case 2370:
case 2957:
case 1116:
case 264:
case 1757:
case 875:
case 411:
case 1266:
case 862:
case 3917:
case 3721:
case 473:
case 711:
case 2806:
case 2143:
case 1789:
case 4064:
case 776:
case 3577:
case 2165:
case 3969:
case 1078:
case 1756:
case 317:
case 1667:
case 41:
case 1816:
case 2424:
case 3421:
case 598:
case 715:
case 3818:
case 1027:
case 1104:
case 3949:
case 3749:
case 728:
case 1121:
case 3056:
case 3458:
case 960:
case 2369:
case 4091:
case 3814:
case 1780:
case 1537:
case 1592:
case 2141:
case 2189:
case 2659:
case 3250:
case 4069:
case 3873:
case 3706:
case 2911:
case 1800:
case 2029:
case 1301:
case 1122:
case 1154:
case 3625:
case 545:
case 2013:
case 1202:
case 1489:
case 93:
case 882:
case 2749:
case 902:
case 1362:
case 2739:
case 2878:
case 1225:
case 953:
case 918:
case 761:
case 451:
case 2440:
case 3815:
case 385:
case 910:
case 1901:
case 2793:
case 4050:
case 2920:
case 3308:
case 1637:
case 14:
case 23:
case 2168:
case 924:
case 3751:
case 156:
case 1739:
case 1673:
case 1371:
case 1417:
case 1867:
case 794:
case 3906:
case 274:
case 557:
case 1742:
case 392:
case 3670:
case 3541:
case 97:
case 2209:
case 374:
case 1439:
case 2626:
case 646:
case 3242:
case 2468:
case 1573:
case 2946:
case 3438:
case 2557:
case 3289:
case 3319:
case 3244:
case 238:
case 1660:
case 2414:
case 1436:
case 578:
case 3071:
case 773:
case 2036:
case 1866:
case 1974:
case 3048:
case 2551:
case 2683:
case 492:
case 3637:
case 2393:
case 368:
case 1382:
case 2471:
case 1144:
case 2292:
case 2045:
case 3968:
case 3035:
case 342:
case 2596:
case 3511:
case 1679:
case 3362:
case 24:
case 1387:
case 540:
case 3598:
case 1023:
case 1926:
case 1865:
case 2900:
case 3714:
case 56:
case 1125:
case 1626:
case 2395:
case 2383:
case 2103:
case 295:
case 1151:
case 2649:
case 925:
case 46:
case 3591:
case 430:
case 684:
case 2892:
case 2452:
case 204:
case 1868:
case 1574:
case 3770:
case 3592:
case 3871:
case 2628:
case 2304:
case 1141:
case 741:
case 191:
case 34:
case 2299:
case 3348:
case 1628:
case 2499:
case 3090:
case 470:
case 372:
case 1335:
case 2879:
case 1736:
case 1255:
case 19:
case 1696:
case 3573:
case 2445:
case 2412:
case 2851:
case 1982:
case 2530:
case 3688:
case 2605:
case 57:
case 2444:
case 1920:
case 409:
case 3673:
case 154:
case 2642:
case 1986:
case 3323:
case 784:
case 2201:
case 596:
case 246:
case 547:
case 837:
case 526:
case 2565:
case 3473:
case 2203:
case 2934:
case 3453:
case 4067:
case 2406:
case 3205:
case 2216:
case 843:
case 3736:
case 1723:
case 3156:
case 3849:
case 3947:
case 2138:
case 3788:
case 3062:
case 754:
case 301:
case 1999:
case 2643:
case 1998:
case 1826:
case 3690:
case 1036:
case 2635:
case 2966:
case 2492:
case 3188:
case 718:
case 2181:
case 1958:
case 3210:
case 1765:
case 1924:
case 3337:
case 1197:
case 4090:
case 271:
case 785:
case 2928:
case 2500:
case 3784:
case 1552:
case 3659:
case 3837:
case 1292:
case 693:
case 493:
case 1967:
case 4032:
case 1682:
case 2589:
case 389:
case 874:
case 3057:
case 1308:
case 3710:
case 3224:
case 814:
case 80:
case 980:
case 1204:
case 1425:
case 3101:
case 808:
case 1099:
case 1748:
case 1000:
case 1807:
case 476:
case 210:
case 643:
case 160:
case 306:
case 2617:
case 1035:
case 3887:
case 2050:
case 1340:
case 786:
case 269:
case 930:
case 2148:
case 384:
case 2734:
case 3953:
case 3838:
case 929:
case 1088:
case 3994:
case 3204:
case 3620:
case 2433:
case 844:
case 3564:
case 546:
case 3762:
case 1459:
case 3492:
case 3298:
case 1580:
case 531:
case 781:
case 1836:
case 1381:
case 2845:
case 3589:
case 941:
case 829:
case 2282:
case 1388:
case 3091:
case 2048:
case 402:
case 2100:
case 1223:
case 1536:
case 2012:
case 261:
case 262:
case 3297:
case 1758:
case 2579:
case 245:
case 2935:
case 1161:
case 2754:
case 2978:
case 661:
case 958:
case 2489:
case 407:
case 1486:
case 751:
case 2715:
case 87:
case 150:
case 1375:
case 2685:
case 2568:
case 1147:
case 3507:
case 780:
case 1107:
case 3389:
case 2496:
case 2647:
case 3732:
case 1562:
case 3761:
case 2936:
case 289:
case 2760:
case 3179:
case 3961:
case 1070:
case 3016:
case 65:
case 3576:
case 3825:
case 3937:
case 2153:
case 3548:
case 4031:
case 521:
case 2846:
case 116:
case 2553:
case 3693:
case 3063:
case 287:
case 3702:
case 4066:
case 3579:
case 1651:
case 3742:
case 29:
case 1589:
case 498:
case 3015:
case 2139:
case 247:
case 3409:
case 3631:
case 1770:
case 2429:
case 3452:
case 135:
case 1282:
case 1571:
case 3668:
case 1153:
case 3581:
case 2811:
case 376:
case 3190:
case 3304:
case 260:
case 2943:
case 1306:
case 3865:
case 2005:
case 1771:
case 3199:
case 3554:
case 2719:
case 445:
case 3648:
case 360:
case 625:
case 1228:
case 889:
case 2166:
case 2709:
case 3294:
case 637:
case 2272:
case 1481:
case 905:
case 1065:
case 367:
case 292:
case 719:
case 2032:
case 3764:
case 1369:
case 1312:
case 1068:
case 2319:
case 1945:
case 1267:
case 2988:
case 2620:
case 3476:
case 2720:
case 2629:
case 2602:
case 273:
case 1300:
case 3904:
case 1668:
case 61:
case 705:
case 3399:
case 1977:
case 140:
case 3664:
case 1794:
case 2358:
case 1893:
case 1234:
case 2177:
case 3388:
case 13:
case 17:
case 3425:
case 2236:
case 164:
case 3456:
case 3567:
case 2945:
case 2776:
case 944:
case 2346:
case 1677:
case 3722:
case 1428:
case 2653:
case 4027:
case 3677:
case 2297:
case 879:
case 1170:
case 1895:
case 1325:
case 999:
case 1339:
case 42:
case 1688:
case 2046:
case 2803:
case 714:
case 830:
case 2195:
case 100:
case 2003:
case 923:
case 90:
case 1988:
case 3126:
case 159:
case 966:
case 3089:
case 518:
case 3226:
case 2470:
case 520:
case 1171:
case 3881:
case 1824:
case 2018:
case 3172:
case 2294:
case 1181:
case 241:
case 3432:
case 613:
case 3570:
case 2853:
case 2485:
case 1717:
case 3481:
case 1904:
case 3009:
case 3192:
case 3302:
case 2249:
case 3121:
case 1138:
case 713:
case 2399:
case 891:
case 16:
case 2490:
case 133:
case 1812:
case 373:
case 573:
case 3580:
case 3794:
case 3993:
case 2313:
case 2019:
case 3125:
case 393:
case 2432:
case 1453:
case 2199:
case 1145:
case 2212:
case 3398:
case 1349:
case 917:
case 887:
case 3049:
case 1555:
case 2340:
case 871:
case 3520:
case 3687:
case 327:
case 3930:
case 1010:
case 268:
case 1818:
case 3465:
case 3414:
case 3093:
case 2476:
case 3440:
case 4010:
case 3619:
case 906:
case 3419:
case 4035:
case 1416:
case 1810:
case 1811:
case 1105:
case 3021:
case 1844:
case 3596:
case 254:
case 1913:
case 3220:
case 1483:
case 931:
case 1743:
case 2256:
case 3186:
case 2865:
case 807:
case 2664:
case 2909:
case 1583:
case 3470:
case 2469:
case 2638:
case 2748:
case 763:
case 1996:
case 2897:
case 3384:
case 933:
case 2239:
case 220:
case 1157:
case 257:
case 2055:
case 501:
case 523:
case 340:
case 3020:
case 345:
case 2906:
case 3826:
case 4058:
case 1726:
case 2513:
case 1663:
case 3792:
case 2534:
case 1356:
case 2318:
case 3535:
case 3439:
case 1463:
case 575:
case 913:
case 2133:
case 3767:
case 1906:
case 2812:
case 3817:
case 1581:
case 3002:
case 1542:
case 313:
case 1674:
case 1704:
case 106:
case 217:
case 2699:
case 3902:
case 884:
case 3427:
case 2217:
case 192:
case 315:
case 3715:
case 1627:
case 2585:
case 1256:
case 3843:
case 1512:
case 967:
case 2550:
case 3326:
case 3215:
case 2331:
case 343:
case 459:
case 2303:
case 81:
case 2930:
case 171:
case 3618:
case 2431:
case 1831:
case 22:
case 1638:
case 1470:
case 955:
case 3217:
case 2971:
case 2296:
case 3068:
case 2155:
case 1309:
case 3974:
case 2598:
case 3544:
case 2052:
case 2071:
case 2027:
case 1886:
case 2483:
case 2113:
case 432:
case 339:
case 2210:
case 1961:
case 3483:
case 308:
case 3341:
case 1938:
case 1864:
case 762:
case 1565:
case 2876:
case 2723:
case 1254:
case 3411:
case 825:
case 672:
case 2074:
case 1649:
case 1928:
case 37:
case 3530:
case 2067:
case 1518:
case 515:
case 1236:
case 475:
case 3628:
case 997:
case 3800:
case 3624:
case 286:
case 3479:
case 2743:
case 3748:
case 2161:
case 3387:
case 602:
case 47:
case 3839:
case 281:
case 3330:
case 2884:
case 3607:
case 1975:
case 127:
case 1080:
case 1277:
case 3276:
case 4002:
case 338:
case 234:
case 426:
case 439:
case 1854:
case 3369:
case 2223:
case 1734:
case 1437:
case 2515:
case 1610:
case 3495:
case 124:
case 3161:
case 488:
case 2790:
case 1572:
case 1777:
case 1431:
case 253:
case 2097:
case 3082:
case 3472:
case 3773:
case 4046:
case 362:
case 3086:
case 1711:
case 120:
case 2040:
case 3929:
case 746:
case 314:
case 1184:
case 3497:
case 554:
case 3303:
case 114:
case 811:
case 2704:
case 3366:
case 1570:
case 3956:
case 2091:
case 3842:
case 541:
case 1653:
case 3480:
case 1948:
case 1745:
case 1644:
case 1140:
case 1347:
case 3001:
case 611:
case 756:
case 3797:
case 3593:
case 3038:
case 3306:
case 2742:
case 454:
case 2002:
case 977:
case 1064:
case 1737:
case 1995:
case 2929:
case 3434:
case 3716:
case 3854:
case 3734:
case 1131:
case 3636:
case 2392:
case 1434:
case 2016:
case 2020:
case 3311:
case 2582:
case 2898:
case 200:
case 604:
case 2827:
case 3403:
case 198:
case 291:
case 688:
case 542:
case 2364:
case 1513:
case 2963:
case 4056:
case 403:
case 243:
case 1944:
case 1823:
case 2881:
case 1825:
case 3970:
case 533:
case 972:
case 2510:
case 1047:
case 3243:
case 1934:
case 2119:
case 73:
case 337:
case 2847:
case 536:
case 1328:
case 2913:
case 1729:
case 683:
case 4044:
case 2889:
case 2104:
case 2737:
case 1235:
case 3413:
case 3253:
case 83:
case 1194:
case 1004:
case 437:
case 853:
case 3239:
case 59:
case 1530:
case 3909:
case 1093:
case 299:
case 1245:
case 904:
case 404:
case 864:
case 3697:
case 3551:
case 1464:
case 2501:
case 1804:
case 1287:
case 1087:
case 849:
case 1183:
case 4007:
case 1343:
case 2882:
case 2572:
case 352:
case 60:
case 3257:
case 2154:
case 1966:
case 3165:
case 86:
case 2915:
case 1193:
case 680:
case 2932:
case 1676:
case 1205:
case 1271:
case 2338:
case 2632:
case 3076:
case 4017:
case 974:
case 2178:
case 1786:
case 3575:
case 1268:
case 3108:
case 33:
case 2813:
case 3110:
case 1260:
case 2378:
case 1407:
case 2310:
case 1248:
case 3415:
case 2613:
case 2259:
case 3858:
case 1017:
case 3036:
case 3897:
case 2454:
case 489:
case 908:
case 973:
case 3424:
case 1922:
case 2859:
case 938:
case 1213:
case 618:
case 9:
case 2038:
case 2587:
case 3663:
case 3879:
case 1451:
case 1697:
case 1395:
case 391:
case 3496:
case 125:
case 2745:
case 2864:
case 3449:
case 1550:
case 2562:
case 3915:
case 3166:
case 1092:
case 3010:
case 3829:
case 4087:
case 2240:
case 3339:
case 4003:
case 539:
case 1071:
case 3758:
case 2797:
case 528:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1734836402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,];
var gg_b = "1734836402/";

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
