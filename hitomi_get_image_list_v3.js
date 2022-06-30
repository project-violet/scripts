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
case 494:
case 867:
case 1263:
case 2025:
case 1510:
case 725:
case 3275:
case 507:
case 294:
case 1256:
case 1750:
case 2684:
case 1919:
case 1002:
case 3962:
case 2144:
case 1719:
case 805:
case 1800:
case 3568:
case 1894:
case 878:
case 443:
case 3795:
case 1226:
case 590:
case 1533:
case 1477:
case 172:
case 2591:
case 1706:
case 3816:
case 1973:
case 1175:
case 623:
case 1956:
case 333:
case 1538:
case 979:
case 3934:
case 1092:
case 3980:
case 2260:
case 1365:
case 2451:
case 3844:
case 207:
case 1967:
case 2746:
case 0:
case 3642:
case 1718:
case 849:
case 520:
case 1941:
case 2697:
case 1770:
case 2616:
case 2716:
case 2847:
case 2212:
case 1799:
case 581:
case 2497:
case 2584:
case 484:
case 3112:
case 2232:
case 807:
case 3697:
case 888:
case 3670:
case 3359:
case 2107:
case 58:
case 3560:
case 2100:
case 2579:
case 3551:
case 3618:
case 2224:
case 608:
case 1400:
case 1687:
case 1556:
case 3378:
case 2603:
case 3825:
case 1281:
case 3070:
case 184:
case 2353:
case 2251:
case 1180:
case 2044:
case 3566:
case 3858:
case 1465:
case 2823:
case 2563:
case 1503:
case 1830:
case 889:
case 2632:
case 1051:
case 576:
case 952:
case 1195:
case 3058:
case 654:
case 350:
case 3626:
case 2052:
case 3953:
case 3766:
case 63:
case 2832:
case 3253:
case 1593:
case 2233:
case 211:
case 1402:
case 1025:
case 2055:
case 3564:
case 722:
case 146:
case 1859:
case 3421:
case 1166:
case 2763:
case 3835:
case 1056:
case 1042:
case 3658:
case 1568:
case 3896:
case 2122:
case 1858:
case 2390:
case 174:
case 330:
case 3668:
case 445:
case 3898:
case 4050:
case 3132:
case 121:
case 528:
case 2949:
case 1126:
case 299:
case 1841:
case 2751:
case 2241:
case 3833:
case 122:
case 1664:
case 2825:
case 3046:
case 2952:
case 907:
case 3078:
case 1265:
case 2520:
case 2919:
case 2668:
case 3510:
case 3884:
case 3303:
case 86:
case 1615:
case 1494:
case 3:
case 2779:
case 3316:
case 476:
case 2292:
case 2013:
case 8:
case 2786:
case 4095:
case 1534:
case 1067:
case 376:
case 3394:
case 919:
case 2486:
case 2334:
case 2738:
case 2554:
case 983:
case 3914:
case 26:
case 2020:
case 3950:
case 1676:
case 166:
case 2928:
case 1373:
case 1262:
case 1618:
case 263:
case 4068:
case 2803:
case 1463:
case 374:
case 2689:
case 1022:
case 1117:
case 2851:
case 4087:
case 3172:
case 3283:
case 2373:
case 3532:
case 1561:
case 2518:
case 2473:
case 3229:
case 3433:
case 279:
case 2861:
case 2886:
case 2481:
case 3849:
case 334:
case 3005:
case 3789:
case 262:
case 3102:
case 3185:
case 2895:
case 2218:
case 2151:
case 669:
case 1108:
case 3111:
case 2504:
case 120:
case 3139:
case 2240:
case 1543:
case 3905:
case 1821:
case 2440:
case 1587:
case 879:
case 3737:
case 3195:
case 641:
case 934:
case 3751:
case 3637:
case 1849:
case 3475:
case 585:
case 3745:
case 3067:
case 3166:
case 2921:
case 3652:
case 578:
case 1043:
case 1212:
case 1446:
case 302:
case 935:
case 2498:
case 3814:
case 1415:
case 591:
case 1644:
case 1325:
case 2628:
case 1269:
case 2312:
case 1266:
case 592:
case 850:
case 156:
case 1845:
case 3226:
case 3025:
case 2250:
case 2607:
case 415:
case 957:
case 2279:
case 89:
case 3747:
case 3812:
case 3773:
case 3591:
case 1501:
case 3870:
case 516:
case 116:
case 2396:
case 1807:
case 1833:
case 3306:
case 3160:
case 382:
case 2975:
case 2327:
case 1370:
case 2091:
case 2936:
case 4074:
case 1248:
case 1289:
case 511:
case 2226:
case 766:
case 2023:
case 3192:
case 2377:
case 2640:
case 2154:
case 595:
case 1685:
case 3493:
case 3399:
case 1754:
case 3358:
case 1704:
case 2197:
case 965:
case 3823:
case 3585:
case 68:
case 2581:
case 2084:
case 886:
case 985:
case 3594:
case 2977:
case 544:
case 2493:
case 2284:
case 1236:
case 3415:
case 3431:
case 1006:
case 2706:
case 3971:
case 375:
case 1394:
case 2653:
case 2328:
case 3361:
case 552:
case 3963:
case 3159:
case 1557:
case 1146:
case 1434:
case 1744:
case 1529:
case 2606:
case 147:
case 1920:
case 2778:
case 710:
case 3098:
case 84:
case 1540:
case 2627:
case 3490:
case 3955:
case 653:
case 3922:
case 1671:
case 1124:
case 138:
case 882:
case 3265:
case 167:
case 620:
case 1305:
case 281:
case 3177:
case 927:
case 2920:
case 895:
case 389:
case 779:
case 1270:
case 363:
case 3087:
case 2455:
case 3592:
case 1072:
case 753:
case 2620:
case 1884:
case 2340:
case 3225:
case 2169:
case 2707:
case 3679:
case 3335:
case 3076:
case 3288:
case 3309:
case 3505:
case 2733:
case 488:
case 1482:
case 3593:
case 3813:
case 1880:
case 2288:
case 3183:
case 2082:
case 1878:
case 4042:
case 1057:
case 2660:
case 2005:
case 2760:
case 3537:
case 1625:
case 407:
case 1447:
case 118:
case 857:
case 2757:
case 1234:
case 80:
case 2462:
case 1458:
case 318:
case 2247:
case 2258:
case 2910:
case 372:
case 2117:
case 3262:
case 1183:
case 3610:
case 2850:
case 1862:
case 598:
case 2116:
case 2860:
case 3761:
case 27:
case 336:
case 2885:
case 6:
case 1221:
case 3928:
case 1143:
case 4092:
case 2671:
case 326:
case 2781:
case 3984:
case 3777:
case 3310:
case 2638:
case 1254:
case 229:
case 2017:
case 2364:
case 1156:
case 3024:
case 4024:
case 973:
case 1749:
case 1337:
case 2411:
case 426:
case 1815:
case 2090:
case 1461:
case 2204:
case 2038:
case 3115:
case 2820:
case 3211:
case 1383:
case 1654:
case 535:
case 2862:
case 1619:
case 3100:
case 2836:
case 3851:
case 3212:
case 1223:
case 3998:
case 4030:
case 3543:
case 2808:
case 2024:
case 2194:
case 2408:
case 2274:
case 454:
case 2195:
case 3627:
case 3993:
case 3917:
case 3671:
case 906:
case 4064:
case 1717:
case 1488:
case 1872:
case 4035:
case 2070:
case 3705:
case 1491:
case 2357:
case 2359:
case 2678:
case 1308:
case 497:
case 1306:
case 2469:
case 129:
case 139:
case 1080:
case 2001:
case 1548:
case 2190:
case 3734:
case 2841:
case 3791:
case 1403:
case 2478:
case 611:
case 3837:
case 2215:
case 3638:
case 2314:
case 3738:
case 2187:
case 750:
case 2267:
case 285:
case 1735:
case 1846:
case 342:
case 1094:
case 2176:
case 2109:
case 873:
case 542:
case 1679:
case 2065:
case 1827:
case 2916:
case 1984:
case 1726:
case 666:
case 2911:
case 643:
case 3513:
case 1682:
case 812:
case 2427:
case 1739:
case 2310:
case 1651:
case 2163:
case 31:
case 1241:
case 1214:
case 3470:
case 1786:
case 580:
case 2783:
case 2889:
case 1741:
case 706:
case 238:
case 3015:
case 2423:
case 1959:
case 2222:
case 1469:
case 1526:
case 996:
case 1431:
case 2178:
case 3968:
case 297:
case 2097:
case 655:
case 2578:
case 1083:
case 2301:
case 2003:
case 1099:
case 796:
case 3768:
case 268:
case 3542:
case 3700:
case 1790:
case 13:
case 1935:
case 3778:
case 1909:
case 2354:
case 1197:
case 2750:
case 545:
case 2955:
case 2480:
case 3397:
case 17:
case 362:
case 2967:
case 2602:
case 2692:
case 3492:
case 3244:
case 1794:
case 2734:
case 110:
case 3357:
case 1453:
case 2731:
case 2622:
case 2452:
case 491:
case 2516:
case 2875:
case 1915:
case 319:
case 2961:
case 2343:
case 1163:
case 2634:
case 999:
case 3368:
case 1318:
case 945:
case 286:
case 3605:
case 762:
case 2935:
case 1691:
case 3119:
case 3204:
case 1037:
case 2238:
case 4009:
case 3839:
case 1391:
case 387:
case 2937:
case 1114:
case 1229:
case 1496:
case 2604:
case 2755:
case 3398:
case 2996:
case 3952:
case 3020:
case 2445:
case 852:
case 3755:
case 3577:
case 66:
case 2049:
case 1775:
case 2409:
case 541:
case 523:
case 1710:
case 1118:
case 1280:
case 2079:
case 1598:
case 1820:
case 1353:
case 610:
case 903:
case 3352:
case 2939:
case 2680:
case 930:
case 3736:
case 719:
case 3085:
case 3193:
case 311:
case 3509:
case 2319:
case 1015:
case 1606:
case 3939:
case 2784:
case 3066:
case 1246:
case 1605:
case 2121:
case 3841:
case 2956:
case 1924:
case 3712:
case 1499:
case 3462:
case 3169:
case 1981:
case 2503:
case 2881:
case 456:
case 1397:
case 1204:
case 909:
case 327:
case 1310:
case 2777:
case 3176:
case 1210:
case 457:
case 1907:
case 1658:
case 2333:
case 2291:
case 3223:
case 3907:
case 1443:
case 2872:
case 1055:
case 2331:
case 1294:
case 2019:
case 2244:
case 2130:
case 2923:
case 789:
case 1093:
case 763:
case 959:
case 2078:
case 3337:
case 292:
case 3604:
case 3147:
case 1828:
case 673:
case 1300:
case 3409:
case 130:
case 1222:
case 2710:
case 3390:
case 1211:
case 417:
case 2:
case 3291:
case 967:
case 2261:
case 671:
case 1623:
case 1714:
case 3717:
case 1572:
case 3053:
case 1694:
case 3873:
case 3503:
case 943:
case 1442:
case 3218:
case 3224:
case 3704:
case 410:
case 3846:
case 3819:
case 1532:
case 2370:
case 1660:
case 1578:
case 1866:
case 3232:
case 3702:
case 2536:
case 3254:
case 3272:
case 11:
case 2838:
case 3911:
case 3887:
case 2392:
case 4062:
case 1960:
case 559:
case 3231:
case 715:
case 3355:
case 71:
case 94:
case 1810:
case 2134:
case 487:
case 1050:
case 98:
case 88:
case 3941:
case 1344:
case 3191:
case 1856:
case 2973:
case 1638:
case 639:
case 3848:
case 3018:
case 29:
case 1170:
case 1203:
case 3055:
case 2289:
case 3290:
case 2479:
case 2552:
case 997:
case 340:
case 123:
case 3988:
case 2211:
case 1886:
case 1848:
case 677:
case 573:
case 3818:
case 1171:
case 1201:
case 2110:
case 2605:
case 1424:
case 1954:
case 2262:
case 3859:
case 1559:
case 2032:
case 3279:
case 1121:
case 3632:
case 3023:
case 177:
case 4004:
case 860:
case 3862:
case 3113:
case 3713:
case 1384:
case 3407:
case 1700:
case 3022:
case 980:
case 2582:
case 2898:
case 912:
case 2302:
case 432:
case 2285:
case 1389:
case 1425:
case 553:
case 713:
case 128:
case 3879:
case 2883:
case 3255:
case 3548:
case 2487:
case 876:
case 3286:
case 1081:
case 920:
case 676:
case 2069:
case 2643:
case 2853:
case 1566:
case 182:
case 2857:
case 3200:
case 3138:
case 1624:
case 2128:
case 2398:
case 3775:
case 485:
case 3425:
case 4017:
case 3072:
case 1071:
case 151:
case 1428:
case 321:
case 594:
case 1427:
case 295:
case 2074:
case 4053:
case 2360:
case 697:
case 3752:
case 368:
case 1612:
case 2610:
case 1868:
case 3852:
case 2499:
case 232:
case 2718:
case 1933:
case 240:
case 1288:
case 1132:
case 3512:
case 938:
case 3508:
case 3126:
case 3496:
case 2666:
case 324:
case 740:
case 537:
case 3124:
case 2458:
case 4067:
case 1009:
case 3393:
case 847:
case 3474:
case 2548:
case 59:
case 1208:
case 3437:
case 2253:
case 3912:
case 3035:
case 2648:
case 2188:
case 2670:
case 992:
case 126:
case 280:
case 1947:
case 1393:
case 1983:
case 2309:
case 1185:
case 3263:
case 2236:
case 1295:
case 1200:
case 75:
case 1028:
case 2424:
case 2776:
case 3091:
case 1279:
case 1096:
case 625:
case 73:
case 2767:
case 3936:
case 2036:
case 468:
case 3910:
case 3071:
case 2336:
case 3332:
case 3948:
case 2550:
case 3345:
case 3416:
case 259:
case 1961:
case 2404:
case 2600:
case 264:
case 3710:
case 2543:
case 3822:
case 2460:
case 2124:
case 1881:
case 107:
case 1934:
case 1243:
case 1173:
case 2470:
case 866:
case 1864:
case 2753:
case 1354:
case 939:
case 512:
case 1445:
case 2677:
case 875:
case 1441:
case 3786:
case 3810:
case 844:
case 2742:
case 3902:
case 4083:
case 624:
case 3694:
case 2417:
case 320:
case 3913:
case 1877:
case 1319:
case 3300:
case 3052:
case 360:
case 3706:
case 2685:
case 3995:
case 237:
case 1537:
case 2217:
case 3064:
case 436:
case 3875:
case 2870:
case 2407:
case 4052:
case 158:
case 3136:
case 1061:
case 3944:
case 2157:
case 1375:
case 2219:
case 2577:
case 2413:
case 308:
case 2749:
case 3864:
case 1335:
case 119:
case 2835:
case 1176:
case 2332:
case 3036:
case 2201:
case 1338:
case 1813:
case 3348:
case 2583:
case 3958:
case 380:
case 602:
case 3624:
case 3454:
case 90:
case 3089:
case 2500:
case 4023:
case 3622:
case 1627:
case 10:
case 729:
case 3458:
case 2007:
case 3037:
case 3514:
case 1696:
case 3328:
case 1220:
case 1219:
case 2517:
case 2926:
case 1291:
case 4082:
case 571:
case 409:
case 3690:
case 3888:
case 114:
case 3129:
case 2426:
case 2729:
case 3567:
case 3014:
case 1372:
case 1489:
case 1599:
case 615:
case 831:
case 3930:
case 2934:
case 694:
case 978:
case 2873:
case 954:
case 1340:
case 2278:
case 2087:
case 74:
case 2941:
case 3714:
case 3062:
case 657:
case 3698:
case 809:
case 575:
case 1341:
case 2828:
case 737:
case 1840:
case 986:
case 3241:
case 724:
case 728:
case 3362:
case 2042:
case 2568:
case 1102:
case 1309:
case 768:
case 3030:
case 461:
case 3803:
case 2912:
case 2519:
case 3466:
case 2698:
case 798:
case 2625:
case 743:
case 3832:
case 3696:
case 2890:
case 2601:
case 1746:
case 3817:
case 1206:
case 3640:
case 3321:
case 3402:
case 1647:
case 1747:
case 563:
case 2298:
case 1249:
case 2656:
case 3360:
case 1032:
case 1468:
case 3994:
case 3323:
case 3831:
case 613:
case 446:
case 3217:
case 2009:
case 127:
case 905:
case 716:
case 462:
case 1852:
case 2830:
case 2547:
case 246:
case 79:
case 3597:
case 3318:
case 2321:
case 3123:
case 672:
case 4070:
case 956:
case 2432:
case 2655:
case 34:
case 884:
case 1440:
case 1095:
case 1303:
case 941:
case 1412:
case 773:
case 1950:
case 2730:
case 244:
case 3152:
case 1567:
case 2790:
case 3097:
case 2795:
case 2223:
case 2410:
case 3187:
case 2182:
case 3536:
case 995:
case 824:
case 2149:
case 3162:
case 4078:
case 1133:
case 2286:
case 2040:
case 275:
case 946:
case 348:
case 2726:
case 2088:
case 3880:
case 1539:
case 4060:
case 1674:
case 2461:
case 1013:
case 2287:
case 427:
case 3576:
case 4003:
case 3904:
case 2556:
case 104:
case 2576:
case 1811:
case 490:
case 1179:
case 3430:
case 842:
case 3222:
case 310:
case 3041:
case 2446:
case 1552:
case 3838:
case 3477:
case 4077:
case 305:
case 1273:
case 195:
case 3785:
case 260:
case 2021:
case 3388:
case 2089:
case 3074:
case 3964:
case 243:
case 164:
case 2265:
case 1239:
case 707:
case 2496:
case 767:
case 3561:
case 3938:
case 4002:
case 1829:
case 1107:
case 1422:
case 3892:
case 2164:
case 290:
case 385:
case 1518:
case 3687:
case 442:
case 1036:
case 2225:
case 2502:
case 2515:
case 1315:
case 784:
case 3540:
case 1362:
case 1074:
case 2773:
case 1380:
case 1751:
case 1903:
case 527:
case 2800:
case 3924:
case 212:
case 1763:
case 1965:
case 1705:
case 1398:
case 2277:
case 234:
case 157:
case 1014:
case 3900:
case 3120:
case 801:
case 929:
case 329:
case 289:
case 3621:
case 1131:
case 1975:
case 473:
case 3623:
case 2185:
case 1141:
case 2072:
case 3655:
case 2766:
case 4033:
case 3680:
case 3756:
case 287:
case 1656:
case 475:
case 2145:
case 3582:
case 1762:
case 1437:
case 3451:
case 109:
case 2313:
case 421:
case 165:
case 3685:
case 2403:
case 2909:
case 557:
case 3373:
case 2294:
case 1525:
case 1513:
case 3750:
case 1202:
case 2534:
case 3304:
case 2894:
case 723:
case 3845:
case 962:
case 3043:
case 2959:
case 92:
case 1297:
case 1162:
case 1931:
case 774:
case 1994:
case 3034:
case 702:
case 2815:
case 806:
case 1112:
case 435:
case 480:
case 2626:
case 3472:
case 3882:
case 4072:
case 3144:
case 25:
case 155:
case 1752:
case 1017:
case 3733:
case 1609:
case 633:
case 584:
case 231:
case 77:
case 685:
case 1189:
case 2192:
case 3793:
case 1285:
case 3227:
case 631:
case 2951:
case 300:
case 2196:
case 2938:
case 3673:
case 3678:
case 1583:
case 1198:
case 828:
case 3008:
case 1164:
case 1436:
case 1766:
case 3945:
case 3836:
case 489:
case 3343:
case 3555:
case 2384:
case 781:
case 154:
case 1374:
case 3957:
case 2633:
case 451:
case 345:
case 937:
case 2522:
case 1946:
case 3780:
case 3063:
case 403:
case 2533:
case 2492:
case 1411:
case 438:
case 203:
case 1218:
case 2012:
case 2759:
case 2135:
case 1368:
case 3331:
case 2665:
case 868:
case 3214:
case 2772:
case 3386:
case 589:
case 3520:
case 2206:
case 309:
case 3065:
case 3351:
case 2256:
case 439:
case 1406:
case 2817:
case 3069:
case 1628:
case 1134:
case 2306:
case 2283:
case 2667:
case 577:
case 357:
case 2594:
case 3059:
case 2004:
case 1090:
case 1863:
case 833:
case 339:
case 1733:
case 2882:
case 3661:
case 1943:
case 2762:
case 373:
case 3167:
case 2712:
case 272:
case 199:
case 479:
case 1429:
case 1227:
case 2453:
case 3249:
case 711:
case 2058:
case 818:
case 349:
case 688:
case 3908:
case 1359:
case 242:
case 2915:
case 331:
case 2033:
case 964:
case 3792:
case 1323:
case 795:
case 984:
case 1123:
case 993:
case 21:
case 2419:
case 230:
case 681:
case 2229:
case 4045:
case 160:
case 2133:
case 1287:
case 1780:
case 3346:
case 2297:
case 2208:
case 731:
case 1690:
case 3061:
case 202:
case 1376:
case 2325:
case 3556:
case 3763:
case 2723:
case 991:
case 894:
case 197:
case 3403:
case 3579:
case 1421:
case 1904:
case 3471:
case 3983:
case 897:
case 2619:
case 2621:
case 1558:
case 2062:
case 3418:
case 3238:
case 2747:
case 1952:
case 3730:
case 874:
case 50:
case 3613:
case 1869:
case 3932:
case 3248:
case 640:
case 1703:
case 3371:
case 2002:
case 607:
case 2431:
case 564:
case 1645:
case 1889:
case 2075:
case 2991:
case 3965:
case 2171:
case 247:
case 2510:
case 3617:
case 1530:
case 1600:
case 3104:
case 3256:
case 2210:
case 150:
case 2457:
case 746:
case 249:
case 814:
case 3168:
case 3446:
case 2775:
case 2126:
case 3521:
case 201:
case 2379:
case 366:
case 1339:
case 1060:
case 1711:
case 619:
case 2586:
case 149:
case 351:
case 2569:
case 1992:
case 2018:
case 3611:
case 747:
case 2704:
case 148:
case 3824:
case 359:
case 649:
case 2595:
case 291:
case 140:
case 3289:
case 1932:
case 1334:
case 1885:
case 3456:
case 1506:
case 1579:
case 3396:
case 2587:
case 2748:
case 3659:
case 1797:
case 2524:
case 2482:
case 7:
case 1648:
case 3802:
case 2454:
case 2429:
case 3236:
case 132:
case 1456:
case 2663:
case 2108:
case 2714:
case 221:
case 1423:
case 2829:
case 2571:
case 1264:
case 755:
case 57:
case 1106:
case 3325:
case 701:
case 1592:
case 3469:
case 1302:
case 1255:
case 3339:
case 2609:
case 3735:
case 1413:
case 2073:
case 775:
case 3383:
case 2146:
case 2589:
case 3973:
case 3662:
case 1261:
case 4025:
case 161:
case 2695:
case 3956:
case 3578:
case 2715:
case 2960:
case 2818:
case 378:
case 2349:
case 1990:
case 3581:
case 1633:
case 1476:
case 386:
case 2572:
case 3230:
case 4079:
case 3301:
case 3781:
case 1369:
case 1522:
case 2849:
case 4018:
case 1958:
case 248:
case 1507:
case 3869:
case 2143:
case 2837:
case 1139:
case 2280:
case 1405:
case 1928:
case 2801:
case 2489:
case 2254:
case 2347:
case 1871:
case 2794:
case 1842:
case 3856:
case 1646:
case 1740:
case 3141:
case 2969:
case 2930:
case 3915:
case 3919:
case 3619:
case 1364:
case 3815:
case 217:
case 561:
case 3634:
case 3117:
case 226:
case 2016:
case 1782:
case 792:
case 99:
case 267:
case 1972:
case 1275:
case 185:
case 2027:
case 422:
case 588:
case 3689:
case 3208:
case 3602:
case 2649:
case 2780:
case 2852:
case 1793:
case 2221:
case 1153:
case 288:
case 1498:
case 2971:
case 3287:
case 1999:
case 3559:
case 3000:
case 871:
case 2442:
case 1351:
case 3975:
case 586:
case 670:
case 1631:
case 2957:
case 2161:
case 2022:
case 3293:
case 1034:
case 2646:
case 2132:
case 3203:
case 2035:
case 1594:
case 2369:
case 1597:
case 2596:
case 1968:
case 1659:
case 28:
case 1898:
case 1505:
case 1433:
case 786:
case 2651:
case 472:
case 4020:
case 2611:
case 739:
case 3531:
case 3809:
case 785:
case 776:
case 638:
case 1027:
case 2371:
case 2363:
case 2845:
case 3708:
case 1508:
case 855:
case 358:
case 2764:
case 1292:
case 1217:
case 404:
case 928:
case 2970:
case 1160:
case 3765:
case 3977:
case 1493:
case 2428:
case 3799:
case 942:
case 3267:
case 1390:
case 1936:
case 830:
case 392:
case 1167:
case 2724:
case 2978:
case 1064:
case 3744:
case 1317:
case 49:
case 2788:
case 356:
case 471:
case 3142:
case 661:
case 2758:
case 1980:
case 1785:
case 270:
case 3423:
case 1753:
case 113:
case 434:
case 1678:
case 1844:
case 3443:
case 2041:
case 341:
case 3307:
case 1174:
case 181:
case 1224:
case 2173:
case 2599:
case 3021:
case 3589:
case 2148:
case 635:
case 3535:
case 3641:
case 78:
case 3118:
case 1649:
case 950:
case 2560:
case 283:
case 3050:
case 1783:
case 1657:
case 3889:
case 2540:
case 2414:
case 2630:
case 2264:
case 1077:
case 4037:
case 4007:
case 2701:
case 3801:
case 526:
case 665:
case 3850:
case 478:
case 1870:
case 736:
case 4000:
case 2263:
case 970:
case 1484:
case 1768:
case 1602:
case 3660:
case 1485:
case 1940:
case 2700:
case 424:
case 464:
case 3656:
case 142:
case 3784:
case 720:
case 1225:
case 1588:
case 1857:
case 891:
case 3281:
case 20:
case 3017:
case 583:
case 467:
case 1942:
case 2676:
case 278:
case 3285:
case 22:
case 3985:
case 2350:
case 2142:
case 3297:
case 600:
case 1479:
case 40:
case 704:
case 2636:
case 3170:
case 2629:
case 3093:
case 3107:
case 1073:
case 3726:
case 65:
case 3243:
case 1801:
case 3693:
case 751:
case 3215:
case 862:
case 2433:
case 241:
case 3506:
case 518:
case 554:
case 2720:
case 3999:
case 1311:
case 2846:
case 170:
case 171:
case 1584:
case 3544:
case 3740:
case 1738:
case 169:
case 3468:
case 1736:
case 1991:
case 2335:
case 1432:
case 3501:
case 2567:
case 949:
case 2508:
case 3940:
case 3338:
case 841:
case 239:
case 3663:
case 1632:
case 3481:
case 3643:
case 3234:
case 3038:
case 3207:
case 1464:
case 3039:
case 2308:
case 556:
case 3806:
case 2311:
case 1101:
case 218:
case 143:
case 3320:
case 500:
case 1563:
case 880:
case 4054:
case 3116:
case 3942:
case 3057:
case 509:
case 1084:
case 998:
case 3145:
case 163:
case 2099:
case 1809:
case 823:
case 3171:
case 761:
case 790:
case 2382:
case 1005:
case 1586:
case 93:
case 4063:
case 3090:
case 933:
case 1767:
case 365:
case 3188:
case 546:
case 1580:
case 2965:
case 399:
case 4013:
case 1069:
case 2876:
case 4032:
case 3354:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1656547201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,];
var gg_b = "1656547201/";

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
