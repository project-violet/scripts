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
case 1858:
case 2303:
case 1397:
case 2836:
case 1301:
case 3953:
case 2694:
case 3912:
case 2737:
case 574:
case 3261:
case 1202:
case 1014:
case 1043:
case 1153:
case 910:
case 669:
case 82:
case 1885:
case 883:
case 3246:
case 2102:
case 3865:
case 3372:
case 3877:
case 4073:
case 3829:
case 2004:
case 1070:
case 152:
case 1052:
case 618:
case 2557:
case 2706:
case 2526:
case 747:
case 1243:
case 209:
case 3677:
case 1283:
case 2112:
case 3351:
case 2783:
case 3529:
case 2330:
case 3248:
case 3195:
case 1310:
case 2757:
case 1619:
case 3320:
case 3343:
case 2698:
case 689:
case 2848:
case 638:
case 1695:
case 3466:
case 2410:
case 1317:
case 202:
case 3039:
case 2453:
case 3099:
case 434:
case 415:
case 1531:
case 2865:
case 1454:
case 3773:
case 464:
case 3855:
case 3772:
case 1892:
case 1438:
case 1867:
case 4087:
case 3357:
case 3732:
case 1809:
case 3867:
case 3014:
case 3515:
case 3334:
case 1036:
case 2053:
case 3488:
case 1839:
case 2779:
case 4049:
case 2522:
case 179:
case 1901:
case 1393:
case 2461:
case 2460:
case 3776:
case 2309:
case 3872:
case 249:
case 3815:
case 584:
case 1610:
case 3700:
case 3467:
case 3395:
case 2536:
case 1072:
case 2738:
case 3206:
case 864:
case 2849:
case 2778:
case 1329:
case 325:
case 1434:
case 2466:
case 2612:
case 2314:
case 1197:
case 1215:
case 3307:
case 2034:
case 3182:
case 2339:
case 963:
case 21:
case 2197:
case 3316:
case 2869:
case 3377:
case 3446:
case 1179:
case 2343:
case 523:
case 3164:
case 2499:
case 3899:
case 1607:
case 46:
case 2064:
case 877:
case 3033:
case 1684:
case 2244:
case 2716:
case 3673:
case 1755:
case 551:
case 544:
case 2296:
case 896:
case 151:
case 632:
case 2766:
case 3093:
case 3887:
case 2010:
case 2854:
case 3207:
case 2917:
case 660:
case 2641:
case 1516:
case 2331:
case 3011:
case 1630:
case 3604:
case 3054:
case 3292:
case 2239:
case 2173:
case 1410:
case 225:
case 134:
case 871:
case 2370:
case 3909:
case 712:
case 1133:
case 481:
case 2751:
case 1419:
case 472:
case 347:
case 772:
case 213:
case 3744:
case 917:
case 3091:
case 2731:
case 381:
case 2756:
case 350:
case 1004:
case 4043:
case 899:
case 1727:
case 2186:
case 1429:
case 3652:
case 3459:
case 3015:
case 748:
case 336:
case 2548:
case 377:
case 1571:
case 933:
case 3993:
case 3998:
case 926:
case 571:
case 222:
case 3541:
case 2747:
case 3591:
case 2051:
case 1353:
case 777:
case 3565:
case 1794:
case 575:
case 786:
case 1351:
case 2622:
case 1534:
case 721:
case 2724:
case 1259:
case 648:
case 2678:
case 1893:
case 1726:
case 1654:
case 427:
case 3728:
case 238:
case 296:
case 1910:
case 3681:
case 1254:
case 407:
case 2945:
case 587:
case 1371:
case 3554:
case 1442:
case 484:
case 141:
case 3563:
case 1308:
case 293:
case 2046:
case 2890:
case 2753:
case 3543:
case 211:
case 2302:
case 3358:
case 2741:
case 2066:
case 738:
case 2543:
case 719:
case 3667:
case 273:
case 3289:
case 3336:
case 2752:
case 2583:
case 1640:
case 1578:
case 2261:
case 1338:
case 3197:
case 1519:
case 3721:
case 3142:
case 2714:
case 2113:
case 1067:
case 3981:
case 2603:
case 3227:
case 1502:
case 2329:
case 3234:
case 4064:
case 1506:
case 3944:
case 2070:
case 1582:
case 2281:
case 745:
case 2364:
case 107:
case 1523:
case 2097:
case 1141:
case 1665:
case 1944:
case 1655:
case 1412:
case 3429:
case 2094:
case 3349:
case 841:
case 520:
case 2875:
case 2861:
case 3080:
case 2283:
case 3181:
case 2380:
case 1337:
case 811:
case 2838:
case 2274:
case 2356:
case 1369:
case 3174:
case 2986:
case 1100:
case 1868:
case 2524:
case 1051:
case 140:
case 35:
case 88:
case 2487:
case 1092:
case 1349:
case 462:
case 1005:
case 666:
case 2958:
case 965:
case 3880:
case 2807:
case 478:
case 3008:
case 3147:
case 1275:
case 3220:
case 3497:
case 3318:
case 1888:
case 2134:
case 1778:
case 1436:
case 1143:
case 2689:
case 2907:
case 2120:
case 2397:
case 1101:
case 1335:
case 285:
case 844:
case 1570:
case 3801:
case 654:
case 2282:
case 1456:
case 3618:
case 1936:
case 1583:
case 89:
case 2822:
case 2842:
case 3824:
case 1646:
case 3782:
case 3624:
case 3169:
case 3504:
case 1671:
case 2218:
case 2386:
case 3549:
case 2994:
case 3156:
case 798:
case 2450:
case 2193:
case 2955:
case 1053:
case 3538:
case 2567:
case 3644:
case 2191:
case 228:
case 3761:
case 277:
case 2598:
case 2140:
case 1119:
case 1932:
case 3665:
case 2422:
case 2246:
case 1949:
case 3190:
case 2799:
case 3990:
case 1128:
case 2808:
case 1074:
case 1715:
case 2085:
case 2208:
case 2948:
case 279:
case 3389:
case 3312:
case 927:
case 1718:
case 1668:
case 1041:
case 2735:
case 3410:
case 2189:
case 943:
case 3741:
case 3983:
case 66:
case 784:
case 263:
case 2179:
case 1503:
case 918:
case 499:
case 2580:
case 526:
case 1019:
case 892:
case 1760:
case 1986:
case 320:
case 1823:
case 379:
case 3573:
case 1107:
case 2038:
case 236:
case 3361:
case 1631:
case 1612:
case 3797:
case 3763:
case 3854:
case 2044:
case 1217:
case 235:
case 2673:
case 1357:
case 3970:
case 739:
case 3839:
case 3558:
case 665:
case 743:
case 2465:
case 3341:
case 4042:
case 2558:
case 836:
case 3940:
case 2392:
case 2750:
case 1545:
case 2105:
case 670:
case 1907:
case 1539:
case 3149:
case 2116:
case 2376:
case 2241:
case 122:
case 2556:
case 3447:
case 901:
case 2976:
case 2669:
case 62:
case 1833:
case 2326:
case 529:
case 1376:
case 1617:
case 592:
case 287:
case 3828:
case 1178:
case 2350:
case 1420:
case 2579:
case 1805:
case 1232:
case 2433:
case 674:
case 3637:
case 1137:
case 1322:
case 367:
case 2939:
case 3705:
case 1742:
case 111:
case 351:
case 729:
case 39:
case 802:
case 1521:
case 201:
case 2560:
case 2196:
case 2378:
case 2017:
case 3691:
case 50:
case 1542:
case 158:
case 1114:
case 368:
case 3630:
case 2679:
case 2426:
case 3734:
case 2174:
case 3296:
case 4027:
case 503:
case 691:
case 1281:
case 1594:
case 610:
case 2882:
case 2107:
case 3553:
case 3452:
case 1396:
case 2739:
case 3002:
case 2394:
case 3124:
case 1626:
case 767:
case 656:
case 2435:
case 51:
case 916:
case 3876:
case 1392:
case 412:
case 613:
case 634:
case 1672:
case 2232:
case 80:
case 2354:
case 1679:
case 3065:
case 2169:
case 769:
case 3596:
case 1316:
case 1461:
case 2589:
case 1946:
case 44:
case 563:
case 2528:
case 3217:
case 148:
case 819:
case 1993:
case 1967:
case 782:
case 3115:
case 146:
case 2688:
case 1446:
case 2634:
case 732:
case 1017:
case 1653:
case 4005:
case 3082:
case 1512:
case 1900:
case 1302:
case 1274:
case 756:
case 3283:
case 2202:
case 1163:
case 208:
case 1167:
case 1432:
case 2349:
case 2943:
case 4061:
case 1786:
case 2862:
case 2201:
case 2078:
case 2119:
case 1080:
case 262:
case 1897:
case 1922:
case 1323:
case 2728:
case 2437:
case 3327:
case 1149:
case 3979:
case 655:
case 1991:
case 948:
case 4092:
case 4057:
case 340:
case 20:
case 2835:
case 218:
case 2231:
case 2162:
case 970:
case 3955:
case 3609:
case 3128:
case 2233:
case 3957:
case 3659:
case 2879:
case 1278:
case 3689:
case 2843:
case 761:
case 3664:
case 78:
case 1109:
case 753:
case 118:
case 2624:
case 1445:
case 3191:
case 496:
case 3508:
case 125:
case 1601:
case 1849:
case 1485:
case 3231:
case 142:
case 216:
case 3453:
case 475:
case 477:
case 2405:
case 911:
case 2252:
case 3213:
case 3346:
case 1094:
case 3500:
case 2911:
case 3058:
case 4074:
case 3434:
case 430:
case 3171:
case 1343:
case 4008:
case 1773:
case 2463:
case 1776:
case 1045:
case 3750:
case 1309:
case 3896:
case 1869:
case 2033:
case 2455:
case 439:
case 1528:
case 2091:
case 2286:
case 1639:
case 1958:
case 2872:
case 2042:
case 3161:
case 290:
case 455:
case 1996:
case 2110:
case 2671:
case 987:
case 3594:
case 3646:
case 411:
case 879:
case 3476:
case 3746:
case 1065:
case 2648:
case 374:
case 554:
case 2874:
case 3157:
case 2029:
case 972:
case 3584:
case 2138:
case 1331:
case 1497:
case 3409:
case 2407:
case 1577:
case 3528:
case 770:
case 212:
case 2730:
case 731:
case 1424:
case 2951:
case 4053:
case 3233:
case 2571:
case 1977:
case 2682:
case 2898:
case 3146:
case 2755:
case 3465:
case 751:
case 2067:
case 541:
case 1961:
case 1877:
case 822:
case 180:
case 4011:
case 2416:
case 4062:
case 570:
case 949:
case 3980:
case 2428:
case 3094:
case 1173:
case 1159:
case 3427:
case 2964:
case 930:
case 1413:
case 2972:
case 1267:
case 2921:
case 1642:
case 2404:
case 2277:
case 3685:
case 1220:
case 1702:
case 1394:
case 3967:
case 730:
case 149:
case 3850:
case 1605:
case 3141:
case 1227:
case 4059:
case 371:
case 1709:
case 1379:
case 3719:
case 3478:
case 289:
case 1250:
case 310:
case 3196:
case 3215:
case 4041:
case 2529:
case 1002:
case 67:
case 3697:
case 1675:
case 1089:
case 227:
case 356:
case 1085:
case 4004:
case 2438:
case 1287:
case 2014:
case 2275:
case 3308:
case 3076:
case 3398:
case 2889:
case 3885:
case 849:
case 353:
case 2687:
case 1770:
case 210:
case 3309:
case 1171:
case 754:
case 2782:
case 640:
case 3444:
case 3359:
case 1648:
case 197:
case 2414:
case 97:
case 1230:
case 2145:
case 25:
case 1263:
case 2559:
case 3264:
case 3237:
case 2213:
case 37:
case 341:
case 1132:
case 2515:
case 2152:
case 1345:
case 4009:
case 168:
case 3692:
case 1498:
case 1884:
case 3282:
case 2578:
case 1177:
case 83:
case 2502:
case 2178:
case 940:
case 3300:
case 441:
case 3370:
case 1475:
case 2133:
case 2434:
case 2338:
case 3564:
case 3423:
case 40:
case 3745:
case 2523:
case 84:
case 317:
case 1499:
case 3464:
case 1593:
case 3073:
case 647:
case 1087:
case 3725:
case 241:
case 582:
case 2002:
case 307:
case 595:
case 1636:
case 2900:
case 4047:
case 728:
case 3687:
case 3510:
case 3717:
case 686:
case 4060:
case 2837:
case 3768:
case 3123:
case 1090:
case 862:
case 3844:
case 4058:
case 1669:
case 1903:
case 626:
case 1998:
case 635:
case 3192:
case 157:
case 594:
case 1652:
case 2659:
case 3817:
case 2194:
case 1700:
case 2021:
case 3179:
case 1785:
case 3255:
case 1150:
case 616:
case 1330:
case 3436:
case 2494:
case 3628:
case 703:
case 1247:
case 700:
case 1273:
case 1843:
case 757:
case 1386:
case 2399:
case 471:
case 807:
case 1147:
case 797:
case 2444:
case 2199:
case 2165:
case 1430:
case 768:
case 2619:
case 954:
case 1645:
case 524:
case 1103:
case 1569:
case 1234:
case 3879:
case 2316:
case 881:
case 2073:
case 519:
case 101:
case 2188:
case 950:
case 1221:
case 2704:
case 2582:
case 2419:
case 1827:
case 324:
case 183:
case 585:
case 1520:
case 1536:
case 2845:
case 2095:
case 1355:
case 1851:
case 3272:
case 586:
case 3557:
case 479:
case 1801:
case 1433:
case 3913:
case 3166:
case 2897:
case 1953:
case 690:
case 3952:
case 2468:
case 810:
case 2906:
case 2970:
case 1473:
case 3847:
case 3517:
case 3443:
case 860:
case 863:
case 925:
case 3544:
case 1564:
case 1902:
case 2077:
case 3013:
case 2851:
case 52:
case 3996:
case 3023:
case 4072:
case 1198:
case 2150:
case 1549:
case 3479:
case 543:
case 1870:
case 2656:
case 1469:
case 3041:
case 857:
case 1458:
case 3079:
case 1699:
case 1860:
case 57:
case 4018:
case 3173:
case 2850:
case 2932:
case 2912:
case 3131:
case 3893:
case 3267:
case 590:
case 740:
case 1792:
case 264:
case 246:
case 1347:
case 2056:
case 3295:
case 3298:
case 960:
case 4050:
case 4071:
case 2599:
case 1455:
case 1708:
case 3102:
case 2639:
case 1925:
case 3536:
case 3373:
case 3249:
case 3396:
case 1824:
case 2205:
case 2552:
case 3661:
case 1743:
case 416:
case 3648:
case 1573:
case 3822:
case 1180:
case 3007:
case 3936:
case 1474:
case 1682:
case 2045:
case 5:
case 348:
case 4016:
case 2298:
case 3363:
case 1332:
case 560:
case 301:
case 2613:
case 3978:
case 1238:
case 3406:
case 1909:
case 28:
case 3260:
case 808:
case 1745:
case 846:
case 997:
case 538:
case 2155:
case 270:
case 243:
case 2192:
case 1701:
case 199:
case 2839:
case 410:
case 1071:
case 1493:
case 1948:
case 1170:
case 2530:
case 3284:
case 735:
case 354:
case 399:
case 1918:
case 2365:
case 680:
case 994:
case 604:
case 824:
case 3222:
case 3392:
case 3238:
case 2979:
case 4082:
case 421:
case 2891:
case 1365:
case 3778:
case 3923:
case 3561:
case 3757:
case 2855:
case 1627:
case 2161:
case 1606:
case 1643:
case 2892:
case 734:
case 69:
case 2537:
case 1670:
case 106:
case 252:
case 492:
case 1927:
case 2576:
case 1614:
case 2541:
case 1572:
case 2413:
case 3736:
case 159:
case 2796:
case 694:
case 1841:
case 2693:
case 2957:
case 2400:
case 627:
case 2273:
case 291:
case 4070:
case 3948:
case 3036:
case 2154:
case 2997:
case 1039:
case 3907:
case 530:
case 3812:
case 609:
case 1479:
case 196:
case 3018:
case 31:
case 26:
case 401:
case 929:
case 2640:
case 3431:
case 237:
case 230:
case 3804:
case 1947:
case 3908:
case 4089:
case 2257:
case 76:
case 3057:
case 3894:
case 3583:
case 1354:
case 1372:
case 300:
case 93:
case 2206:
case 2815:
case 3823:
case 1704:
case 696:
case 3046:
case 709:
case 1916:
case 3121:
case 659:
case 2425:
case 3592:
case 1969:
case 938:
case 2992:
case 2492:
case 2765:
case 1632:
case 1724:
case 3135:
case 3625:
case 1381:
case 3509:
case 3037:
case 1367:
case 2250:
case 2409:
case 3000:
case 1135:
case 419:
case 2474:
case 3698:
case 1189:
case 742:
case 2870:
case 250:
case 3335:
case 482:
case 2268:
case 2313:
case 3010:
case 2227:
case 1010:
case 2022:
case 2696:
case 1945:
case 2068:
case 2903:
case 364:
case 3560:
case 557:
case 1012:
case 597:
case 2681:
case 458:
case 2111:
case 882:
case 3394:
case 2570:
case 2775:
case 1341:
case 2697:
case 3662:
case 3803:
case 2297:
case 1047:
case 1118:
case 1286:
case 3852:
case 303:
case 1738:
case 3245:
case 3020:
case 2114:
case 467:
case 3918:
case 2621:
case 630:
case 2588:
case 1366:
case 2200:
case 2928:
case 1282:
case 1637:
case 2672:
case 816:
case 2198:
case 242:
case 1681:
case 2852:
case 1279:
case 1033:
case 3889:
case 889:
case 1995:
case 3660:
case 3656:
case 361:
case 2:
case 3555:
case 3533:
case 2777:
case 2121:
case 2521:
case 1878:
case 3670:
case 2018:
case 2486:
case 1402:
case 714:
case 992:
case 1838:
case 3657:
case 2170:
case 2471:
case 2159:
case 1214:
case 1388:
case 3730:
case 3339:
case 2182:
case 3441:
case 2237:
case 1762:
case 1915:
case 759:
case 539:
case 3799:
case 818:
case 461:
case 2387:
case 2700:
case 2459:
case 2654:
case 278:
case 2616:
case 4091:
case 2027:
case 198:
case 113:
case 3810:
case 2840:
case 3991:
case 2508:
case 3499:
case 2346:
case 1423:
case 281:
case 454:
case 3374:
case 1856:
case 1835:
case 2036:
case 3138:
case 3381:
case 4003:
case 3304:
case 3961:
case 1750:
case 3796:
case 3519:
case 1712:
case 2996:
case 1987:
case 1917:
case 181:
case 762:
case 304:
case 145:
case 161:
case 4029:
case 2015:
case 514:
case 528:
case 172:
case 3597:
case 1359:
case 2323:
case 1384:
case 679:
case 1246:
case 1557:
case 823:
case 3680:
case 1105:
case 3063:
case 2511:
case 1374:
case 3580:
case 166:
case 2760:
case 1225:
case 449:
case 1990:
case 685:
case 936:
case 1787:
case 2813:
case 385:
case 975:
case 3294:
case 884:
case 985:
case 535:
case 95:
case 393:
case 1368:
case 1106:
case 1733:
case 869:
case 2574:
case 3114:
case 2071:
case 1324:
case 3214:
case 2749:
case 549:
case 3457:
case 3973:
case 1477:
case 299:
case 2012:
case 8:
case 3253:
case 2300:
case 2328:
case 64:
case 32:
case 1730:
case 2229:
case 3498:
case 406:
case 3726:
case 1974:
case 429:
case 22:
case 284:
case 1022:
case 2248:
case 4034:
case 3530:
case 1208:
case 3040:
case 343:
case 2847:
case 1971:
case 973:
case 2941:
case 3266:
case 1741:
case 2265:
case 2011:
case 3937:
case 2857:
case 569:
case 2661:
case 3120:
case 86:
case 115:
case 1657:
case 4081:
case 480:
case 662:
case 48:
case 502:
case 1561:
case 1752:
case 4006:
case 1174:
case 1035:
case 3420:
case 1707:
case 1624:
case 1075:
case 3386:
case 1874:
case 3360:
case 3371:
case 561:
case 909:
case 3211:
case 174:
case 2440:
case 2618:
case 826:
case 443:
case 783:
case 1235:
case 167:
case 1016:
case 3403:
case 3112:
case 3806:
case 3107:
case 2060:
case 564:
case 832:
case 2024:
case 3127:
case 150:
case 3643:
case 3821:
case 3585:
case 2594:
case 2473:
case 657:
case 588:
case 644:
case 1344:
case 70:
case 1078:
case 2975:
case 1426:
case 1209:
case 3716:
case 3599:
case 3122:
case 2284:
case 1795:
case 1175:
case 3262:
case 342:
case 1767:
case 309:
case 3106:
case 2627:
case 1537:
case 1425:
case 55:
case 3275:
case 30:
case 372:
case 414:
case 765:
case 2743:
case 946:
case 1831:
case 1941:
case 1241:
case 579:
case 801:
case 283:
case 913:
case 796:
case 1662:
case 2905:
case 3324:
case 2340:
case 722:
case 452:
case 1:
case 7:
case 3678:
case 1789:
case 737:
case 2827:
case 3367:
case 3362:
case 3791:
case 2744:
case 3126:
case 1188:
case 1465:
case 1166:
case 2602:
case 4039:
case 3185:
case 2908:
case 1471:
case 1306:
case 233:
case 1994:
case 114:
case 3101:
case 806:
case 3348:
case 1491:
case 185:
case 1023:
case 3626:
case 4084:
case 2676:
case 3785:
case 3586:
case 1339:
case 2592:
case 1547:
case 143:
case 1098:
case 2732:
case 2987:
case 2920:
case 3329:
case 98:
case 2946:
case 2727:
case 1854:
case 2956:
case 239:
case 3798:
case 1400:
case 2895:
case 1140:
case 1914:
case 3252:
case 2595:
case 1307:
case 1756:
case 815:
case 2207:
case 1297:
case 1229:
case 133:
case 4040:
case 3062:
case 1635:
case 1757:
case 2764:
case 1451:
case 3163:
case 672:
case 2069:
case 457:
case 1134:
case 3769:
case 800:
case 59:
case 3086:
case 271:
case 1864:
case 2090:
case 3507:
case 58:
case 3577:
case 848:
case 1027:
case 3049:
case 2858:
case 4065:
case 1200:
case 1237:
case 1629:
case 3603:
case 2247:
case 2098:
case 3271:
case 1876:
case 1515:
case 2144:
case 175:
case 3326:
case 1982:
case 2642:
case 2888:
case 1813:
case 1187:
case 2478:
case 165:
case 995:
case 2412:
case 3303:
case 2217:
case 298:
case 865:
case 1340:
case 1086:
case 3451:
case 3792:
case 2949:
case 4017:
case 1711:
case 623:
case 337:
case 1084:
case 497:
case 2418:
case 3052:
case 1007:
case 3595:
case 746:
case 1748:
case 4068:
case 546:
case 1290:
case 1146:
case 2809:
case 3931:
case 2786:
case 3469:
case 2787:
case 3634:
case 3340:
case 1749:
case 1507:
case 3375:
case 1508:
case 2264:
case 2482:
case 3242:
case 1933:
case 3186:
case 2820:
case 1960:
case 254:
case 483:
case 1739:
case 2969:
case 2100:
case 1950:
case 3331:
case 766:
case 3328:
case 1667:
case 1492:
case 562:
case 1226:
case 2811:
case 1265:
case 251:
case 998:
case 3432:
case 764:
case 2927:
case 1997:
case 388:
case 3462:
case 1541:
case 2608:
case 1294:
case 3856:
case 1781:
case 2059:
case 338:
case 1046:
case 85:
case 3636:
case 780:
case 2301:
case 2293:
case 73:
case 1735:
case 2507:
case 1121:
case 3886:
case 1162:
case 842:
case 1615:
case 3612:
case 1481:
case 3153:
case 3613:
case 1764:
case 1928:
case 1048:
case 1562:
case 1866:
case 944:
case 1766:
case 3526:
case 4033:
case 272:
case 687:
case 1852:
case 3540:
case 344:
case 793:
case 4046:
case 3415:
case 2650:
case 3105:
case 3425:
case 2785:
case 129:
case 895:
case 2763:
case 1980:
case 3800:
case 2646:
case 2910:
case 3345:
case 346:
case 598:
case 2050:
case 891:
case 688:
case 890:
case 953:
case 999:
case 1906:
case 521:
case 3676:
case 1530:
case 1312:
case 1228:
case 2441:
case 3022:
case 894:
case 947:
case 2219:
case 1416:
case 3325:
case 788:
case 3914:
case 3551:
case 2417:
case 1154:
case 2087:
case 3616:
case 1926:
case 1348:
case 3100:
case 2860:
case 2762:
case 2878:
case 744:
case 1044:
case 4075:
case 2628:
case 1554:
case 2385:
case 1621:
case 3019:
case 775:
case 509:
case 1579:
case 902:
case 3178:
case 2651:
case 628:
case 3350:
case 178:
case 3971:
case 2863:
case 2074:
case 3537:
case 979:
case 3737:
case 681:
case 3784:
case 1509:
case 2549:
case 996:
case 611:
case 1288:
case 1865:
case 3836:
case 617:
case 3840:
case 3965:
case 3683:
case 2632:
case 1253:
case 330:
case 2082:
case 1697:
case 2063:
case 3731:
case 4079:
case 1182:
case 803:
case 2212:
case 2009:
case 2347:
case 3574:
case 1535:
case 1942:
case 1266:
case 725:
case 2686:
case 1685:
case 19:
case 3547:
case 828:
case 1463:
case 3632:
case 661:
case 2421:
case 2151:
case 2545:
case 799:
case 2818:
case 3919:
case 2381:
case 1722:
case 3342:
case 2638:
case 1660:
case 456:
case 778:
case 2415:
case 3695:
case 1623:
case 4093:
case 3631:
case 3861:
case 3281:
case 3650:
case 3703:
case 1291:
case 103:
case 4076:
case 511:
case 463:
case 2758:
case 3813:
case 2792:
case 1806:
case 3439:
case 1559:
case 395:
case 1489:
case 1470:
case 1314:
case 1115:
case 708:
case 2611:
case 402:
case 872:
case 3117:
case 162:
case 386:
case 422:
case 3419:
case 4083:
case 548:
case 493:
case 1690:
case 1600:
case 3638:
case 1716:
case 758:
case 170:
case 100:
case 870:
case 384:
case 2805:
case 2767:
case 2031:
case 2814:
case 2768:
case 3789:
case 2801:
case 3240:
case 1650:
case 986:
case 2966:
case 2717:
case 1988:
case 3438:
case 2715:
case 1553:
case 2226:
case 3385:
case 3825:
case 1483:
case 2703:
case 3205:
case 1500:
case 3136:
case 4085:
case 2493:
case 833:
case 3280:
case 885:
case 269:
case 1780:
case 3028:
case 1113:
case 323:
case 1966:
case 1848:
case 2810:
case 969:
case 203:
case 3433:
case 2532:
case 3092:
case 109:
case 3811:
case 2609:
case 2307:
case 1837:
case 1406:
case 838:
case 622:
case 1038:
case 329:
case 3756:
case 3257:
case 2175:
case 2899:
case 2666:
case 1802:
case 1136:
case 13:
case 1076:
case 2665:
case 2773:
case 169:
case 2345:
case 3926:
case 2382:
case 3477:
case 919:
case 2458:
case 1496:
case 1543:
case 2828:
case 260:
case 3145:
case 1440:
case 99:
case 24:
case 2806:
case 92:
case 2984:
case 3088:
case 1504:
case 3006:
case 1992:
case 2590:
case 3709:
case 3809:
case 3947:
case 2999:
case 2442:
case 420:
case 678:
case 319:
case 2542:
case 2680:
case 3426:
case 2736:
case 4015:
case 749:
case 2016:
case 1816:
case 186:
case 1414:
case 2236:
case 3404:
case 2084:
case 2040:
case 3682:
case 3988:
case 3920:
case 1494:
case 2432:
case 991:
case 34:
case 3208:
case 1501:
case 3321:
case 3600:
case 2408:
case 2655:
case 1510:
case 2396:
case 1342:
case 3820:
case 2754:
case 1663:
case 1391:
case 868:
case 1293:
case 1219:
case 3506:
case 3317:
case 3739:
case 508:
case 608:
case 3512:
case 2597:
case 3522:
case 3162:
case 71:
case 1978:
case 2989:
case 1025:
case 2830:
case 1176:
case 2600:
case 3430:
case 3878:
case 591:
case 318:
case 3959:
case 3575:
case 2893:
case 3068:
case 3770:
case 1467:
case 981:
case 1717:
case 3273:
case 3332:
case 1737:
case 3414:
case 3411:
case 1828:
case 2931:
case 3:
case 3393:
case 3916:
case 717:
case 1895:
case 2868:
case 906:
case 2353:
case 2506:
case 77:
case 704:
case 189:
case 3960:
case 1882:
case 3711:
case 2954:
case 1719:
case 267:
case 1427:
case 2366:
case 3762:
case 893:
case 3963:
case 1120:
case 2952:
case 3845:
case 839:
case 2534:
case 2540:
case 3254:
case 3641:
case 2203:
case 3619:
case 3751:
case 2780:
case 621:
case 1222:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1686020401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,];
var gg_b = "1686020401/";

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
