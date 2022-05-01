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
case 3772:
case 1191:
case 1909:
case 1208:
case 1505:
case 758:
case 1744:
case 3455:
case 1645:
case 3324:
case 1639:
case 531:
case 2037:
case 2738:
case 1015:
case 1213:
case 1237:
case 3338:
case 935:
case 3394:
case 1328:
case 3237:
case 2289:
case 3344:
case 1106:
case 207:
case 132:
case 3875:
case 1050:
case 820:
case 2430:
case 1936:
case 3558:
case 518:
case 3211:
case 3918:
case 4013:
case 605:
case 2235:
case 3521:
case 1063:
case 2800:
case 1098:
case 4032:
case 2394:
case 2295:
case 158:
case 3056:
case 2048:
case 149:
case 988:
case 3942:
case 198:
case 1770:
case 2497:
case 3379:
case 3396:
case 1119:
case 3144:
case 3213:
case 2564:
case 1591:
case 1356:
case 2189:
case 393:
case 3395:
case 3572:
case 1902:
case 2649:
case 1442:
case 2108:
case 1449:
case 1792:
case 3892:
case 2175:
case 347:
case 67:
case 3393:
case 1286:
case 2082:
case 1606:
case 407:
case 3813:
case 2772:
case 1308:
case 2234:
case 3638:
case 74:
case 627:
case 2971:
case 2840:
case 3065:
case 1544:
case 1498:
case 1429:
case 663:
case 766:
case 3070:
case 1459:
case 3836:
case 2961:
case 374:
case 3652:
case 2025:
case 3661:
case 1300:
case 3061:
case 3827:
case 2227:
case 468:
case 3609:
case 3185:
case 3568:
case 2898:
case 2511:
case 2177:
case 2342:
case 1831:
case 3920:
case 3377:
case 1950:
case 3378:
case 2949:
case 307:
case 1655:
case 3351:
case 753:
case 3974:
case 2110:
case 2849:
case 3968:
case 1486:
case 1621:
case 943:
case 1869:
case 3770:
case 1164:
case 2769:
case 3043:
case 3417:
case 841:
case 3231:
case 3457:
case 1302:
case 2374:
case 210:
case 1764:
case 1291:
case 2224:
case 232:
case 3204:
case 2428:
case 3478:
case 2795:
case 2904:
case 157:
case 2411:
case 2733:
case 3589:
case 3806:
case 2724:
case 395:
case 469:
case 2502:
case 300:
case 3921:
case 1345:
case 1452:
case 772:
case 1755:
case 2325:
case 669:
case 2897:
case 922:
case 301:
case 2347:
case 2112:
case 2217:
case 613:
case 2741:
case 1666:
case 3475:
case 3200:
case 2672:
case 692:
case 181:
case 1252:
case 336:
case 818:
case 1275:
case 3658:
case 2530:
case 2021:
case 3828:
case 1566:
case 474:
case 3178:
case 3499:
case 4094:
case 1582:
case 1437:
case 2565:
case 2130:
case 4001:
case 3706:
case 743:
case 2458:
case 2191:
case 1501:
case 923:
case 3643:
case 3415:
case 160:
case 925:
case 3278:
case 2319:
case 1021:
case 2841:
case 3612:
case 3797:
case 1469:
case 3004:
case 3659:
case 901:
case 2027:
case 3162:
case 1003:
case 4058:
case 2004:
case 3890:
case 1389:
case 2354:
case 888:
case 1914:
case 3234:
case 3443:
case 621:
case 3009:
case 1045:
case 3951:
case 1130:
case 2282:
case 2991:
case 3441:
case 3164:
case 2198:
case 489:
case 1246:
case 2668:
case 244:
case 1346:
case 3794:
case 208:
case 537:
case 3225:
case 2664:
case 2714:
case 1811:
case 3877:
case 2796:
case 2917:
case 3595:
case 3066:
case 2882:
case 319:
case 3309:
case 1878:
case 1157:
case 18:
case 1169:
case 406:
case 1890:
case 142:
case 1339:
case 152:
case 3412:
case 2734:
case 2196:
case 2339:
case 2856:
case 2283:
case 2286:
case 3454:
case 2892:
case 3994:
case 2563:
case 1576:
case 2532:
case 1913:
case 1631:
case 2010:
case 3696:
case 3345:
case 3206:
case 911:
case 164:
case 476:
case 2087:
case 759:
case 1964:
case 1990:
case 3340:
case 3203:
case 3094:
case 3364:
case 308:
case 3977:
case 328:
case 2460:
case 3846:
case 3062:
case 426:
case 836:
case 1483:
case 3894:
case 3414:
case 3571:
case 1896:
case 3682:
case 4003:
case 1089:
case 1825:
case 1102:
case 1747:
case 170:
case 1810:
case 2489:
case 2036:
case 1862:
case 3800:
case 3579:
case 302:
case 3175:
case 2158:
case 2000:
case 290:
case 315:
case 206:
case 3678:
case 3878:
case 1801:
case 3002:
case 2598:
case 376:
case 1240:
case 2845:
case 2573:
case 2314:
case 2304:
case 889:
case 658:
case 1789:
case 1829:
case 2323:
case 1507:
case 831:
case 2413:
case 2644:
case 2090:
case 3901:
case 1466:
case 3048:
case 1344:
case 1965:
case 662:
case 2190:
case 2624:
case 1793:
case 679:
case 273:
case 590:
case 4072:
case 2359:
case 4077:
case 3948:
case 2870:
case 1757:
case 4070:
case 454:
case 2851:
case 2119:
case 2360:
case 3439:
case 3131:
case 2373:
case 2537:
case 2052:
case 3562:
case 1988:
case 1206:
case 1637:
case 3108:
case 1059:
case 2960:
case 4049:
case 1729:
case 1565:
case 2857:
case 3347:
case 1682:
case 3248:
case 931:
case 1533:
case 677:
case 1519:
case 2861:
case 2148:
case 835:
case 2859:
case 1551:
case 3733:
case 360:
case 2780:
case 3176:
case 1253:
case 2860:
case 2706:
case 130:
case 2868:
case 493:
case 1601:
case 2188:
case 3290:
case 785:
case 306:
case 1674:
case 161:
case 4076:
case 329:
case 176:
case 2135:
case 1935:
case 2997:
case 545:
case 2616:
case 2375:
case 3076:
case 3919:
case 1110:
case 559:
case 2620:
case 1944:
case 561:
case 1248:
case 3032:
case 441:
case 3450:
case 2420:
case 1487:
case 3708:
case 3957:
case 4:
case 582:
case 1264:
case 524:
case 2683:
case 1753:
case 1984:
case 201:
case 1230:
case 1994:
case 3928:
case 486:
case 2044:
case 1228:
case 967:
case 3122:
case 253:
case 1436:
case 1922:
case 2753:
case 2658:
case 1826:
case 39:
case 886:
case 3127:
case 1502:
case 2223:
case 1579:
case 1104:
case 1692:
case 2212:
case 438:
case 1444:
case 730:
case 1279:
case 2444:
case 2003:
case 371:
case 3343:
case 1296:
case 283:
case 739:
case 761:
case 3822:
case 2919:
case 195:
case 447:
case 1384:
case 303:
case 1474:
case 3299:
case 1046:
case 2204:
case 23:
case 2699:
case 3093:
case 4050:
case 3496:
case 2567:
case 77:
case 191:
case 1196:
case 1342:
case 139:
case 2819:
case 1785:
case 762:
case 2931:
case 1082:
case 1364:
case 2637:
case 2900:
case 3207:
case 2540:
case 4036:
case 2993:
case 2466:
case 2128:
case 2201:
case 3245:
case 2349:
case 2548:
case 3283:
case 3793:
case 870:
case 2645:
case 2427:
case 1611:
case 770:
case 2775:
case 3907:
case 1204:
case 2335:
case 228:
case 1326:
case 3622:
case 837:
case 1511:
case 1649:
case 2837:
case 2367:
case 3645:
case 1272:
case 3470:
case 589:
case 3407:
case 3783:
case 1038:
case 217:
case 821:
case 1073:
case 1281:
case 724:
case 2068:
case 2555:
case 571:
case 744:
case 46:
case 3114:
case 1405:
case 2202:
case 3214:
case 3217:
case 2996:
case 3482:
case 2141:
case 318:
case 3083:
case 1111:
case 1513:
case 1425:
case 3082:
case 940:
case 3288:
case 3456:
case 3081:
case 2109:
case 281:
case 2970:
case 1154:
case 213:
case 422:
case 2060:
case 1938:
case 2320:
case 1603:
case 551:
case 822:
case 128:
case 3867:
case 686:
case 1864:
case 1556:
case 969:
case 3010:
case 3904:
case 214:
case 2195:
case 3042:
case 805:
case 863:
case 3404:
case 3858:
case 2399:
case 1412:
case 2478:
case 2138:
case 3451:
case 3040:
case 1422:
case 2405:
case 2142:
case 1897:
case 2829:
case 649:
case 3369:
case 44:
case 1524:
case 1942:
case 1030:
case 873:
case 2806:
case 298:
case 3689:
case 3954:
case 3191:
case 3473:
case 3120:
case 2434:
case 2895:
case 2959:
case 2965:
case 2296:
case 3929:
case 188:
case 527:
case 2251:
case 3171:
case 1769:
case 1952:
case 264:
case 1402:
case 1227:
case 2805:
case 751:
case 62:
case 294:
case 2229:
case 3776:
case 921:
case 2638:
case 1962:
case 3616:
case 2784:
case 2181:
case 3276:
case 11:
case 3269:
case 3830:
case 3547:
case 1848:
case 964:
case 1521:
case 3437:
case 2756:
case 880:
case 373:
case 1143:
case 342:
case 2066:
case 3266:
case 3017:
case 1904:
case 91:
case 3091:
case 1667:
case 1863:
case 408:
case 2910:
case 227:
case 1007:
case 1717:
case 1725:
case 2155:
case 1900:
case 862:
case 3218:
case 3262:
case 1728:
case 2496:
case 516:
case 3342:
case 338:
case 3356:
case 1617:
case 2412:
case 1559:
case 1122:
case 3228:
case 1718:
case 129:
case 1908:
case 2554:
case 3313:
case 3812:
case 910:
case 1807:
case 3842:
case 2661:
case 3023:
case 3304:
case 224:
case 4075:
case 748:
case 2072:
case 243:
case 1816:
case 1304:
case 3818:
case 1179:
case 414:
case 1515:
case 814:
case 884:
case 1194:
case 2812:
case 1772:
case 2383:
case 853:
case 1509:
case 668:
case 331:
case 664:
case 1446:
case 1960:
case 1857:
case 185:
case 755:
case 3862:
case 289:
case 2736:
case 7:
case 892:
case 3012:
case 362:
case 299:
case 117:
case 189:
case 1175:
case 190:
case 367:
case 1930:
case 2943:
case 3802:
case 3955:
case 2693:
case 2276:
case 944:
case 2281:
case 1352:
case 3709:
case 41:
case 2682:
case 4083:
case 1479:
case 498:
case 3873:
case 918:
case 1894:
case 4014:
case 1321:
case 868:
case 3289:
case 1782:
case 1099:
case 220:
case 3373:
case 1593:
case 2830:
case 3679:
case 3984:
case 3544:
case 3543:
case 390:
case 2080:
case 887:
case 3810:
case 2343:
case 106:
case 552:
case 1861:
case 2152:
case 3626:
case 2836:
case 353:
case 919:
case 3403:
case 2808:
case 3142:
case 3847:
case 3694:
case 352:
case 1774:
case 4065:
case 1854:
case 140:
case 2057:
case 740:
case 1070:
case 1484:
case 324:
case 2872:
case 2748:
case 890:
case 3513:
case 2365:
case 645:
case 1401:
case 32:
case 3584:
case 3249:
case 464:
case 2078:
case 3486:
case 2745:
case 712:
case 1741:
case 3435:
case 907:
case 1875:
case 747:
case 3551:
case 47:
case 501:
case 607:
case 3835:
case 2364:
case 1880:
case 3663:
case 1790:
case 4022:
case 3041:
case 882:
case 3154:
case 2488:
case 1355:
case 2113:
case 3691:
case 2818:
case 3909:
case 2920:
case 2213:
case 905:
case 1784:
case 1177:
case 3526:
case 3736:
case 3634:
case 1989:
case 3533:
case 1095:
case 628:
case 1012:
case 1367:
case 3565:
case 2209:
case 49:
case 1181:
case 875:
case 3143:
case 849:
case 704:
case 3939:
case 924:
case 153:
case 1855:
case 4028:
case 3354:
case 239:
case 165:
case 2465:
case 2621:
case 3492:
case 996:
case 3641:
case 2907:
case 3323:
case 2260:
case 1149:
case 711:
case 654:
case 1133:
case 2884:
case 1822:
case 1028:
case 2526:
case 2424:
case 1270:
case 754:
case 3286:
case 3448:
case 2866:
case 1006:
case 2810:
case 490:
case 1671:
case 3086:
case 1627:
case 2077:
case 322:
case 1708:
case 1698:
case 2238:
case 2163:
case 3739:
case 1595:
case 2967:
case 2041:
case 812:
case 3182:
case 465:
case 1187:
case 147:
case 2379:
case 1134:
case 1061:
case 3724:
case 908:
case 3608:
case 2992:
case 1905:
case 4043:
case 1158:
case 2492:
case 1604:
case 2034:
case 504:
case 1656:
case 648:
case 1222:
case 3673:
case 114:
case 3158:
case 1337:
case 917:
case 1981:
case 2539:
case 979:
case 4029:
case 713:
case 1274:
case 1159:
case 3805:
case 449:
case 540:
case 1180:
case 3593:
case 3180:
case 3669:
case 1271:
case 2725:
case 2865:
case 2024:
case 934:
case 154:
case 1066:
case 4002:
case 1587:
case 1294:
case 4067:
case 1798:
case 1085:
case 1295:
case 2022:
case 799:
case 409:
case 3958:
case 3596:
case 3449:
case 2914:
case 1547:
case 3764:
case 3773:
case 2140:
case 4068:
case 453:
case 1193:
case 3405:
case 3402:
case 3815:
case 840:
case 1265:
case 2503:
case 382:
case 723:
case 1419:
case 3168:
case 3792:
case 70:
case 508:
case 542:
case 2522:
case 3282:
case 2835:
case 200:
case 1823:
case 2149:
case 1613:
case 2509:
case 2615:
case 1648:
case 895:
case 2514:
case 3232:
case 680:
case 842:
case 1359:
case 547:
case 560:
case 3314:
case 1242:
case 3985:
case 3145:
case 867:
case 2604:
case 3613:
case 3438:
case 2309:
case 242:
case 1497:
case 463:
case 4091:
case 738:
case 1385:
case 689:
case 368:
case 562:
case 982:
case 1058:
case 3632:
case 2614:
case 2575:
case 1673:
case 2611:
case 2001:
case 2501:
case 2341:
case 1918:
case 1224:
case 13:
case 568:
case 89:
case 2630:
case 3196:
case 1232:
case 2263:
case 3786:
case 1395:
case 1552:
case 413:
case 598:
case 706:
case 3021:
case 3868:
case 2278:
case 3427:
case 1999:
case 3105:
case 1706:
case 2647:
case 3315:
case 183:
case 2089:
case 427:
case 572:
case 1357:
case 1735:
case 3452:
case 2814:
case 225:
case 166:
case 3711:
case 3188:
case 3820:
case 92:
case 1992:
case 3139:
case 1959:
case 3712:
case 2180:
case 1612:
case 3657:
case 1624:
case 1014:
case 1317:
case 3281:
case 51:
case 684:
case 800:
case 2648:
case 1185:
case 2940:
case 1696:
case 1016:
case 351:
case 4012:
case 4021:
case 2187:
case 3118:
case 961:
case 3664:
case 709:
case 1410:
case 1640:
case 3201:
case 226:
case 763:
case 1876:
case 262:
case 1005:
case 3522:
case 2418:
case 2483:
case 2321:
case 3740:
case 3879:
case 1257:
case 3361:
case 623:
case 3860:
case 515:
case 2691:
case 3990:
case 584:
case 2801:
case 1403:
case 3614:
case 2553:
case 3357:
case 1324:
case 2986:
case 4088:
case 396:
case 2930:
case 3113:
case 2698:
case 1290:
case 1220:
case 2631:
case 765:
case 3058:
case 1322:
case 343:
case 2203:
case 1659:
case 1676:
case 1961:
case 3339:
case 3141:
case 2607:
case 603:
case 1329:
case 3331:
case 3769:
case 2330:
case 1538:
case 235:
case 569:
case 2557:
case 3915:
case 1084:
case 2298:
case 1255:
case 1393:
case 398:
case 2362:
case 1517:
case 1575:
case 2387:
case 3956:
case 3220:
case 2404:
case 1837:
case 1029:
case 769:
case 3881:
case 2403:
case 2984:
case 333:
case 2370:
case 2536:
case 3049:
case 2451:
case 2782:
case 3387:
case 1528:
case 363:
case 2560:
case 2028:
case 3384:
case 1973:
case 1845:
case 1155:
case 1334:
case 357:
case 3944:
case 4095:
case 1276:
case 1684:
case 2702:
case 3250:
case 2669:
case 2273:
case 3594:
case 249:
case 1946:
case 1330:
case 1340:
case 760:
case 1813:
case 1161:
case 171:
case 532:
case 3527:
case 1426:
case 974:
case 3297:
case 2097:
case 2942:
case 2618:
case 3300:
case 731:
case 1462:
case 1285:
case 1629:
case 2954:
case 3383:
case 1056:
case 1545:
case 3560:
case 4082:
case 2311:
case 2388:
case 3607:
case 35:
case 1383:
case 1482:
case 1024:
case 1127:
case 3170:
case 3319:
case 1081:
case 3900:
case 2484:
case 1438:
case 844:
case 671:
case 219:
case 3263:
case 2589:
case 108:
case 431:
case 1019:
case 1298:
case 3284:
case 2326:
case 3627:
case 3796:
case 3468:
case 4054:
case 565:
case 1033:
case 99:
case 1315:
case 2798:
case 3247:
case 688:
case 850:
case 2264:
case 2776:
case 2073:
case 1259:
case 3863:
case 1700:
case 2758:
case 1441:
case 2697:
case 506:
case 4071:
case 1976:
case 834:
case 2792:
case 196:
case 2921:
case 2345:
case 2641:
case 556:
case 3623:
case 3757:
case 945:
case 1720:
case 2718:
case 2306:
case 3389:
case 3050:
case 1895:
case 1431:
case 68:
case 790:
case 741:
case 236:
case 1480:
case 2126:
case 375:
case 1553:
case 2656:
case 3123:
case 2094:
case 2569:
case 795:
case 2490:
case 1795:
case 2916:
case 389:
case 823:
case 2715:
case 1763:
case 2329:
case 3935:
case 2593:
case 2417:
case 1669:
case 3365:
case 295:
case 2425:
case 2580:
case 530:
case 1615:
case 643:
case 1386:
case 2407:
case 1273:
case 3358:
case 423:
case 1724:
case 3494:
case 550:
case 702:
case 3781:
case 3469:
case 1866:
case 159:
case 2422:
case 3192:
case 72:
case 2381:
case 2978:
case 1445:
case 2873:
case 2603:
case 3869:
case 700:
case 2366:
case 2414:
case 826:
case 3685:
case 1573:
case 2635:
case 3675:
case 2356:
case 2985:
case 914:
case 2639:
case 2479:
case 2368:
case 3597:
case 173:
case 848:
case 1558:
case 1083:
case 3518:
case 215:
case 1011:
case 2480:
case 626:
case 2214:
case 1336:
case 2161:
case 3986:
case 2854:
case 2773:
case 642:
case 581:
case 920:
case 2401:
case 998:
case 3980:
case 3697:
case 2402:
case 3930:
case 2909:
case 1216:
case 1974:
case 883:
case 4057:
case 2994:
case 953:
case 3566:
case 3410:
case 2058:
case 3416:
case 1379:
case 3222:
case 2887:
case 1758:
case 369:
case 2793:
case 309:
case 2694:
case 3051:
case 3934:
case 838:
case 1997:
case 1967:
case 2786:
case 2922:
case 2676:
case 683:
case 3785:
case 71:
case 993:
case 316:
case 824:
case 2928:
case 1514:
case 4027:
case 2765:
case 1966:
case 3413:
case 932:
case 2712:
case 2594:
case 1088:
case 3998:
case 3620:
case 639:
case 1319:
case 3453:
case 2475:
case 2390:
case 3503:
case 2983:
case 2487:
case 609:
case 2975:
case 1702:
case 3016:
case 1051:
case 1456:
case 2026:
case 523:
case 88:
case 1638:
case 3852:
case 3075:
case 2435:
case 2291:
case 3519:
case 3198:
case 1494:
case 2749:
case 3095:
case 2127:
case 337:
case 111:
case 3848:
case 3839:
case 2075:
case 1464:
case 274:
case 3715:
case 708:
case 1414:
case 2318:
case 3135:
case 156:
case 3938:
case 3741:
case 1929:
case 3540:
case 3485:
case 1906:
case 3563:
case 732:
case 992:
case 3816:
case 3003:
case 1675:
case 949:
case 520:
case 2348:
case 2519:
case 2226:
case 282:
case 3320:
case 937:
case 3671:
case 2684:
case 1574:
case 2050:
case 3459:
case 4034:
case 3246:
case 1694:
case 718:
case 3116:
case 136:
case 2592:
case 2322:
case 1982:
case 3163:
case 2803:
case 2595:
case 1971:
case 3604:
case 1186:
case 594:
case 630:
case 801:
case 1695:
case 2956:
case 833:
case 1934:
case 2912:
case 1365:
case 624:
case 3633:
case 788:
case 4016:
case 3592:
case 2415:
case 401:
case 817:
case 784:
case 3656:
case 3899:
case 1210:
case 1488:
case 1919:
case 2934:
case 3087:
case 2606:
case 1010:
case 1268:
case 2783:
case 4004:
case 211:
case 4044:
case 2789:
case 1032:
case 3239:
case 2517:
case 1128:
case 3063:
case 1522:
case 1397:
case 3963:
case 2358:
case 3039:
case 860:
case 73:
case 87:
case 852:
case 2848:
case 3569:
case 861:
case 656:
case 691:
case 2059:
case 2998:
case 1668:
case 521:
case 903:
case 2527:
case 1201:
case 3488:
case 3993:
case 3224:
case 2133:
case 855:
case 392:
case 1882:
case 394:
case 1199:
case 2035:
case 1075:
case 1141:
case 2039:
case 1454:
case 76:
case 1703:
case 1766:
case 3886:
case 3005:
case 0:
case 1583:
case 1585:
case 3554:
case 3695:
case 179:
case 3851:
case 450:
case 710:
case 1632:
case 1849:
case 2880:
case 3529:
case 3837:
case 3625:
case 2723:
case 1860:
case 1824:
case 435:
case 1026:
case 3587:
case 3014:
case 3322:
case 1523:
case 1396:
case 1443:
case 2270:
case 756:
case 272:
case 2571:
case 2696:
case 2610:
case 3765:
case 1309:
case 4055:
case 3940:
case 2891:
case 1335:
case 2781:
case 203:
case 3684:
case 2064:
case 3316:
case 610:
case 3575:
case 544:
case 2095:
case 1915:
case 2438:
case 2507:
case 3872:
case 254:
case 3310:
case 3538:
case 699:
case 168:
case 2265:
case 3019:
case 2174:
case 1347:
case 3007:
case 2123:
case 3401:
case 1536:
case 2933:
case 2426:
case 2259:
case 737:
case 697:
case 2617:
case 593:
case 912:
case 2822:
case 1112:
case 3046:
case 1496:
case 807:
case 466:
case 2505:
case 3241:
case 1748:
case 3950:
case 2457:
case 1475:
case 997:
case 1562:
case 2015:
case 1975:
case 2153:
case 2049:
case 3112:
case 155:
case 424:
case 2419:
case 1951:
case 1000:
case 1778:
case 1683:
case 8:
case 317:
case 1767:
case 1710:
case 1742:
case 3755:
case 2337:
case 3477:
case 1353:
case 2447:
case 1113:
case 3916:
case 1561:
case 2179:
case 1387:
case 574:
case 19:
case 2500:
case 3511:
case 1258:
case 3686:
case 2194:
case 3274:
case 3125:
case 2735:
case 3581:
case 2409:
case 1049:
case 197:
case 3434:
case 3723:
case 2176:
case 3577:
case 2336:
case 866:
case 3277:
case 1773:
case 3071:
case 3267:
case 3173:
case 939:
case 1636:
case 234:
case 2230:
case 1184:
case 3902:
case 167:
case 2038:
case 3165:
case 3:
case 2299:
case 797:
case 830:
case 3330:
case 606:
case 806:
case 930:
case 2392:
case 1779:
case 510:
case 2084:
case 2879:
case 3771:
case 452:
case 3718:
case 3033:
case 2629:
case 1530:
case 1643:
case 3778:
case 3574:
case 101:
case 3917:
case 3128:
case 604:
case 3461:
case 1743:
case 1705:
case 3430:
case 3702:
case 4000:
case 2899:
case 2045:
case 878:
case 4045:
case 2134:
case 3914:
case 3698:
case 4059:
case 1912:
case 1901:
case 2670:
case 385:
case 665:
case 2609:
case 2389:
case 2474:
case 1690:
case 1600:
case 1563:
case 2350:
case 3386:
case 942:
case 3840:
case 1381:
case 2338:
case 3602:
case 954:
case 3096:
case 655:
case 313:
case 3808:
case 3635:
case 3474:
case 1420:
case 2883:
case 2729:
case 847:
case 2344:
case 690:
case 963:
case 3285:
case 2168:
case 237:
case 1518:
case 2974:
case 1060:
case 3480:
case 1041:
case 3101:
case 2926:
case 1534:
case 175:
case 1413:
case 3085:
case 3885:
case 3864:
case 3744:
case 2660:
case 3291:
case 2908:
case 3947:
case 2742:
case 3341:
case 3798:
case 3293:
case 650:
case 42:
case 3922:
case 1305:
case 1278:
case 4078:
case 1508:
case 720:
case 2463:
case 3703:
case 1568:
case 2587:
case 1993:
case 787:
case 973:
case 685:
case 1888:
case 1664:
case 1537:
case 2243:
case 557:
case 2655:
case 4033:
case 3874:
case 3717:
case 1670:
case 127:
case 3891:
case 1630:
case 387:
case 2165:
case 248:
case 652:
case 579:
case 116:
case 1818:
case 3887:
case 2767:
case 2193:
case 1463:
case 3850:
case 1392:
case 1043:
case 402:
case 3714:
case 783:
case 2918:
case 311:
case 96:
case 162:
case 1312:
case 2481:
case 1027:
case 178:
case 3557:
case 1288:
case 3530:
case 261:
case 705:
case 247:
case 255:
case 3279:
case 2673:
case 614:
case 1369:
case 2584:
case 240:
case 2233:
case 2207:
case 1926:
case 2678:
case 1846:
case 782:
case 1333:
case 1160:
case 3672:
case 786:
case 461:
case 1251:
case 1542:
case 2766:
case 3181:
case 3586:
case 2727:
case 1374:
case 1731:
case 3308:
case 257:
case 2707:
case 5:
case 1691:
case 1123:
case 2197:
case 2086:
case 1859:
case 1147:
case 1868:
case 3639:
case 1594:
case 525:
case 781:
case 2333:
case 2547:
case 938:
case 3059:
case 405:
case 366:
case 1054:
case 3610:
case 3834:
case 1190:
case 3292:
case 3832:
case 1968:
case 2494:
case 1168:
case 1719:
case 2131:
case 2436:
case 381:
case 1503:
case 2455:
case 2386:
case 2253:
case 874:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1651431601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,];
var gg_b = "1651431601/";

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
