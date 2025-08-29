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
var o = 1;
switch (g) {
case 3978:
case 2842:
case 2108:
case 1924:
case 1050:
case 1691:
case 2208:
case 3395:
case 2856:
case 1899:
case 766:
case 2885:
case 3518:
case 3682:
case 1016:
case 197:
case 1341:
case 2778:
case 3631:
case 1335:
case 3446:
case 2665:
case 179:
case 3645:
case 2998:
case 956:
case 2466:
case 4071:
case 609:
case 1738:
case 433:
case 2810:
case 3355:
case 2896:
case 3912:
case 1417:
case 3703:
case 3758:
case 3760:
case 3122:
case 1481:
case 2394:
case 4006:
case 3222:
case 2592:
case 3173:
case 2712:
case 1469:
case 2958:
case 175:
case 605:
case 531:
case 2737:
case 2019:
case 1997:
case 3876:
case 3083:
case 1549:
case 3233:
case 2997:
case 3334:
case 1737:
case 3133:
case 3280:
case 1423:
case 4064:
case 1960:
case 525:
case 2328:
case 275:
case 3449:
case 1958:
case 1903:
case 3836:
case 2725:
case 750:
case 1712:
case 1592:
case 2777:
case 2651:
case 1293:
case 1394:
case 887:
case 2481:
case 3517:
case 2432:
case 3021:
case 1472:
case 3581:
case 2417:
case 395:
case 2505:
case 2859:
case 772:
case 1896:
case 3532:
case 193:
case 1810:
case 529:
case 674:
case 1665:
case 4045:
case 2335:
case 310:
case 1327:
case 62:
case 1375:
case 3361:
case 1778:
case 437:
case 4031:
case 2899:
case 3938:
case 1856:
case 3389:
case 844:
case 1208:
case 2924:
case 1153:
case 856:
case 4009:
case 377:
case 2892:
case 3331:
case 2627:
case 3823:
case 1641:
case 957:
case 4061:
case 2476:
case 922:
case 2750:
case 463:
case 1436:
case 196:
case 2768:
case 3345:
case 2365:
case 3748:
case 1849:
case 2484:
case 1078:
case 949:
case 767:
case 12:
case 11:
case 4089:
case 604:
case 3872:
case 1288:
case 1188:
case 598:
case 3695:
case 209:
case 693:
case 3200:
case 3866:
case 3674:
case 758:
case 3163:
case 561:
case 4034:
case 181:
case 986:
case 3097:
case 362:
case 3456:
case 3770:
case 3562:
case 2401:
case 2111:
case 205:
case 1351:
case 2921:
case 2694:
case 2556:
case 3501:
case 1719:
case 3990:
case 2187:
case 1599:
case 2037:
case 3306:
case 3730:
case 1287:
case 2599:
case 2947:
case 2719:
case 3967:
case 930:
case 675:
case 1211:
case 1542:
case 4055:
case 3804:
case 1344:
case 3747:
case 1143:
case 2983:
case 281:
case 1243:
case 3634:
case 1852:
case 1439:
case 3003:
case 2628:
case 868:
case 4074:
case 1948:
case 514:
case 274:
case 109:
case 3459:
case 812:
case 524:
case 3817:
case 2613:
case 376:
case 4095:
case 57:
case 21:
case 3320:
case 22:
case 2559:
case 1654:
case 1716:
case 891:
case 1596:
case 697:
case 2078:
case 2849:
case 2635:
case 303:
case 394:
case 296:
case 953:
case 3869:
case 467:
case 1476:
case 2641:
case 1675:
case 3661:
case 780:
case 1627:
case 3522:
case 669:
case 3172:
case 3789:
case 3045:
case 264:
case 3272:
case 2902:
case 1105:
case 1415:
case 18:
case 2422:
case 1205:
case 1507:
case 3493:
case 3941:
case 2961:
case 420:
case 3082:
case 1754:
case 441:
case 2735:
case 1149:
case 706:
case 3913:
case 2338:
case 2473:
case 4048:
case 3702:
case 239:
case 1378:
case 982:
case 477:
case 3009:
case 1433:
case 1650:
case 2192:
case 1727:
case 3324:
case 2292:
case 3761:
case 3218:
case 2619:
case 3408:
case 3630:
case 3453:
case 2934:
case 800:
case 3397:
case 1794:
case 665:
case 2811:
case 99:
case 3928:
case 4021:
case 1051:
case 2843:
case 3863:
case 2667:
case 3800:
case 3266:
case 2377:
case 878:
case 1986:
case 495:
case 235:
case 2246:
case 192:
case 1246:
case 1728:
case 1325:
case 2955:
case 3006:
case 1252:
case 3994:
case 89:
case 2690:
case 571:
case 3204:
case 3414:
case 3104:
case 3303:
case 3358:
case 1811:
case 3755:
case 826:
case 2974:
case 547:
case 4030:
case 978:
case 3360:
case 741:
case 1292:
case 2775:
case 2727:
case 1192:
case 3020:
case 1741:
case 2091:
case 2480:
case 1338:
case 2149:
case 3580:
case 2995:
case 3533:
case 3232:
case 3927:
case 1961:
case 2205:
case 28:
case 3181:
case 1422:
case 799:
case 333:
case 1902:
case 3398:
case 406:
case 164:
case 2888:
case 882:
case 3407:
case 1713:
case 269:
case 476:
case 3139:
case 2400:
case 3563:
case 1429:
case 728:
case 3500:
case 1909:
case 3624:
case 2920:
case 2463:
case 3101:
case 2587:
case 1199:
case 2285:
case 1299:
case 336:
case 3201:
case 2971:
case 234:
case 494:
case 2156:
case 2853:
case 1316:
case 2808:
case 1931:
case 2791:
case 3262:
case 3487:
case 53:
case 2242:
case 3720:
case 2142:
case 3951:
case 1744:
case 1390:
case 265:
case 3055:
case 917:
case 248:
case 2677:
case 3086:
case 302:
case 1964:
case 3822:
case 1640:
case 2893:
case 4060:
case 3706:
case 3330:
case 3184:
case 2319:
case 3074:
case 15:
case 1259:
case 813:
case 4058:
case 970:
case 635:
case 2196:
case 692:
case 546:
case 2028:
case 3603:
case 2807:
case 25:
case 3370:
case 3488:
case 1319:
case 3034:
case 3815:
case 554:
case 1751:
case 827:
case 621:
case 611:
case 1893:
case 852:
case 2964:
case 817:
case 640:
case 2640:
case 2612:
case 1677:
case 148:
case 165:
case 462:
case 1426:
case 1906:
case 2390:
case 2744:
case 1094:
case 3764:
case 2637:
case 2982:
case 4057:
case 1242:
case 1511:
case 2931:
case 2316:
case 1808:
case 1156:
case 418:
case 3002:
case 3965:
case 1185:
case 3698:
case 1587:
case 363:
case 3529:
case 1920:
case 3179:
case 4024:
case 380:
case 3731:
case 68:
case 2909:
case 703:
case 794:
case 1210:
case 1082:
case 2232:
case 3754:
case 3616:
case 1357:
case 2132:
case 2181:
case 38:
case 1941:
case 3205:
case 1031:
case 2281:
case 404:
case 2071:
case 2795:
case 3888:
case 2515:
case 2117:
case 2407:
case 2954:
case 2020:
case 1573:
case 1324:
case 3727:
case 3433:
case 1009:
case 2269:
case 3668:
case 2169:
case 1826:
case 663:
case 2533:
case 3995:
case 568:
case 522:
case 2786:
case 814:
case 2204:
case 2670:
case 557:
case 824:
case 512:
case 2755:
case 3974:
case 4019:
case 3794:
case 87:
case 1453:
case 1630:
case 591:
case 1118:
case 1218:
case 2360:
case 1064:
case 392:
case 3986:
case 775:
case 250:
case 3312:
case 549:
case 3955:
case 1734:
case 2006:
case 998:
case 1863:
case 4067:
case 3690:
case 321:
case 1647:
case 340:
case 3051:
case 311:
case 2647:
case 3843:
case 1994:
case 2863:
case 2734:
case 1621:
case 3252:
case 914:
case 1006:
case 3325:
case 2266:
case 1774:
case 3377:
case 2166:
case 150:
case 1829:
case 3246:
case 335:
case 3619:
case 658:
case 2218:
case 1360:
case 2453:
case 2408:
case 2397:
case 3811:
case 2928:
case 1414:
case 172:
case 1358:
case 1104:
case 1204:
case 602:
case 898:
case 1786:
case 4068:
case 1580:
case 3989:
case 636:
case 3735:
case 704:
case 2702:
case 3741:
case 2123:
case 4050:
case 530:
case 1954:
case 3192:
case 861:
case 2223:
case 2789:
case 2935:
case 3593:
case 2172:
case 2522:
case 3713:
case 1515:
case 2272:
case 364:
case 451:
case 3065:
case 1398:
case 133:
case 1281:
case 2941:
case 3422:
case 1181:
case 1975:
case 2357:
case 2082:
case 1927:
case 3678:
case 2279:
case 3350:
case 2179:
case 2782:
case 280:
case 1991:
case 1443:
case 1771:
case 3765:
case 3429:
case 1563:
case 4038:
case 1239:
case 3013:
case 2089:
case 1095:
case 1720:
case 3982:
case 587:
case 167:
case 72:
case 2061:
case 1262:
case 2709:
case 1487:
case 1657:
case 3931:
case 1162:
case 774:
case 2002:
case 3299:
case 931:
case 3945:
case 1411:
case 405:
case 672:
case 3612:
case 4077:
case 4025:
case 1055:
case 3390:
case 781:
case 2880:
case 158:
case 3637:
case 2833:
case 2321:
case 3028:
case 90:
case 35:
case 650:
case 842:
case 2658:
case 3807:
case 2603:
case 2488:
case 2370:
case 1383:
case 2660:
case 1706:
case 1284:
case 1330:
case 3588:
case 3640:
case 1822:
case 1697:
case 2697:
case 1815:
case 2330:
case 481:
case 919:
case 2184:
case 2074:
case 1488:
case 1370:
case 1658:
case 3296:
case 1321:
case 2951:
case 258:
case 1764:
case 2526:
case 942:
case 1880:
case 3094:
case 2347:
case 4037:
case 3906:
case 365:
case 348:
case 1236:
case 3677:
case 1136:
case 3285:
case 2411:
case 583:
case 163:
case 2201:
case 3185:
case 334:
case 1965:
case 3971:
case 3256:
case 2162:
case 3511:
case 1709:
case 3791:
case 3075:
case 1061:
case 915:
case 3242:
case 3027:
case 925:
case 1745:
case 369:
case 3543:
case 3400:
case 2239:
case 666:
case 1348:
case 2771:
case 4078:
case 831:
case 637:
case 3920:
case 42:
case 1782:
case 1279:
case 3463:
case 603:
case 1798:
case 2048:
case 508:
case 299:
case 173:
case 1801:
case 3899:
case 3114:
case 3313:
case 1395:
case 3068:
case 1609:
case 1862:
case 78:
case 527:
case 1978:
case 517:
case 277:
case 1645:
case 1839:
case 2302:
case 351:
case 464:
case 1446:
case 2671:
case 885:
case 210:
case 3957:
case 1452:
case 3016:
case 1937:
case 2405:
case 2215:
case 3481:
case 1122:
case 2517:
case 3432:
case 2606:
case 435:
case 295:
case 3417:
case 132:
case 1758:
case 1703:
case 3107:
case 3207:
case 3505:
case 3859:
case 1386:
case 1912:
case 2977:
case 2532:
case 2925:
case 4044:
case 2180:
case 2233:
case 3549:
case 1664:
case 1940:
case 1083:
case 1030:
case 2133:
case 2280:
case 1492:
case 721:
case 792:
case 2449:
case 93:
case 3725:
case 3469:
case 1273:
case 3777:
case 2070:
case 1523:
case 2523:
case 3712:
case 2173:
case 2273:
case 3903:
case 3958:
case 735:
case 3960:
case 3423:
case 2492:
case 3737:
case 2083:
case 3019:
case 1233:
case 1532:
case 2355:
case 1977:
case 2758:
case 232:
case 3472:
case 2703:
case 195:
case 411:
case 4051:
case 1606:
case 440:
case 2884:
case 2047:
case 2572:
case 83:
case 2122:
case 1517:
case 1405:
case 1879:
case 2682:
case 3778:
case 2452:
case 1361:
case 3375:
case 141:
case 3327:
case 110:
case 1671:
case 3665:
case 1302:
case 3466:
case 2839:
case 304:
case 2645:
case 739:
case 607:
case 801:
case 1620:
case 3418:
case 2862:
case 2395:
case 3856:
case 1389:
case 1938:
case 2518:
case 199:
case 628:
case 2798:
case 523:
case 1048:
case 203:
case 1126:
case 1576:
case 128:
case 118:
case 2098:
case 434:
case 1345:
case 3436:
case 1057:
case 1382:
case 4075:
case 943:
case 107:
case 871:
case 677:
case 859:
case 3613:
case 3288:
case 2689:
case 1872:
case 526:
case 1968:
case 469:
case 516:
case 276:
case 847:
case 2881:
case 3559:
case 1950:
case 32:
case 620:
case 1309:
case 3391:
case 3983:
case 2747:
case 1539:
case 3479:
case 1263:
case 3767:
case 695:
case 1674:
case 1200:
case 1100:
case 1410:
case 2003:
case 96:
case 2579:
case 2730:
case 1818:
case 3037:
case 3719:
case 3947:
case 4094:
case 3599:
case 1990:
case 1655:
case 1485:
case 75:
case 448:
case 884:
case 3012:
case 1770:
case 2804:
case 465:
case 955:
case 2456:
case 262:
case 3542:
case 2562:
case 3211:
case 1499:
case 3401:
case 3921:
case 3556:
case 3694:
case 1783:
case 3187:
case 2990:
case 2501:
case 3585:
case 3287:
case 765:
case 3846:
case 1579:
case 748:
case 45:
case 2410:
case 1058:
case 2100:
case 4028:
case 632:
case 3439:
case 2866:
case 2200:
case 1634:
case 984:
case 3243:
case 1919:
case 1747:
case 3344:
case 3790:
case 3484:
case 1832:
case 3716:
case 3654:
case 500:
case 2950:
case 2024:
case 1881:
case 176:
case 971:
case 2496:
case 606:
case 843:
case 4013:
case 2584:
case 2872:
case 3038:
case 309:
case 1459:
case 2331:
case 2823:
case 1661:
case 1536:
case 4041:
case 1869:
case 769:
case 218:
case 1371:
case 3365:
case 673:
case 947:
case 103:
case 933:
case 2743:
case 1431:
case 456:
case 1167:
case 3221:
case 3700:
case 2007:
case 3336:
case 1646:
case 4066:
case 3033:
case 3080:
case 3943:
case 2963:
case 4018:
case 2591:
case 2711:
case 2900:
case 3520:
case 1929:
case 3270:
case 3604:
case 3726:
case 2835:
case 3248:
case 3148:
case 2168:
case 3669:
case 2268:
case 2014:
case 1053:
case 1008:
case 2250:
case 1875:
case 1827:
case 1788:
case 2551:
case 298:
case 3617:
case 2813:
case 124:
case 2926:
case 2399:
case 783:
case 300:
case 60:
case 2116:
case 3632:
case 4081:
case 1216:
case 2854:
case 460:
case 1406:
case 2342:
case 1605:
case 52:
case 51:
case 4032:
case 2385:
case 3301:
case 4017:
case 1399:
case 2827:
case 3623:
case 2875:
case 3444:
case 690:
case 1841:
case 1250:
case 2544:
case 1168:
case 738:
case 1649:
case 4069:
case 1835:
case 744:
case 382:
case 2929:
case 3886:
case 2396:
case 615:
case 1711:
case 3855:
case 1900:
case 1591:
case 833:
case 625:
case 1420:
case 2894:
case 3183:
case 1787:
case 3618:
case 3729:
case 1471:
case 2646:
case 3582:
case 937:
case 1828:
case 3874:
case 3666:
case 2445:
case 2167:
case 3376:
case 2565:
case 581:
case 3545:
case 2093:
case 1743:
case 3147:
case 1190:
case 2851:
case 2240:
case 2140:
case 3722:
case 867:
case 2793:
case 661:
case 3589:
case 3160:
case 753:
case 3158:
case 3103:
case 2659:
case 3258:
case 1495:
case 1696:
case 1554:
case 2535:
case 3993:
case 2922:
case 1087:
case 1915:
case 2137:
case 491:
case 963:
case 1844:
case 2461:
case 4076:
case 1346:
case 2541:
case 457:
case 1011:
case 3636:
case 1277:
case 3561:
case 3773:
case 2402:
case 1225:
case 1527:
case 2112:
case 3198:
case 1685:
case 313:
case 2699:
case 3298:
case 4001:
case 3317:
case 1714:
case 445:
case 1486:
case 3332:
case 1642:
case 3820:
case 4062:
case 3381:
case 593:
case 698:
case 802:
case 1610:
case 119:
case 1238:
case 486:
case 3534:
case 1865:
case 3428:
case 2349:
case 1392:
case 3908:
case 730:
case 2528:
case 2278:
case 3679:
case 2434:
case 858:
case 1278:
case 1178:
case 1528:
case 10:
case 3574:
case 4079:
case 3124:
case 3323:
case 1349:
case 3914:
case 3639:
case 624:
case 3845:
case 551:
case 2610:
case 614:
case 317:
case 84:
case 3586:
case 327:
case 3662:
case 1708:
case 1753:
case 3257:
case 2486:
case 786:
case 2455:
case 3026:
case 3601:
case 308:
case 1112:
case 2177:
case 1402:
case 2575:
case 1212:
case 2125:
case 215:
case 575:
case 1541:
case 225:
case 3475:
case 453:
case 2844:
case 131:
case 1137:
case 1922:
case 3676:
case 2352:
case 2554:
case 1973:
case 2696:
case 757:
case 2495:
case 2707:
case 1489:
case 722:
case 3454:
case 3684:
case 3063:
case 2980:
case 3197:
case 1793:
case 1140:
case 2933:
case 3595:
case 1825:
case 3468:
case 3996:
case 643:
case 3329:
case 4073:
case 806:
case 2550:
case 977:
case 185:
case 2568:
case 999:
case 3548:
case 2837:
case 2796:
case 910:
case 146:
case 1311:
case 3858:
case 2607:
case 1387:
case 4022:
case 3860:
case 3106:
case 3416:
case 2:
case 2878:
case 3490:
case 1447:
case 1265:
case 3271:
case 2901:
case 2710:
case 416:
case 2742:
case 3570:
case 1979:
case 700:
case 3220:
case 23:
case 2191:
case 1483:
case 1430:
case 832:
case 2756:
case 2614:
case 2470:
case 2388:
case 2939:
case 1519:
case 2049:
case 1799:
case 3583:
case 2799:
case 2519:
case 1785:
case 1388:
case 478:
case 1756:
case 895:
case 1291:
case 655:
case 3209:
case 2608:
case 2430:
case 2653:
case 3109:
case 13:
case 2979:
case 3023:
case 1742:
case 2092:
case 3145:
case 3072:
case 3547:
case 3245:
case 1710:
case 338:
case 2165:
case 3231:
case 1962:
case 79:
case 400:
case 1878:
case 3467:
case 3897:
case 1976:
case 659:
case 877:
case 3622:
case 1151:
case 906:
case 254:
case 4015:
case 356:
case 2387:
case 782:
case 344:
case 2759:
case 55:
case 2311:
case 246:
case 1837:
case 3018:
case 3264:
case 1984:
case 973:
case 2343:
case 820:
case 647:
case 2244:
case 841:
case 285:
case 3959:
case 1550:
case 2877:
case 3673:
case 3300:
case 3946:
case 2307:
case 243:
case 2966:
case 1194:
case 903:
case 3952:
case 147:
case 3315:
case 1457:
case 3598:
case 3718:
case 1819:
case 353:
case 1687:
case 4000:
case 2128:
case 2578:
case 535:
case 1096:
case 2228:
case 2059:
case 3333:
case 1867:
case 3478:
case 3234:
case 1538:
case 4063:
case 807:
case 1643:
case 159:
case 2918:
case 976:
case 470:
case 3079:
case 6:
case 1154:
case 3992:
case 1353:
case 1254:
case 2460:
case 3440:
case 26:
case 1497:
case 1705:
case 3560:
case 723:
case 1969:
case 713:
case 2688:
case 3289:
case 184:
case 564:
case 1010:
case 2403:
case 3189:
case 3772:
case 862:
case 1525:
case 1175:
case 2792:
case 1042:
case 3261:
case 63:
case 330:
case 2241:
case 452:
case 155:
case 1981:
case 417:
case 3102:
case 408:
case 539:
case 3412:
case 4026:
case 1056:
case 1917:
case 1749:
case 345:
case 2749:
case 3001:
case 1972:
case 3425:
case 423:
case 3477:
case 255:
case 2981:
case 962:
case 1141:
case 1241:
case 1512:
case 2275:
case 2577:
case 2042:
case 2932:
case 2175:
case 2525:
case 3597:
case 2010:
case 1403:
case 3295:
case 3717:
case 1113:
case 1540:
case 1213:
case 3039:
case 3195:
case 284:
case 1688:
case 386:
case 708:
case 717:
case 752:
case 3781:
case 16:
case 1816:
case 2154:
case 1923:
case 271:
case 540:
case 1918:
case 259:
case 511:
case 521:
case 2643:
case 3847:
case 654:
case 3663:
case 3600:
case 3274:
case 3174:
case 1228:
case 1746:
case 894:
case 1578:
case 803:
case 2904:
case 1128:
case 3076:
case 2819:
case 3830:
case 391:
case 2294:
case 918:
case 3322:
case 928:
case 2393:
case 685:
case 2611:
case 3155:
case 3286:
case 357:
case 1307:
case 322:
case 3186:
case 1548:
case 1633:
case 2018:
case 691:
case 2164:
case 3144:
case 3343:
case 385:
case 2959:
case 851:
case 3877:
case 1996:
case 1468:
case 2736:
case 3825:
case 2300:
case 54:
case 354:
case 1615:
case 1106:
case 1416:
case 1860:
case 993:
case 3052:
case 3759:
case 244:
case 649:
case 1803:
case 1858:
case 3311:
case 3046:
case 346:
case 389:
case 2145:
case 1739:
case 1985:
case 2999:
case 2245:
case 2072:
case 2547:
case 238:
case 1081:
case 1490:
case 160:
case 2824:
case 2131:
case 2182:
case 2467:
case 2282:
case 1701:
case 3519:
case 2583:
case 4014:
case 1898:
case 724:
case 714:
case 1069:
case 2209:
case 1762:
case 2419:
case 77:
case 1120:
case 2023:
case 3742:
case 630:
case 2220:
case 567:
case 1419:
case 2762:
case 3291:
case 1209:
case 3756:
case 3388:
case 3470:
case 536:
case 3939:
case 2701:
case 2910:
case 3878:
case 3:
case 2942:
case 1182:
case 1779:
case 1824:
case 2490:
case 2171:
case 2521:
case 414:
case 1326:
case 2271:
case 2956:
case 3710:
case 1245:
case 1547:
case 3901:
case 1072:
case 2017:
case 2985:
case 2739:
case 3516:
case 3796:
case 3607:
case 2803:
case 2858:
case 997:
case 2860:
case 2206:
case 2784:
case 951:
case 156:
case 2416:
case 979:
case 301:
case 3151:
case 2615:
case 1897:
case 3976:
case 3840:
case 1736:
case 2004:
case 2996:
case 3812:
case 2468:
case 3550:
case 1959:
case 3448:
case 2329:
case 3568:
case 761:
case 2680:
case 2450:
case 558:
case 1264:
case 2548:
case 153:
case 2883:
case 291:
case 431:
case 1315:
case 3194:
case 1952:
case 2322:
case 81:
case 1036:
case 257:
case 572:
case 2286:
case 2186:
case 1946:
case 222:
case 1870:
case 874:
case 3424:
case 359:
case 3538:
case 2084:
case 2663:
case 3867:
case 1380:
case 656:
case 1821:
case 909:
case 1333:
case 2274:
case 644:
case 2600:
case 2524:
case 550:
case 896:
case 1629:
case 725:
case 2949:
case 2597:
case 1189:
case 3010:
case 742:
case 2039:
case 286:
case 533:
case 3969:
case 1503:
case 40:
case 3254:
case 3353:
case 3308:
case 3085:
case 1848:
case 2626:
case 2001:
case 3917:
case 3749:
case 245:
case 719:
case 2425:
case 1202:
case 1102:
case 3981:
case 1437:
case 2062:
case 1261:
case 3042:
case 3275:
case 130:
case 3127:
case 3227:
case 3175:
case 3932:
case 1161:
case 230:
case 490:
case 2723:
case 70:
case 1905:
case 3850:
case 3241:
case 3141:
case 3868:
case 2412:
case 2102:
case 1425:
case 1769:
case 1626:
case 3537:
case 3235:
case 2079:
case 3923:
case 3460:
case 537:
case 2440:
case 660:
case 429:
case 2560:
case 186:
case 1039:
case 3213:
case 1295:
case 2772:
case 3458:
case 3403:
case 1597:
case 2189:
case 3113:
case 1717:
case 3578:
case 2629:
case 92:
case 2766:
case 149:
case 974:
case 2333:
case 2134:
case 2821:
case 4043:
case 3752:
case 2478:
case 1084:
case 1847:
case 3890:
case 731:
case 2870:
case 157:
case 4011:
case 1704:
case 3307:
case 2036:
case 112:
case 1255:
case 3498:
case 1557:
case 3966:
case 1322:
case 4087:
case 2952:
case 2718:
case 1830:
case 996:
case 191:
case 1883:
case 1076:
case 785:
case 2729:
case 2465:
case 1700:
case 2531:
case 2874:
case 2376:
case 3167:
case 1221:
case 3652:
case 964:
case 3482:
case 1121:
case 1834:
case 1571:
case 401:
case 3565:
case 2545:
case 2247:
case 1015:
case 1987:
case 3093:
case 1604:
case 282:
case 1270:
case 2073:
case 1520:
case 3396:
case 746:
case 3894:
case 754:
case 1491:
case 1080:
case 1943:
case 3119:
case 2230:
case 3409:
case 2130:
case 2283:
case 2618:
case 3219:
case 939:
case 811:
case 3692:
case 652:
case 617:
case 840:
case 3827:
case 2444:
case 3875:
case 1861:
case 3464:
case 43:
case 3008:
case 789:
case 3310:
case 1726:
case 892:
case 1248:
case 2362:
case 4005:
case 1451:
case 3342:
case 4:
case 670:
case 576:
case 1617:
case 2672:
case 1889:
case 2895:
case 398:
case 3551:
case 1895:
case 3926:
case 1301:
case 126:
case 3399:
case 2506:
case 940:
case 489:
case 992:
case 2681:
case 73:
case 200:
case 3116:
case 3406:
case 3649:
case 1564:
case 623:
case 2726:
case 518:
case 1988:
case 278:
case 3014:
case 2669:
case 3268:
case 3150:
case 2379:
case 4092:
case 3250:
case 2861:
case 507:
case 3787:
case 1230:
case 2080:
case 2491:
case 3963:
case 3420:
case 3900:
case 1855:
case 864:
case 1886:
case 1073:
case 2520:
case 562:
case 485:
case 2604:
case 182:
case 1147:
case 3743:
case 4052:
case 1022:
case 3190:
case 3290:
case 361:
case 1545:
case 2571:
case 2834:
case 2221:
case 446:
case 1531:
case 839:
case 4046:
case 3007:
case 2911:
case 1465:
case 1729:
case 1582:
case 4059:
case 1258:
case 1203:
case 1413:
case 1304:
case 969:
case 2318:
case 1806:
case 1260:
case 2454:
case 2063:
case 1160:
case 1722:
case 1589:
case 2197:
case 3043:
case 2595:
case 3177:
case 1773:
case 3527:
case 3125:
case 443:
case 3277:
case 3575:
case 1435:
case 325:
case 2475:
case 771:
case 2427:
case 3915:
case 2733:
case 2780:
case 1441:
case 3087:
case 577:
case 965:
case 217:
case 948:
case 227:
case 2157:
case 69:
case 390:
case 2809:
case 2555:
case 1332:
case 3486:
case 2372:
case 784:
case 342:
case 3594:
case 85:
case 3714:
case 3656:
case 1317:
case 113:
case 3455:
case 1298:
case 3685:
case 599:
case 2882:
case 1679:
case 46:
case 2831:
case 2323:
case 3392:
case 1953:
case 1534:
case 3865:
case 319:
case 3474:
case 3238:
case 3138:
case 3610:
case 1369:
case 329:
case 2369:
case 1639:
case 3088:
case 848:
case 2534:
case 506:
case 484:
case 3349:
case 1914:
case 1574:
case 2908:
case 2953:
case 170:
case 1831:
case 1224:
case 600:
case 3528:
case 1882:
case 2679:
case 223:
case 108:
case 2198:
case 573:
case 4056:
case 678:
case 1601:
case 1026:
case 213:
case 1372:
case 4085:
case 2332:
case 3891:
case 4042:
case 3708:
case 127:
case 1586:
case 117:
case 1864:
case 3137:
case 2502:
case 331:
case 3461:
case 3541:
case 2435:
case 3212:
case 3112:
case 1715:
case 1595:
case 2589:
case 1197:
case 3140:
case 2160:
case 1684:
case 1454:
case 459:
case 2806:
case 2260:
case 2158:
case 2413:
case 532:
case 3659:
case 2258:
case 834:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756465201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,];
var gg_b = "1756465201/";

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
