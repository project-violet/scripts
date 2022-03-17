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
case 1625:
case 4061:
case 368:
case 2045:
case 2280:
case 1488:
case 3399:
case 2598:
case 2196:
case 3643:
case 4012:
case 4045:
case 556:
case 3011:
case 199:
case 2544:
case 3280:
case 2145:
case 1672:
case 3286:
case 1370:
case 2841:
case 2836:
case 2055:
case 3052:
case 2252:
case 2112:
case 1282:
case 3819:
case 967:
case 2103:
case 1298:
case 3976:
case 2456:
case 3020:
case 2734:
case 766:
case 265:
case 616:
case 3968:
case 3279:
case 2129:
case 3733:
case 89:
case 2078:
case 3903:
case 3071:
case 4059:
case 3825:
case 3912:
case 2922:
case 1115:
case 1306:
case 3887:
case 1891:
case 562:
case 1160:
case 1689:
case 2229:
case 3263:
case 3089:
case 393:
case 1940:
case 2444:
case 1603:
case 3456:
case 3388:
case 1668:
case 2211:
case 246:
case 187:
case 3454:
case 2835:
case 1885:
case 3726:
case 2574:
case 2031:
case 3616:
case 2347:
case 1725:
case 1785:
case 944:
case 992:
case 1969:
case 2303:
case 1355:
case 3423:
case 1863:
case 1830:
case 2951:
case 1570:
case 1890:
case 3081:
case 3627:
case 3831:
case 2937:
case 1634:
case 2333:
case 791:
case 3110:
case 112:
case 3357:
case 542:
case 571:
case 1773:
case 875:
case 3494:
case 1824:
case 1799:
case 1135:
case 1044:
case 1587:
case 176:
case 78:
case 2587:
case 2602:
case 756:
case 2838:
case 1059:
case 2525:
case 1804:
case 3591:
case 2165:
case 3649:
case 857:
case 357:
case 3784:
case 281:
case 955:
case 1241:
case 3024:
case 2988:
case 3141:
case 1605:
case 347:
case 3247:
case 2102:
case 1657:
case 4069:
case 2009:
case 82:
case 2087:
case 4082:
case 3847:
case 3260:
case 544:
case 2261:
case 3576:
case 3282:
case 564:
case 87:
case 3035:
case 14:
case 350:
case 86:
case 3050:
case 2944:
case 446:
case 3689:
case 2066:
case 2516:
case 3450:
case 1205:
case 172:
case 2935:
case 2886:
case 3237:
case 1384:
case 2222:
case 1831:
case 823:
case 1802:
case 2460:
case 251:
case 935:
case 1825:
case 1941:
case 2624:
case 3034:
case 3893:
case 3610:
case 1549:
case 1212:
case 3850:
case 3121:
case 2683:
case 3553:
case 3653:
case 770:
case 336:
case 490:
case 2406:
case 1815:
case 2523:
case 1753:
case 4051:
case 1018:
case 447:
case 3867:
case 684:
case 3710:
case 255:
case 685:
case 325:
case 2311:
case 3923:
case 1012:
case 3356:
case 2914:
case 2119:
case 2195:
case 3113:
case 3134:
case 3142:
case 3292:
case 3138:
case 484:
case 3291:
case 1315:
case 2853:
case 96:
case 762:
case 3156:
case 1755:
case 1664:
case 1684:
case 1179:
case 2281:
case 3885:
case 3140:
case 2179:
case 3455:
case 2472:
case 2551:
case 2873:
case 778:
case 3670:
case 634:
case 583:
case 1898:
case 1038:
case 3667:
case 1438:
case 2437:
case 1033:
case 3193:
case 3353:
case 1788:
case 1745:
case 3898:
case 2134:
case 1009:
case 838:
case 1302:
case 2869:
case 572:
case 1225:
case 928:
case 3400:
case 913:
case 3680:
case 1060:
case 3385:
case 1875:
case 1723:
case 1070:
case 2870:
case 3365:
case 2535:
case 1871:
case 2864:
case 2186:
case 1814:
case 415:
case 1040:
case 3275:
case 763:
case 198:
case 3516:
case 1719:
case 1700:
case 1437:
case 1359:
case 1696:
case 1203:
case 2202:
case 3367:
case 2645:
case 2378:
case 1622:
case 2504:
case 2295:
case 3064:
case 1140:
case 743:
case 389:
case 432:
case 3270:
case 1595:
case 307:
case 3835:
case 3542:
case 2113:
case 2073:
case 3740:
case 742:
case 3046:
case 4049:
case 3465:
case 1883:
case 1169:
case 2288:
case 2494:
case 3771:
case 383:
case 1450:
case 692:
case 1495:
case 2875:
case 3028:
case 467:
case 2161:
case 768:
case 1110:
case 420:
case 455:
case 1880:
case 2770:
case 3294:
case 3671:
case 648:
case 410:
case 2369:
case 1149:
case 512:
case 2717:
case 917:
case 2067:
case 3497:
case 713:
case 37:
case 3016:
case 3274:
case 785:
case 3374:
case 430:
case 3340:
case 2653:
case 890:
case 1055:
case 2843:
case 428:
case 2462:
case 3688:
case 633:
case 1848:
case 1021:
case 1316:
case 3934:
case 3973:
case 212:
case 26:
case 1843:
case 373:
case 4086:
case 301:
case 2643:
case 3951:
case 2363:
case 3787:
case 156:
case 1439:
case 3048:
case 4089:
case 510:
case 3169:
case 555:
case 2955:
case 2453:
case 1428:
case 1229:
case 2599:
case 1529:
case 2880:
case 2271:
case 502:
case 2759:
case 3638:
case 395:
case 1677:
case 2189:
case 1922:
case 2193:
case 1712:
case 814:
case 2699:
case 3269:
case 776:
case 1910:
case 708:
case 3397:
case 1170:
case 1724:
case 469:
case 3205:
case 2932:
case 1523:
case 129:
case 2052:
case 2611:
case 3402:
case 3177:
case 734:
case 2441:
case 53:
case 4065:
case 3587:
case 3911:
case 2968:
case 3316:
case 1025:
case 2132:
case 2975:
case 541:
case 3344:
case 3447:
case 825:
case 3644:
case 279:
case 234:
case 1092:
case 1599:
case 3306:
case 2400:
case 3355:
case 775:
case 3800:
case 2022:
case 2501:
case 1311:
case 2421:
case 2916:
case 628:
case 1833:
case 1665:
case 2069:
case 224:
case 1568:
case 2989:
case 582:
case 3515:
case 253:
case 2253:
case 2266:
case 3715:
case 2536:
case 3055:
case 444:
case 2530:
case 468:
case 2684:
case 658:
case 3937:
case 1107:
case 1390:
case 1497:
case 1011:
case 1051:
case 3949:
case 3054:
case 1274:
case 1215:
case 1988:
case 573:
case 936:
case 1427:
case 719:
case 3943:
case 474:
case 1310:
case 2584:
case 3369:
case 3349:
case 2278:
case 3495:
case 1420:
case 284:
case 1832:
case 2997:
case 369:
case 3261:
case 2629:
case 3023:
case 1987:
case 1162:
case 2315:
case 278:
case 1607:
case 1601:
case 3683:
case 3098:
case 2396:
case 3618:
case 2287:
case 309:
case 2332:
case 1379:
case 2632:
case 1784:
case 193:
case 1514:
case 787:
case 1053:
case 3862:
case 1766:
case 2254:
case 3401:
case 613:
case 3001:
case 2697:
case 1035:
case 2593:
case 993:
case 2633:
case 3210:
case 727:
case 1341:
case 1236:
case 1348:
case 1527:
case 4:
case 1638:
case 774:
case 2595:
case 2388:
case 1244:
case 1959:
case 3238:
case 2426:
case 1566:
case 1030:
case 3623:
case 4054:
case 2468:
case 1189:
case 2881:
case 36:
case 3869:
case 1240:
case 3609:
case 947:
case 1801:
case 2219:
case 3008:
case 603:
case 897:
case 1402:
case 385:
case 1027:
case 1965:
case 1266:
case 1666:
case 2344:
case 3634:
case 654:
case 678:
case 996:
case 2840:
case 2097:
case 2382:
case 3226:
case 2061:
case 2766:
case 1237:
case 1713:
case 689:
case 755:
case 1143:
case 2612:
case 1542:
case 1136:
case 2160:
case 2817:
case 3959:
case 1119:
case 400:
case 2948:
case 2679:
case 3225:
case 272:
case 2834:
case 3531:
case 1531:
case 2265:
case 991:
case 1779:
case 950:
case 119:
case 3025:
case 363:
case 440:
case 1469:
case 2628:
case 2386:
case 856:
case 175:
case 2192:
case 2642:
case 808:
case 211:
case 1876:
case 4087:
case 101:
case 3950:
case 626:
case 3354:
case 1445:
case 10:
case 977:
case 2984:
case 3700:
case 858:
case 2301:
case 3342:
case 226:
case 2276:
case 161:
case 2992:
case 3135:
case 2109:
case 599:
case 1297:
case 2215:
case 3070:
case 686:
case 1718:
case 3366:
case 2928:
case 3841:
case 4037:
case 346:
case 2310:
case 1765:
case 970:
case 1900:
case 105:
case 2152:
case 927:
case 2362:
case 2893:
case 1955:
case 2349:
case 1519:
case 3617:
case 2385:
case 3475:
case 1317:
case 117:
case 619:
case 806:
case 3891:
case 2208:
case 1328:
case 402:
case 1332:
case 4070:
case 3738:
case 1630:
case 1062:
case 3650:
case 115:
case 1291:
case 229:
case 1342:
case 2080:
case 837:
case 624:
case 3852:
case 2366:
case 2529:
case 1797:
case 3994:
case 1220:
case 2068:
case 668:
case 786:
case 2672:
case 3168:
case 1356:
case 1249:
case 3660:
case 591:
case 2428:
case 2756:
case 3528:
case 498:
case 3208:
case 273:
case 2857:
case 2780:
case 1792:
case 3760:
case 1937:
case 3073:
case 2122:
case 1545:
case 3557:
case 493:
case 1401:
case 2292:
case 2330:
case 1809:
case 434:
case 3838:
case 688:
case 2668:
case 1840:
case 70:
case 3884:
case 933:
case 3079:
case 2630:
case 3317:
case 3828:
case 2480:
case 2475:
case 214:
case 2508:
case 2965:
case 3499:
case 3626:
case 3652:
case 77:
case 2744:
case 1855:
case 4002:
case 3698:
case 2345:
case 2011:
case 3633:
case 3713:
case 125:
case 3865:
case 895:
case 170:
case 915:
case 2631:
case 1970:
case 1645:
case 1918:
case 757:
case 4036:
case 1642:
case 1279:
case 1064:
case 2650:
case 174:
case 2017:
case 4039:
case 3900:
case 740:
case 3058:
case 2373:
case 1105:
case 2054:
case 1128:
case 3585:
case 1600:
case 249:
case 659:
case 1493:
case 1475:
case 3086:
case 3929:
case 2783:
case 4076:
case 106:
case 3508:
case 1604:
case 1153:
case 805:
case 1754:
case 2775:
case 2680:
case 2381:
case 1811:
case 4046:
case 2074:
case 1307:
case 3881:
case 2247:
case 1417:
case 1394:
case 433:
case 3486:
case 3203:
case 2558:
case 507:
case 1505:
case 1207:
case 1462:
case 718:
case 2728:
case 2623:
case 3188:
case 1709:
case 1419:
case 1116:
case 2991:
case 3978:
case 1257:
case 1191:
case 871:
case 887:
case 268:
case 855:
case 3189:
case 3094:
case 2859:
case 3990:
case 370:
case 1902:
case 553:
case 3408:
case 2723:
case 1184:
case 929:
case 1099:
case 4020:
case 1371:
case 1935:
case 3325:
case 1731:
case 3798:
case 1422:
case 2616:
case 168:
case 4009:
case 1663:
case 990:
case 326:
case 4032:
case 3191:
case 885:
case 1991:
case 1920:
case 1020:
case 116:
case 1499:
case 1157:
case 1050:
case 1122:
case 720:
case 2218:
case 862:
case 2704:
case 714:
case 3006:
case 508:
case 3206:
case 521:
case 3038:
case 1246:
case 4040:
case 387:
case 423:
case 3148:
case 3796:
case 702:
case 1586:
case 3133:
case 3228:
case 874:
case 2964:
case 3378:
case 698:
case 1234:
case 1221:
case 208:
case 896:
case 3335:
case 2320:
case 737:
case 3593:
case 3223:
case 183:
case 3686:
case 3808:
case 3756:
case 3753:
case 2926:
case 409:
case 1:
case 1079:
case 3507:
case 987:
case 3087:
case 240:
case 3501:
case 2705:
case 35:
case 1278:
case 2463:
case 2764:
case 1710:
case 2348:
case 942:
case 114:
case 1769:
case 1763:
case 3267:
case 2248:
case 3889:
case 338:
case 1393:
case 1597:
case 1931:
case 3149:
case 3522:
case 427:
case 3548:
case 2578:
case 352:
case 2158:
case 844:
case 554:
case 834:
case 1526:
case 3150:
case 680:
case 2980:
case 3506:
case 38:
case 1449:
case 3216:
case 405:
case 3823:
case 3160:
case 1262:
case 3917:
case 868:
case 1960:
case 2198:
case 832:
case 2476:
case 1714:
case 733:
case 906:
case 365:
case 3164:
case 3265:
case 1849:
case 3672:
case 1886:
case 4080:
case 3136:
case 1081:
case 163:
case 1903:
case 1746:
case 2176:
case 2652:
case 1976:
case 3184:
case 3093:
case 2420:
case 784:
case 620:
case 4017:
case 3315:
case 919:
case 3621:
case 3690:
case 139:
case 3445:
case 1226:
case 1073:
case 3196:
case 3707:
case 3539:
case 1224:
case 523:
case 581:
case 102:
case 1045:
case 1554:
case 140:
case 345:
case 2963:
case 883:
case 2749:
case 4041:
case 2827:
case 3764:
case 2507:
case 2830:
case 2625:
case 461:
case 2803:
case 1479:
case 1120:
case 3290:
case 3033:
case 1564:
case 3588:
case 203:
case 4092:
case 3244:
case 2549:
case 587:
case 3059:
case 3398:
case 1303:
case 2216:
case 2166:
case 873:
case 2933:
case 1290:
case 3428:
case 47:
case 3703:
case 2245:
case 3561:
case 2116:
case 1757:
case 3559:
case 2464:
case 221:
case 3931:
case 3273:
case 266:
case 3077:
case 2274:
case 1386:
case 2957:
case 3470:
case 612:
case 2986:
case 3017:
case 505:
case 911:
case 835:
case 2118:
case 1434:
case 2438:
case 2673:
case 3551:
case 2285:
case 2564:
case 3012:
case 1730:
case 1381:
case 2651:
case 247:
case 1194:
case 491:
case 2016:
case 1470:
case 3735:
case 3722:
case 893:
case 335:
case 3496:
case 2706:
case 2060:
case 1743:
case 3394:
case 485:
case 1543:
case 2871:
case 3809:
case 611:
case 2719:
case 2688:
case 3308:
case 2200:
case 3896:
case 3334:
case 647:
case 1948:
case 3804:
case 1124:
case 330:
case 275:
case 2331:
case 3646:
case 2493:
case 1655:
case 3909:
case 186:
case 2862:
case 1591:
case 2230:
case 3748:
case 2324:
case 1909:
case 876:
case 1190:
case 3478:
case 4094:
case 3158:
case 2238:
case 145:
case 3958:
case 1662:
case 2777:
case 3622:
case 2925:
case 271:
case 1768:
case 1100:
case 244:
case 607:
case 2461:
case 1951:
case 2405:
case 1759:
case 3933:
case 2726:
case 3284:
case 3106:
case 291:
case 2047:
case 2244:
case 318:
case 27:
case 988:
case 4073:
case 1906:
case 463:
case 747:
case 1484:
case 3114:
case 1232:
case 3980:
case 2751:
case 3362:
case 820:
case 850:
case 3461:
case 1907:
case 1002:
case 2884:
case 2336:
case 2185:
case 726:
case 2308:
case 1216:
case 2510:
case 2891:
case 758:
case 248:
case 2454:
case 2528:
case 1707:
case 3915:
case 3989:
case 2149:
case 604:
case 2771:
case 501:
case 2207:
case 1550:
case 567:
case 2784:
case 2226:
case 2383:
case 1186:
case 228:
case 4000:
case 3236:
case 1485:
case 3564:
case 2495:
case 1188:
case 1602:
case 595:
case 1573:
case 21:
case 2905:
case 2923:
case 1621:
case 3851:
case 867:
case 847:
case 2491:
case 1964:
case 3987:
case 2605:
case 1790:
case 1182:
case 3108:
case 2603:
case 3863:
case 985:
case 2359:
case 1275:
case 1360:
case 4018:
case 759:
case 2691:
case 1827:
case 2973:
case 2004:
case 1504:
case 2392:
case 3446:
case 3658:
case 3669:
case 3202:
case 2712:
case 1464:
case 813:
case 311:
case 2128:
case 1061:
case 3:
case 529:
case 2895:
case 236:
case 3173:
case 3157:
case 1397:
case 677:
case 3377:
case 3704:
case 2715:
case 304:
case 1090:
case 586:
case 2467:
case 1016:
case 3541:
case 3082:
case 948:
case 1155:
case 1822:
case 2521:
case 3443:
case 1197:
case 1870:
case 3920:
case 795:
case 3146:
case 376:
case 2851:
case 790:
case 3083:
case 1812:
case 2356:
case 559:
case 621:
case 1377:
case 3195:
case 3739:
case 2656:
case 2546:
case 2638:
case 1375:
case 3805:
case 2123:
case 1068:
case 3480:
case 496:
case 1783:
case 3248:
case 1354:
case 2872:
case 3352:
case 2606:
case 772:
case 2190:
case 3272:
case 931:
case 91:
case 819:
case 3837:
case 3960:
case 2953:
case 596:
case 2217:
case 4013:
case 1560:
case 533:
case 2070:
case 359:
case 1572:
case 166:
case 696:
case 1641:
case 1165:
case 3472:
case 2465:
case 3673:
case 1056:
case 475:
case 1977:
case 3910:
case 724:
case 1993:
case 136:
case 1674:
case 2515:
case 518:
case 2341:
case 3112:
case 315:
case 1127:
case 471:
case 1546:
case 1687:
case 320:
case 1263:
case 3647:
case 3277:
case 45:
case 3432:
case 2391:
case 438:
case 2062:
case 1084:
case 966:
case 916:
case 602:
case 397:
case 1896:
case 205:
case 1361:
case 712:
case 219:
case 2545:
case 2781:
case 3730:
case 629:
case 3924:
case 1472:
case 3420:
case 1471:
case 1028:
case 2568:
case 824:
case 1552:
case 1443:
case 2746:
case 3662:
case 2511:
case 3405:
case 3876:
case 1398:
case 477:
case 1498:
case 2296:
case 2115:
case 3811:
case 2887:
case 80:
case 3239:
case 1667:
case 2874:
case 2860:
case 360:
case 108:
case 1431:
case 2240:
case 653:
case 1023:
case 3285:
case 2489:
case 3068:
case 705:
case 547:
case 59:
case 963:
case 41:
case 3783:
case 910:
case 2839:
case 2108:
case 660:
case 3483:
case 1041:
case 374:
case 1895:
case 2262:
case 2890:
case 3181:
case 2125:
case 1350:
case 1457:
case 2765:
case 3578:
case 3529:
case 848:
case 377:
case 4088:
case 3892:
case 1338:
case 2854:
case 334:
case 135:
case 2418:
case 3509:
case 337:
case 749:
case 1972:
case 725:
case 1806:
case 4001:
case 407:
case 3430:
case 147:
case 1858:
case 3754:
case 817:
case 3914:
case 3768:
case 2761:
case 29:
case 2127:
case 815:
case 4026:
case 2594:
case 1036:
case 2615:
case 1537:
case 100:
case 3348:
case 3392:
case 2581:
case 898:
case 3788:
case 2842:
case 3343:
case 480:
case 1807:
case 921:
case 1574:
case 2019:
case 2693:
case 138:
case 1172:
case 2368:
case 487:
case 3111:
case 578:
case 2617:
case 210:
case 131:
case 4003:
case 1460:
case 425:
case 2561:
case 3874:
case 351:
case 3337:
case 1330:
case 3271:
case 2902:
case 997:
case 1250:
case 2334:
case 543:
case 3527:
case 2458:
case 3682:
case 2492:
case 1223:
case 673:
case 257:
case 1579:
case 1138:
case 3520:
case 3695:
case 1834:
case 1086:
case 2259:
case 2312:
case 2035:
case 3544:
case 2203:
case 1733:
case 1436:
case 1698:
case 358:
case 1893:
case 3995:
case 3905:
case 2077:
case 3222:
case 3200:
case 293:
case 1857:
case 1551:
case 1612:
case 195:
case 3908:
case 3930:
case 1854:
case 1391:
case 2120:
case 3778:
case 1984:
case 3870:
case 1112:
case 3944:
case 472:
case 872:
case 3665:
case 1320:
case 250:
case 3299:
case 1466:
case 1175:
case 366:
case 1608:
case 2249:
case 2560:
case 2747:
case 3941:
case 588:
case 843:
case 3675:
case 1510:
case 3692:
case 579:
case 1171:
case 3822:
case 3018:
case 3448:
case 2743:
case 1374:
case 1357:
case 1553:
case 3827:
case 1639:
case 1208:
case 2806:
case 2700:
case 3637:
case 3295:
case 2788:
case 3015:
case 3350:
case 171:
case 3153:
case 1089:
case 1651:
case 1685:
case 2502:
case 2538:
case 3620:
case 3346:
case 3324:
case 3217:
case 218:
case 486:
case 1623:
case 408:
case 3513:
case 1492:
case 3215:
case 2038:
case 1583:
case 2682:
case 3547:
case 286:
case 1192:
case 797:
case 2708:
case 2037:
case 646:
case 1368:
case 238:
case 1494:
case 965:
case 2557:
case 1072:
case 4052:
case 3878:
case 551:
case 2201:
case 1851:
case 457:
case 1496:
case 3304:
case 691:
case 630:
case 1846:
case 3305:
case 3437:
case 3102:
case 807:
case 1108:
case 656:
case 539:
case 1678:
case 667:
case 2036:
case 3312:
case 3482:
case 1571:
case 2863:
case 3293:
case 1971:
case 2614:
case 2142:
case 282:
case 3833:
case 3124:
case 1247:
case 2820:
case 3300:
case 235:
case 2822:
case 3183:
case 3127:
case 1823:
case 2006:
case 2533:
case 2811:
case 399:
case 802:
case 3979:
case 1649:
case 1653:
case 940:
case 3714:
case 3258:
case 3535:
case 316:
case 1300:
case 2171:
case 2432:
case 1844:
case 1506:
case 1908:
case 2168:
case 488:
case 2372:
case 4035:
case 2064:
case 3453:
case 3956:
case 3668:
case 2917:
case 127:
case 3296:
case 783:
case 2540:
case 3803:
case 123:
case 1281:
case 426:
case 4062:
case 341:
case 2101:
case 683:
case 1444:
case 1894:
case 511:
case 1704:
case 3572:
case 418:
case 3674:
case 1646:
case 2228:
case 2774:
case 1489:
case 2677:
case 2990:
case 729:
case 3107:
case 1820:
case 88:
case 2335:
case 1626:
case 39:
case 49:
case 4006:
case 223:
case 2485:
case 1548:
case 3132:
case 3253:
case 2354:
case 952:
case 2698:
case 3233:
case 333:
case 2791:
case 1195:
case 1878:
case 2754:
case 925:
case 3955:
case 2971:
case 2665:
case 1421:
case 552:
case 2049:
case 671:
case 2950:
case 3204:
case 2824:
case 153:
case 1501:
case 3899:
case 3902:
case 1034:
case 3395:
case 84:
case 2225:
case 1271:
case 2579:
case 1478:
case 3767:
case 788:
case 601:
case 1738:
case 1923:
case 2082:
case 267:
case 2098:
case 288:
case 3580:
case 576:
case 3533:
case 1256:
case 396:
case 750:
case 217:
case 232:
case 558:
case 1897:
case 306:
case 3840:
case 2021:
case 831:
case 1913:
case 3031:
case 137:
case 2050:
case 3131:
case 3032:
case 2177:
case 372:
case 1796:
case 1631:
case 185:
case 1477:
case 1491:
case 2878:
case 2450:
case 3728:
case 3568:
case 2326:
case 1173:
case 3211:
case 111:
case 675:
case 889:
case 2548:
case 181:
case 1117:
case 3036:
case 1736:
case 2044:
case 3736:
case 1842:
case 2231:
case 1901:
case 1347:
case 2319:
case 1938:
case 1336:
case 811:
case 3061:
case 2804:
case 1111:
case 1966:
case 1780:
case 2117:
case 460:
case 590:
case 3596:
case 392:
case 323:
case 3384:
case 962:
case 2701:
case 3818:
case 2876:
case 1558:
case 2139:
case 2573:
case 4021:
case 3563:
case 3268:
case 1819:
case 3888:
case 3413:
case 124:
case 3218:
case 1167:
case 3514:
case 1928:
case 1248:
case 1008:
case 130:
case 663:
case 1912:
case 2949:
case 1088:
case 122:
case 1468:
case 2486:
case 190:
case 2447:
case 2269:
case 4090:
case 627:
case 3276:
case 2440:
case 3333:
case 694:
case 3458:
case 3502:
case 1507:
case 1161:
case 2343:
case 13:
case 3993:
case 2676:
case 1561:
case 1125:
case 3916:
case 2199:
case 3604:
case 1884:
case 3241:
case 379:
case 1183:
case 1006:
case 40:
case 1532:
case 3452:
case 777:
case 957:
case 3442:
case 3624:
case 2096:
case 1094:
case 1978:
case 2086:
case 3416:
case 1405:
case 638:
case 517:
case 3734:
case 909:
case 3666:
case 878:
case 1929:
case 419:
case 914:
case 3579:
case 2898:
case 2792:
case 381:
case 504:
case 1727:
case 1636:
case 2433:
case 1284:
case 2977:
case 975:
case 479:
case 3065:
case 12:
case 3801:
case 2277:
case 2769:
case 2178:
case 3139:
case 1654:
case 3056:
case 2735:
case 1080:
case 3126:
case 3511:
case 538:
case 3799:
case 1581:
case 2316:
case 3262:
case 1992:
case 3303:
case 4033:
case 3459:
case 189:
case 1326:
case 3376:
case 1575:
case 1981:
case 2478:
case 2758:
case 669:
case 1389:
case 154:
case 812:
case 706:
case 3600:
case 3935:
case 2387:
case 3027:
case 3779:
case 1947:
case 2167:
case 994:
case 141:
case 2033:
case 1540:
case 1287:
case 3097:
case 85:
case 2692:
case 3101:
case 1921:
case 1694:
case 1973:
case 527:
case 946:
case 3198:
case 2762:
case 1873:
case 608:
case 1344:
case 4028:
case 699:
case 2496:
case 1446:
case 2896:
case 701:
case 3782:
case 3396:
case 3118:
case 938:
case 1154:
case 3220:
case 1077:
case 606:
case 3425:
case 779:
case 4022:
case 1227:
case 3589:
case 3297:
case 2993:
case 1983:
case 2321:
case 2729:
case 3741:
case 1816:
case 51:
case 380:
case 3240:
case 1975:
case 3605:
case 3120:
case 780:
case 3003:
case 179:
case 1047:
case 2390:
case 852:
case 413:
case 1351:
case 575:
case 1369:
case 1671:
case 4015:
case 2305:
case 2789:
case 1865:
case 560:
case 1508:
case 3436:
case 2589:
case 451:
case 652:
case 2635:
case 3185:
case 1270:
case 1598:
case 2534:
case 3165:
case 3859:
case 2355:
case 2088:
case 2883:
case 1133:
case 798:
case 3281:
case 2095:
case 215:
case 1253:
case 1325:
case 1547:
case 416:
case 1280:
case 3938:
case 3940:
case 3712:
case 1509:
case 2148:
case 2164:
case 3053:
case 665:
case 1905:
case 618:
case 68:
case 2800:
case 3309:
case 1627:
case 2596:
case 2131:
case 1383:
case 1628:
case 2620:
case 585:
case 1555:
case 97:
case 2173:
case 3961:
case 2210:
case 310:
case 3283:
case 3962:
case 1000:
case 3469:
case 1378:
case 1958:
case 500:
case 297:
case 3302:
case 3762:
case 2794:
case 3115:
case 3886:
case 4027:
case 382:
case 3435:
case 42:
case 3512:
case 2499:
case 2325:
case 3062:
case 3179:
case 1251:
case 1442:
case 1017:
case 2782:
case 476:
case 3523:
case 2736:
case 3932:
case 978:
case 2808:
case 1314:
case 1206:
case 3890:
case 3770:
case 3421:
case 3030:
case 2156:
case 3790:
case 2162:
case 72:
case 3341:
case 3186:
case 3577:
case 2554:
case 1001:
case 1836:
case 2866:
case 2046:
case 1750:
case 1577:
case 2553:
case 2393:
case 73:
case 1118:
case 2306:
case 65:
case 4029:
case 2025:
case 3864:
case 1334:
case 1756:
case 1131:
case 75:
case 2767:
case 1097:
case 274:
case 3256:
case 3843:
case 3558:
case 1031:
case 3684:
case 841:
case 4057:
case 2547:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1647486001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,];
var gg_b = "1647486001/";

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
