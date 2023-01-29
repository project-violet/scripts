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
case 896:
case 1984:
case 1049:
case 2054:
case 996:
case 1023:
case 3692:
case 2980:
case 3029:
case 1598:
case 1790:
case 1270:
case 243:
case 1476:
case 3600:
case 422:
case 3693:
case 3912:
case 2749:
case 1869:
case 1277:
case 2121:
case 4007:
case 1059:
case 3529:
case 3936:
case 1606:
case 584:
case 1640:
case 2750:
case 3580:
case 2557:
case 2684:
case 2395:
case 1450:
case 1847:
case 1219:
case 3695:
case 957:
case 998:
case 3068:
case 2795:
case 2928:
case 3747:
case 1679:
case 3653:
case 3410:
case 639:
case 1579:
case 1089:
case 2546:
case 3568:
case 1614:
case 931:
case 431:
case 3934:
case 26:
case 929:
case 1307:
case 2435:
case 2335:
case 1256:
case 2511:
case 2212:
case 3021:
case 3281:
case 288:
case 487:
case 1012:
case 3512:
case 867:
case 3992:
case 3666:
case 2478:
case 1005:
case 1821:
case 1238:
case 685:
case 1291:
case 113:
case 3282:
case 1799:
case 3818:
case 4091:
case 600:
case 3171:
case 3008:
case 3402:
case 3498:
case 2278:
case 3732:
case 1343:
case 4087:
case 3383:
case 413:
case 3149:
case 4027:
case 1197:
case 2399:
case 1820:
case 3251:
case 3097:
case 1861:
case 688:
case 2772:
case 1526:
case 2413:
case 3927:
case 4033:
case 161:
case 944:
case 3699:
case 645:
case 3059:
case 3799:
case 184:
case 3890:
case 1184:
case 2145:
case 2098:
case 480:
case 1940:
case 218:
case 3434:
case 2745:
case 1091:
case 297:
case 2409:
case 3448:
case 3229:
case 2911:
case 3736:
case 421:
case 7:
case 4083:
case 1040:
case 1647:
case 3304:
case 3259:
case 824:
case 1611:
case 813:
case 3296:
case 2998:
case 2083:
case 49:
case 2216:
case 4053:
case 2241:
case 1141:
case 2938:
case 3060:
case 3354:
case 894:
case 2695:
case 2821:
case 1235:
case 1555:
case 310:
case 2454:
case 2378:
case 1358:
case 2388:
case 2690:
case 3521:
case 4003:
case 1189:
case 259:
case 3331:
case 1689:
case 3937:
case 2377:
case 1426:
case 1314:
case 3480:
case 518:
case 3626:
case 1048:
case 2129:
case 1705:
case 2544:
case 1749:
case 1880:
case 3467:
case 3096:
case 1972:
case 70:
case 3804:
case 3217:
case 350:
case 461:
case 230:
case 147:
case 3681:
case 3004:
case 3806:
case 2583:
case 3648:
case 3919:
case 1950:
case 1602:
case 1569:
case 3738:
case 3938:
case 2800:
case 630:
case 204:
case 3408:
case 1102:
case 1844:
case 2214:
case 1878:
case 94:
case 1363:
case 2743:
case 609:
case 4067:
case 3909:
case 2096:
case 1158:
case 3988:
case 457:
case 1840:
case 3763:
case 1498:
case 55:
case 340:
case 1041:
case 2952:
case 1192:
case 2873:
case 1808:
case 1510:
case 2502:
case 320:
case 502:
case 3406:
case 305:
case 3969:
case 3605:
case 3902:
case 2837:
case 1864:
case 1726:
case 1352:
case 463:
case 826:
case 1165:
case 2786:
case 1714:
case 3377:
case 806:
case 1760:
case 2199:
case 828:
case 325:
case 873:
case 2282:
case 2687:
case 126:
case 3930:
case 2723:
case 991:
case 311:
case 1136:
case 3007:
case 4070:
case 3898:
case 247:
case 1942:
case 1353:
case 1436:
case 3455:
case 1350:
case 2623:
case 3231:
case 2430:
case 3239:
case 2879:
case 1398:
case 1662:
case 1633:
case 2649:
case 2443:
case 3997:
case 2071:
case 2903:
case 2584:
case 4011:
case 2652:
case 2458:
case 3025:
case 2425:
case 2391:
case 2466:
case 1644:
case 3428:
case 1576:
case 2489:
case 56:
case 2093:
case 3624:
case 2591:
case 794:
case 1542:
case 2091:
case 608:
case 2840:
case 353:
case 833:
case 3661:
case 293:
case 1054:
case 3430:
case 2385:
case 2351:
case 3147:
case 1011:
case 844:
case 2880:
case 3847:
case 1388:
case 671:
case 315:
case 2707:
case 1444:
case 2748:
case 835:
case 2780:
case 2730:
case 2101:
case 3389:
case 137:
case 3853:
case 2703:
case 3072:
case 164:
case 2811:
case 2735:
case 3509:
case 1548:
case 1874:
case 2715:
case 1160:
case 562:
case 1939:
case 1342:
case 3014:
case 3523:
case 2653:
case 2220:
case 4060:
case 2088:
case 1632:
case 572:
case 2437:
case 3913:
case 2141:
case 150:
case 760:
case 2219:
case 3662:
case 3520:
case 1227:
case 747:
case 432:
case 2254:
case 1191:
case 1200:
case 656:
case 1589:
case 64:
case 1552:
case 62:
case 1206:
case 2721:
case 379:
case 3669:
case 3581:
case 3442:
case 1218:
case 3352:
case 1106:
case 691:
case 2829:
case 81:
case 722:
case 3361:
case 2740:
case 897:
case 3544:
case 3294:
case 556:
case 964:
case 3697:
case 1085:
case 818:
case 3287:
case 34:
case 928:
case 2492:
case 955:
case 845:
case 1600:
case 4036:
case 1480:
case 1783:
case 222:
case 1516:
case 2997:
case 1973:
case 175:
case 2635:
case 363:
case 2420:
case 246:
case 1038:
case 3265:
case 2642:
case 3444:
case 1093:
case 1868:
case 517:
case 2667:
case 3598:
case 2361:
case 3203:
case 2099:
case 2225:
case 52:
case 160:
case 2235:
case 3411:
case 3848:
case 3344:
case 2457:
case 2890:
case 834:
case 701:
case 1804:
case 366:
case 3189:
case 3405:
case 2552:
case 3614:
case 3734:
case 970:
case 2525:
case 695:
case 2917:
case 1180:
case 576:
case 654:
case 2372:
case 380:
case 1183:
case 2313:
case 2529:
case 933:
case 1351:
case 3786:
case 215:
case 2185:
case 493:
case 2518:
case 3374:
case 751:
case 174:
case 2360:
case 1195:
case 3557:
case 4017:
case 496:
case 479:
case 129:
case 2725:
case 3833:
case 641:
case 212:
case 420:
case 727:
case 2213:
case 1508:
case 2566:
case 958:
case 3740:
case 4072:
case 138:
case 912:
case 1:
case 1084:
case 2171:
case 4023:
case 3173:
case 1485:
case 3745:
case 902:
case 2661:
case 1304:
case 1560:
case 3940:
case 189:
case 1181:
case 690:
case 541:
case 110:
case 642:
case 1639:
case 724:
case 2157:
case 2113:
case 2462:
case 1665:
case 2785:
case 472:
case 1163:
case 1831:
case 43:
case 879:
case 1706:
case 2357:
case 3530:
case 1788:
case 1605:
case 1957:
case 3654:
case 994:
case 1505:
case 2561:
case 2532:
case 205:
case 2100:
case 20:
case 419:
case 1269:
case 1810:
case 236:
case 2105:
case 424:
case 3285:
case 1932:
case 3721:
case 1959:
case 2627:
case 1329:
case 41:
case 2073:
case 1657:
case 3540:
case 1991:
case 1004:
case 3270:
case 3979:
case 224:
case 756:
case 2012:
case 1234:
case 1052:
case 65:
case 344:
case 963:
case 2019:
case 365:
case 2924:
case 2579:
case 2548:
case 681:
case 2527:
case 1127:
case 3390:
case 792:
case 3946:
case 3958:
case 2159:
case 3353:
case 1019:
case 1906:
case 14:
case 3190:
case 4077:
case 574:
case 2858:
case 1381:
case 3505:
case 296:
case 3760:
case 2790:
case 1420:
case 3441:
case 1914:
case 1651:
case 69:
case 890:
case 1796:
case 509:
case 4081:
case 1690:
case 2737:
case 2951:
case 2710:
case 3873:
case 381:
case 3954:
case 2657:
case 3688:
case 232:
case 796:
case 3917:
case 1658:
case 79:
case 2281:
case 4071:
case 977:
case 1452:
case 2612:
case 785:
case 2590:
case 2555:
case 854:
case 3295:
case 2688:
case 2807:
case 404:
case 298:
case 2414:
case 3069:
case 485:
case 118:
case 411:
case 3655:
case 2301:
case 2275:
case 2371:
case 3052:
case 2662:
case 349:
case 2784:
case 3460:
case 3079:
case 1281:
case 3812:
case 4002:
case 665:
case 3715:
case 407:
case 3058:
case 809:
case 752:
case 2833:
case 4022:
case 3689:
case 3706:
case 3670:
case 1514:
case 1494:
case 3574:
case 1145:
case 2467:
case 2930:
case 0:
case 2774:
case 2209:
case 1137:
case 1248:
case 388:
case 3474:
case 2565:
case 1833:
case 1408:
case 2651:
case 249:
case 139:
case 2500:
case 2882:
case 1199:
case 2228:
case 3824:
case 587:
case 1536:
case 805:
case 1039:
case 773:
case 3321:
case 3683:
case 1881:
case 3883:
case 821:
case 3126:
case 423:
case 640:
case 1382:
case 2193:
case 1842:
case 3077:
case 2326:
case 341:
case 2781:
case 2926:
case 3267:
case 3735:
case 2788:
case 2031:
case 2330:
case 837:
case 3363:
case 1294:
case 1305:
case 2221:
case 2757:
case 533:
case 1090:
case 2899:
case 1954:
case 317:
case 1348:
case 1877:
case 2110:
case 2939:
case 1702:
case 1228:
case 2337:
case 3741:
case 1409:
case 3668:
case 1378:
case 332:
case 2668:
case 3983:
case 285:
case 434:
case 1024:
case 1142:
case 2643:
case 3713:
case 59:
case 2140:
case 1121:
case 3703:
case 868:
case 3660:
case 3583:
case 190:
case 158:
case 3511:
case 2343:
case 2769:
case 1029:
case 3071:
case 2625:
case 3310:
case 1700:
case 2403:
case 2151:
case 1898:
case 2055:
case 3443:
case 3525:
case 1558:
case 3664:
case 2342:
case 956:
case 2406:
case 1535:
case 954:
case 3730:
case 538:
case 3309:
case 1524:
case 804:
case 3271:
case 3894:
case 16:
case 988:
case 3392:
case 1284:
case 1893:
case 1623:
case 146:
case 169:
case 2186:
case 1379:
case 3247:
case 1584:
case 1087:
case 173:
case 2775:
case 427:
case 2506:
case 3803:
case 3603:
case 1727:
case 3657:
case 1009:
case 1849:
case 2576:
case 2125:
case 3167:
case 2798:
case 1237:
case 3765:
case 731:
case 1222:
case 2065:
case 3418:
case 537:
case 1255:
case 4062:
case 3815:
case 2820:
case 1669:
case 2614:
case 328:
case 1713:
case 1851:
case 2865:
case 3895:
case 999:
case 1469:
case 4079:
case 3264:
case 387:
case 2056:
case 3341:
case 2237:
case 2766:
case 820:
case 3554:
case 3963:
case 2355:
case 1080:
case 2300:
case 3609:
case 3559:
case 4037:
case 4032:
case 603:
case 3342:
case 3834:
case 528:
case 3019:
case 2042:
case 2700:
case 2793:
case 1267:
case 377:
case 2154:
case 2909:
case 1622:
case 1114:
case 862:
case 2036:
case 2832:
case 2268:
case 3742:
case 2223:
case 2030:
case 408:
case 1566:
case 2608:
case 1731:
case 2340:
case 470:
case 1507:
case 1612:
case 2095:
case 648:
case 2090:
case 3137:
case 2744:
case 1577:
case 1721:
case 1376:
case 1815:
case 8:
case 919:
case 1499:
case 3148:
case 2726:
case 3785:
case 2536:
case 251:
case 2206:
case 1155:
case 1261:
case 3012:
case 1663:
case 3140:
case 3439:
case 3450:
case 1500:
case 714:
case 863:
case 779:
case 615:
case 776:
case 1427:
case 2624:
case 2691:
case 57:
case 3503:
case 2205:
case 1301:
case 2482:
case 274:
case 116:
case 1751:
case 1138:
case 2137:
case 3082:
case 816:
case 2027:
case 598:
case 455:
case 54:
case 2727:
case 1900:
case 1892:
case 426:
case 428:
case 370:
case 1813:
case 2610:
case 755:
case 3888:
case 1580:
case 48:
case 1257:
case 1621:
case 3645:
case 510:
case 735:
case 2069:
case 2633:
case 223:
case 2809:
case 876:
case 2572:
case 3397:
case 1827:
case 2146:
case 3400:
case 2946:
case 3968:
case 390:
case 1694:
case 984:
case 3620:
case 13:
case 1817:
case 1738:
case 3348:
case 3642:
case 2037:
case 1720:
case 183:
case 3717:
case 662:
case 3311:
case 2016:
case 2828:
case 3440:
case 2852:
case 2310:
case 1634:
case 2434:
case 1712:
case 3155:
case 2291:
case 3104:
case 2791:
case 1134:
case 1929:
case 2864:
case 459:
case 2480:
case 1752:
case 2947:
case 1565:
case 3056:
case 2892:
case 1098:
case 68:
case 2712:
case 378:
case 4021:
case 1331:
case 2589:
case 968:
case 2835:
case 1545:
case 709:
case 1433:
case 2693:
case 429:
case 2932:
case 3133:
case 1901:
case 540:
case 1154:
case 1513:
case 848:
case 1416:
case 2164:
case 1666:
case 3543:
case 1803:
case 1672:
case 1931:
case 3878:
case 815:
case 3822:
case 132:
case 3719:
case 360:
case 511:
case 3089:
case 1685:
case 2296:
case 201:
case 3820:
case 4034:
case 2547:
case 2720:
case 1904:
case 2907:
case 9:
case 19:
case 3193:
case 1000:
case 4069:
case 3640:
case 217:
case 1650:
case 337:
case 3475:
case 2901:
case 2942:
case 861:
case 1457:
case 3725:
case 1707:
case 1015:
case 2196:
case 446:
case 2014:
case 2974:
case 1077:
case 2674:
case 3420:
case 2309:
case 822:
case 3379:
case 335:
case 1937:
case 386:
case 616:
case 2315:
case 2839:
case 1819:
case 3494:
case 2023:
case 3225:
case 1976:
case 2869:
case 492:
case 75:
case 1428:
case 2397:
case 2771:
case 1044:
case 1300:
case 82:
case 88:
case 1645:
case 3535:
case 1440:
case 677:
case 1963:
case 277:
case 3663:
case 2569:
case 273:
case 549:
case 1276:
case 3335:
case 3125:
case 3057:
case 2554:
case 392:
case 1071:
case 1855:
case 3036:
case 892:
case 1462:
case 2321:
case 1264:
case 1107:
case 2158:
case 1968:
case 3093:
case 2419:
case 3490:
case 2567:
case 37:
case 2813:
case 1159:
case 3183:
case 316:
case 702:
case 2198:
case 2006:
case 817:
case 3962:
case 3751:
case 3015:
case 961:
case 130:
case 3136:
case 2421:
case 2967:
case 935:
case 1775:
case 1057:
case 1150:
case 2450:
case 3984:
case 1253:
case 1434:
case 149:
case 3054:
case 2190:
case 2680:
case 1118:
case 1896:
case 168:
case 856:
case 452:
case 3484:
case 2752:
case 3974:
case 267:
case 1311:
case 1613:
case 486:
case 2183:
case 289:
case 827:
case 670:
case 2200:
case 2262:
case 579:
case 416:
case 1809:
case 637:
case 4080:
case 3680:
case 3211:
case 2857:
case 2761:
case 1101:
case 3980:
case 2404:
case 60:
case 769:
case 4054:
case 3:
case 3794:
case 1215:
case 3481:
case 1899:
case 2733:
case 2577:
case 2217:
case 2306:
case 3516:
case 3369:
case 3592:
case 1119:
case 438:
case 1980:
case 3950:
case 351:
case 1442:
case 2755:
case 3767:
case 2534:
case 3223:
case 3634:
case 3632:
case 3593:
case 3686:
case 2628:
case 3528:
case 66:
case 959:
case 3499:
case 2923:
case 2138:
case 3371:
case 2538:
case 1854:
case 4043:
case 2916:
case 97:
case 1016:
case 3244:
case 3625:
case 3519:
case 115:
case 112:
case 2945:
case 1962:
case 3034:
case 165:
case 334:
case 1487:
case 2232:
case 3492:
case 3248:
case 3827:
case 569:
case 2077:
case 663:
case 1541:
case 4016:
case 286:
case 659:
case 2346:
case 2586:
case 3756:
case 3143:
case 87:
case 3022:
case 393:
case 3214:
case 1774:
case 1461:
case 396:
case 1603:
case 563:
case 2442:
case 3571:
case 3129:
case 1064:
case 3546:
case 870:
case 1313:
case 3051:
case 1695:
case 1018:
case 580:
case 2637:
case 3607:
case 2120:
case 72:
case 93:
case 453:
case 3840:
case 1953:
case 1744:
case 4041:
case 2131:
case 1750:
case 810:
case 607:
case 800:
case 2918:
case 3623:
case 2123:
case 1860:
case 1681:
case 1456:
case 3561:
case 3110:
case 191:
case 2045:
case 361:
case 2327:
case 271:
case 595:
case 2976:
case 2988:
case 1960:
case 782:
case 2178:
case 3990:
case 3403:
case 195:
case 4024:
case 3156:
case 2038:
case 1933:
case 3153:
case 308:
case 474:
case 922:
case 2079:
case 433:
case 92:
case 78:
case 2593:
case 3425:
case 291:
case 2411:
case 3317:
case 3855:
case 4073:
case 3617:
case 2350:
case 2556:
case 2009:
case 667:
case 3850:
case 2147:
case 2678:
case 1920:
case 280:
case 3588:
case 1992:
case 2109:
case 2531:
case 324:
case 3177:
case 658:
case 2702:
case 683:
case 643:
case 348:
case 3896:
case 1312:
case 2694:
case 1167:
case 1095:
case 2438:
case 738:
case 2943:
case 2823:
case 1370:
case 993:
case 450:
case 449:
case 1546:
case 989:
case 32:
case 2070:
case 2756:
case 1217:
case 2475:
case 2024:
case 883:
case 2738:
case 1951:
case 2490:
case 287:
case 1407:
case 171:
case 802:
case 2495:
case 882:
case 1723:
case 1646:
case 3879:
case 447:
case 2808:
case 951:
case 1156:
case 1625:
case 2483:
case 1850:
case 3977:
case 1828:
case 3678:
case 3677:
case 1216:
case 2287:
case 3372:
case 884:
case 314:
case 2615:
case 2050:
case 90:
case 2060:
case 3180:
case 716:
case 3477:
case 1585:
case 3771:
case 3959:
case 3982:
case 3001:
case 3327:
case 2968:
case 669:
case 524:
case 2570:
case 2087:
case 610:
case 2650:
case 1288:
case 1413:
case 27:
case 1927:
case 829:
case 986:
case 96:
case 326:
case 762:
case 4074:
case 2888:
case 568:
case 3630:
case 2559:
case 1354:
case 775:
case 106:
case 1402:
case 2973:
case 131:
case 100:
case 167:
case 1883:
case 2207:
case 2165:
case 3388:
case 2272:
case 726:
case 1207:
case 4094:
case 1066:
case 4050:
case 3098:
case 2717:
case 1008:
case 2173:
case 2719:
case 1322:
case 875:
case 1922:
case 633:
case 3943:
case 2922:
case 1190:
case 604:
case 1905:
case 3591:
case 575:
case 3636:
case 2836:
case 799:
case 1446:
case 2416:
case 1226:
case 2367:
case 915:
case 4004:
case 3386:
case 23:
case 2535:
case 4093:
case 188:
case 2685:
case 678:
case 279:
case 3241:
case 2114:
case 1495:
case 916:
case 3238:
case 3935:
case 135:
case 784:
case 668:
case 1243:
case 1553:
case 1258:
case 398:
case 1347:
case 2658:
case 3359:
case 1075:
case 2064:
case 1977:
case 2396:
case 1675:
case 354:
case 1425:
case 2981:
case 2040:
case 531:
case 2965:
case 193:
case 3576:
case 3332:
case 2488:
case 178:
case 1684:
case 1478:
case 103:
case 179:
case 843:
case 2941:
case 522:
case 2553:
case 3198:
case 3566:
case 2931:
case 3856:
case 2459:
case 1909:
case 1302:
case 3748:
case 3944:
case 389:
case 612:
case 4064:
case 2898:
case 1777:
case 3478:
case 2654:
case 2018:
case 2305:
case 471:
case 2799:
case 124:
case 3787:
case 3916:
case 552:
case 29:
case 425:
case 1083:
case 295:
case 3340:
case 2964:
case 1224:
case 1068:
case 3793:
case 1897:
case 3075:
case 2815:
case 3708:
case 1027:
case 2333:
case 1025:
case 2558:
case 3297:
case 1730:
case 519:
case 1391:
case 323:
case 3961:
case 1103:
case 3553:
case 2704:
case 3185:
case 2877:
case 1915:
case 1412:
case 2106:
case 3586:
case 1483:
case 2519:
case 1779:
case 1680:
case 1126:
case 2349:
case 3205:
case 3424:
case 1231:
case 1782:
case 3754:
case 2816:
case 3575:
case 3362:
case 1395:
case 2279:
case 3495:
case 2842:
case 3404:
case 1053:
case 2286:
case 606:
case 2611:
case 2444:
case 3445:
case 644:
case 1088:
case 943:
case 3675:
case 1530:
case 3365:
case 3779:
case 301:
case 2632:
case 1315:
case 1740:
case 1086:
case 1164:
case 1609:
case 1058:
case 2393:
case 4031:
case 1368:
case 2053:
case 521:
case 2175:
case 252:
case 1447:
case 2908:
case 1586:
case 2886:
case 248:
case 2994:
case 940:
case 838:
case 2893:
case 1519:
case 50:
case 283:
case 1364:
case 3863:
case 1282:
case 11:
case 1531:
case 282:
case 733:
case 2238:
case 1400:
case 2906:
case 2996:
case 2493:
case 2676:
case 2085:
case 2497:
case 231:
case 1567:
case 3885:
case 2838:
case 1502:
case 3805:
case 3704:
case 276:
case 367:
case 1918:
case 3931:
case 1902:
case 2822:
case 260:
case 851:
case 2451:
case 551:
case 3370:
case 1876:
case 2312:
case 3749:
case 1715:
case 1823:
case 3859:
case 3611:
case 3590:
case 1344:
case 3142:
case 1003:
case 1943:
case 506:
case 2005:
case 1104:
case 2107:
case 2760:
case 2124:
case 3644:
case 807:
case 3578:
case 2370:
case 1593:
case 2431:
case 3714:
case 1335:
case 352:
case 3483:
case 3672:
case 3301:
case 221:
case 2285:
case 3684:
case 1588:
case 4056:
case 3084:
case 1149:
case 1654:
case 895:
case 275:
case 2226:
case 3671:
case 198:
case 948:
case 2671:
case 3222:
case 2644:
case 2867:
case 839:
case 1111:
case 3298:
case 3773:
case 2464:
case 4028:
case 172:
case 2246:
case 3216:
case 3457:
case 3101:
case 2574:
case 1853:
case 3755:
case 1515:
case 3846:
case 1033:
case 2705:
case 1465:
case 2989:
case 2423:
case 3435:
case 2000:
case 2656:
case 679:
case 2029:
case 194:
case 2142:
case 2211:
case 3957:
case 2913:
case 152:
case 1464:
case 2484:
case 2875:
case 3775:
case 3398:
case 302:
case 3777:
case 3032:
case 2258:
case 932:
case 3710:
case 1969:
case 3594:
case 3458:
case 2881:
case 2539:
case 2845:
case 3312:
case 435:
case 535:
case 1170:
case 2215:
case 24:
case 210:
case 4092:
case 1917:
case 2229:
case 578:
case 3334:
case 3650:
case 2452:
case 3160:
case 1296:
case 1538:
case 3758:
case 2424:
case 672:
case 1766:
case 1691:
case 31:
case 2015:
case 244:
case 2753:
case 336:
case 2436:
case 3210:
case 3228:
case 871:
case 532:
case 3305:
case 1648:
case 1652:
case 157:
case 2184:
case 3622:
case 3973:
case 465:
case 710:
case 1710:
case 3694:
case 3466:
case 3230:
case 3253:
case 4:
case 3064:
case 3821:
case 1522:
case 1764:
case 529:
case 1664:
case 2669:
case 2648:
case 3328:
case 3396:
case 1916:
case 239:
case 1247:
case 133:
case 1198:
case 3838:
case 3438:
case 1528:
case 2332:
case 2812:
case 3991:
case 2283:
case 514:
case 2613:
case 3367:
case 650:
case 1338:
case 2601:
case 1411:
case 707:
case 2709:
case 1836:
case 555:
case 306:
case 2001:
case 513:
case 3674:
case 2017:
case 3778:
case 1148:
case 3604:
case 1325:
case 2722:
case 3062:
case 3652:
case 3707:
case 2253:
case 3596:
case 1636:
case 3860:
case 391:
case 1194:
case 1241:
case 3393:
case 219:
case 1437:
case 2453:
case 3240:
case 2189:
case 1501:
case 460:
case 494:
case 941:
case 1816:
case 2028:
case 1034:
case 2746:
case 581:
case 1323:
case 3808:
case 2264:
case 2659:
case 1168:
case 2127:
case 3326:
case 653:
case 3953:
case 85:
case 1983:
case 73:
case 4059:
case 2078:
case 2094:
case 1435:
case 441:
case 2025:
case 3500:
case 1146:
case 1441:
case 2179:
case 1591:
case 1610:
case 3087:
case 2432:
case 703:
case 3964:
case 1935:
case 1467:
case 592:
case 619:
case 3213:
case 3723:
case 3845:
case 1123:
case 1320:
case 3346:
case 1755:
case 586:
case 2641:
case 1392:
case 973:
case 2170:
case 3138:
case 2082:
case 4049:
case 1875:
case 3910:
case 2797:
case 1273:
case 946:
case 2256:
case 2957:
case 708:
case 2067:
case 2061:
case 2801:
case 2871:
case 1475:
case 2299:
case 2044:
case 2751:
case 1725:
case 98:
case 1533:
case 3324:
case 684:
case 3130:
case 3876:
case 858:
case 1076:
case 508:
case 1454:
case 1561:
case 1913:
case 1250:
case 985:
case 3449:
case 3123:
case 969:
case 1072:
case 2135:
case 3091:
case 3504:
case 1736:
case 464:
case 1067:
case 3108:
case 1021:
case 162:
case 3649:
case 1661:
case 1698:
case 2948:
case 3691:
case 1824:
case 1292:
case 1628:
case 3249:
case 140:
case 3159:
case 3731:
case 1667:
case 3045:
case 2166:
case 605:
case 3175:
case 1867:
case 2161:
case 2995:
case 3870:
case 3488:
case 466:
case 571:
case 3769:
case 436:
case 934:
case 3255:
case 3366:
case 3656:
case 2363:
case 3288:
case 4013:
case 1839:
case 253:
case 3106:
case 322:
case 1955:
case 2136:
case 3375:
case 1506:
case 3906:
case 2057:
case 1178:
case 3551:
case 262:
case 3349:
case 35:
case 3035:
case 2599:
case 1753:
case 819:
case 1835:
case 1544:
case 1415:
case 2118:
case 3579:
case 1511:
case 1895:
case 2787:
case 2298:
case 2729:
case 601:
case 2149:
case 1638:
case 917:
case 3011:
case 554:
case 2698:
case 706:
case 3191:
case 1583:
case 534:
case 2222:
case 1417:
case 4055:
case 4063:
case 3391:
case 734:
case 1938:
case 2972:
case 2104:
case 1481:
case 2295:
case 3828:
case 4019:
case 1757:
case 1007:
case 594:
case 3682:
case 2354:
case 3146:
case 766:
case 1458:
case 234:
case 482:
case 1551:
case 1997:
case 2830:
case 2156:
case 456:
case 371:
case 4044:
case 983:
case 4052:
case 1384:
case 176:
case 1944:
case 3493:
case 2874:
case 1317:
case 2739:
case 3426:
case 3283:
case 3816:
case 3903:
case 3970:
case 1359:
case 1445:
case 2970:
case 38:
case 3667:
case 242:
case 2844:
case 2929:
case 1324:
case 309:
case 3046:
case 1182:
case 2734:
case 2783:
case 778:
case 1139:
case 2265:
case 1670:
case 4075:
case 2318:
case 2472:
case 589:
case 717:
case 987:
case 758:
case 1387:
case 2177:
case 2046:
case 3676:
case 415:
case 30:
case 1421:
case 1385:
case 2878:
case 4025:
case 107:
case 801:
case 1205:
case 241:
case 1193:
case 3651:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1674968401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,];
var gg_b = "1674968401/";

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
