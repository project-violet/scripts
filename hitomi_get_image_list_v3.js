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
case 3679:
case 3286:
case 3403:
case 1314:
case 1397:
case 1734:
case 1162:
case 1915:
case 21:
case 1223:
case 2420:
case 986:
case 1936:
case 875:
case 3425:
case 2069:
case 718:
case 2496:
case 3689:
case 1903:
case 3415:
case 2523:
case 2567:
case 2108:
case 761:
case 1631:
case 1892:
case 904:
case 1122:
case 1855:
case 3534:
case 2460:
case 1227:
case 1393:
case 4051:
case 1294:
case 1682:
case 3370:
case 670:
case 245:
case 1744:
case 1112:
case 2385:
case 3407:
case 2594:
case 1672:
case 2358:
case 2019:
case 113:
case 981:
case 2563:
case 1056:
case 3351:
case 565:
case 4070:
case 2517:
case 1888:
case 3169:
case 766:
case 43:
case 2657:
case 903:
case 3465:
case 1817:
case 1539:
case 1278:
case 3299:
case 3749:
case 133:
case 1255:
case 1827:
case 990:
case 172:
case 3180:
case 750:
case 3542:
case 2489:
case 1438:
case 2239:
case 922:
case 1312:
case 1193:
case 3170:
case 4069:
case 3571:
case 2555:
case 1549:
case 2646:
case 3058:
case 1781:
case 3660:
case 1823:
case 2308:
case 3319:
case 445:
case 3075:
case 3739:
case 2607:
case 738:
case 2051:
case 2941:
case 1813:
case 351:
case 4001:
case 4029:
case 23:
case 1771:
case 2070:
case 50:
case 2982:
case 1805:
case 926:
case 1742:
case 4019:
case 3457:
case 675:
case 737:
case 3876:
case 3085:
case 1769:
case 1695:
case 3100:
case 758:
case 3529:
case 373:
case 1918:
case 3094:
case 715:
case 3063:
case 3659:
case 332:
case 2167:
case 3837:
case 402:
case 2814:
case 757:
case 224:
case 997:
case 2411:
case 97:
case 959:
case 3144:
case 3428:
case 3712:
case 2034:
case 663:
case 589:
case 2824:
case 279:
case 25:
case 3418:
case 2409:
case 2897:
case 89:
case 2105:
case 877:
case 849:
case 3023:
case 153:
case 2222:
case 568:
case 2163:
case 2687:
case 2756:
case 512:
case 730:
case 329:
case 1858:
case 374:
case 2212:
case 3350:
case 1086:
case 1640:
case 3847:
case 1875:
case 511:
case 2461:
case 248:
case 2677:
case 1522:
case 223:
case 2355:
case 2864:
case 2902:
case 1076:
case 406:
case 1652:
case 4081:
case 2954:
case 2812:
case 3714:
case 3142:
case 3247:
case 1275:
case 3171:
case 3797:
case 1416:
case 3334:
case 1564:
case 3206:
case 3990:
case 1973:
case 3570:
case 1258:
case 3724:
case 1285:
case 531:
case 201:
case 45:
case 3926:
case 3150:
case 4034:
case 864:
case 3580:
case 2394:
case 532:
case 424:
case 3473:
case 573:
case 316:
case 202:
case 2327:
case 2930:
case 2264:
case 4000:
case 2305:
case 3945:
case 1977:
case 2071:
case 3237:
case 678:
case 1099:
case 2042:
case 3344:
case 447:
case 3243:
case 1466:
case 1654:
case 735:
case 3856:
case 2706:
case 2367:
case 2323:
case 2224:
case 206:
case 2297:
case 1987:
case 1149:
case 3477:
case 2733:
case 863:
case 3966:
case 2313:
case 2214:
case 311:
case 448:
case 3300:
case 2518:
case 3521:
case 3046:
case 2658:
case 774:
case 1761:
case 3120:
case 1908:
case 34:
case 178:
case 294:
case 3007:
case 927:
case 3651:
case 2840:
case 3511:
case 1341:
case 46:
case 177:
case 2962:
case 3408:
case 2419:
case 1664:
case 1218:
case 1382:
case 3845:
case 3702:
case 943:
case 2852:
case 2125:
case 2685:
case 928:
case 3196:
case 732:
case 315:
case 510:
case 3826:
case 2254:
case 2353:
case 3003:
case 773:
case 1721:
case 293:
case 2830:
case 3160:
case 3561:
case 1883:
case 1331:
case 358:
case 149:
case 1174:
case 3:
case 1398:
case 2469:
case 3025:
case 3890:
case 399:
case 1873:
case 1624:
case 1662:
case 653:
case 3216:
case 2964:
case 2480:
case 1384:
case 2573:
case 494:
case 3458:
case 1198:
case 3226:
case 3704:
case 2854:
case 4060:
case 2365:
case 1985:
case 969:
case 1131:
case 3290:
case 2583:
case 1273:
case 3559:
case 711:
case 3933:
case 3485:
case 1975:
case 3947:
case 1868:
case 200:
case 3189:
case 3629:
case 3057:
case 712:
case 335:
case 3235:
case 3740:
case 654:
case 987:
case 3396:
case 2240:
case 1443:
case 789:
case 2079:
case 4020:
case 1287:
case 2790:
case 599:
case 62:
case 3310:
case 2252:
case 2157:
case 2089:
case 310:
case 1038:
case 1540:
case 1828:
case 558:
case 3320:
case 2587:
case 2716:
case 1277:
case 676:
case 2882:
case 1905:
case 3671:
case 2515:
case 3423:
case 3467:
case 2655:
case 3642:
case 634:
case 3976:
case 1486:
case 2400:
case 1304:
case 70:
case 366:
case 3848:
case 1967:
case 3681:
case 3520:
case 3121:
case 3405:
case 2841:
case 1913:
case 2536:
case 1225:
case 814:
case 1857:
case 1476:
case 1340:
case 2444:
case 2898:
case 3417:
case 1796:
case 1102:
case 1207:
case 3891:
case 3427:
case 317:
case 3028:
case 3838:
case 1917:
case 550:
case 355:
case 361:
case 2546:
case 2831:
case 3161:
case 813:
case 2692:
case 2009:
case 362:
case 3359:
case 2434:
case 1927:
case 3772:
case 3159:
case 2471:
case 3455:
case 3291:
case 1846:
case 566:
case 3361:
case 1531:
case 2874:
case 3087:
case 833:
case 2939:
case 1195:
case 3741:
case 407:
case 3600:
case 920:
case 337:
case 1045:
case 3077:
case 2605:
case 2173:
case 246:
case 3782:
case 3999:
case 3644:
case 3238:
case 350:
case 1140:
case 2328:
case 1803:
case 2617:
case 1541:
case 2738:
case 1789:
case 1026:
case 609:
case 2694:
case 1572:
case 2282:
case 3083:
case 1016:
case 985:
case 2059:
case 2663:
case 2627:
case 518:
case 1779:
case 2241:
case 1257:
case 4009:
case 3798:
case 4021:
case 1104:
case 3248:
case 2177:
case 1582:
case 1090:
case 2791:
case 110:
case 1669:
case 2414:
case 2497:
case 2809:
case 3818:
case 1730:
case 900:
case 1245:
case 868:
case 2148:
case 1266:
case 3552:
case 2098:
case 631:
case 3612:
case 3504:
case 427:
case 632:
case 3437:
case 673:
case 3287:
case 2545:
case 3048:
case 2656:
case 1559:
case 1933:
case 1360:
case 3530:
case 2980:
case 2861:
case 1906:
case 3273:
case 3958:
case 578:
case 2072:
case 2526:
case 135:
case 1629:
case 1235:
case 2041:
case 364:
case 2951:
case 3868:
case 3975:
case 1947:
case 2138:
case 2590:
case 577:
case 2082:
case 287:
case 2970:
case 3662:
case 889:
case 2259:
case 1216:
case 2191:
case 1752:
case 1179:
case 4074:
case 1226:
case 674:
case 3198:
case 2535:
case 78:
case 3554:
case 3502:
case 1379:
case 1015:
case 3184:
case 157:
case 199:
case 469:
case 1003:
case 874:
case 1826:
case 72:
case 3711:
case 994:
case 227:
case 754:
case 3883:
case 3331:
case 158:
case 829:
case 3721:
case 2422:
case 905:
case 1160:
case 2637:
case 2209:
case 3382:
case 668:
case 3877:
case 1670:
case 2084:
case 39:
case 3664:
case 4072:
case 2211:
case 1754:
case 1196:
case 1065:
case 611:
case 2462:
case 1956:
case 1120:
case 3908:
case 2919:
case 873:
case 378:
case 3887:
case 1680:
case 2074:
case 2606:
case 1046:
case 1866:
case 753:
case 564:
case 2901:
case 993:
case 2768:
case 1007:
case 831:
case 1511:
case 4082:
case 2647:
case 487:
case 220:
case 3104:
case 3152:
case 946:
case 3779:
case 2449:
case 1073:
case 1492:
case 3582:
case 2145:
case 2932:
case 1248:
case 3541:
case 733:
case 3026:
case 3789:
case 772:
case 1311:
case 865:
case 2753:
case 3016:
case 1731:
case 425:
case 2820:
case 3572:
case 3992:
case 852:
case 3955:
case 941:
case 1077:
case 2190:
case 137:
case 480:
case 3598:
case 942:
case 3354:
case 3865:
case 2135:
case 3978:
case 2942:
case 2289:
case 138:
case 856:
case 1159:
case 1772:
case 60:
case 2981:
case 4054:
case 2116:
case 1600:
case 1589:
case 3807:
case 2538:
case 3988:
case 575:
case 2126:
case 285:
case 370:
case 2950:
case 3917:
case 155:
case 2326:
case 2703:
case 860:
case 3265:
case 2736:
case 3395:
case 2889:
case 1838:
case 162:
case 1560:
case 2316:
case 3927:
case 3963:
case 3649:
case 714:
case 3574:
case 1018:
case 2879:
case 3102:
case 2725:
case 3154:
case 3246:
case 2715:
case 2390:
case 1494:
case 2934:
case 1891:
case 2260:
case 1427:
case 1121:
case 166:
case 3215:
case 2746:
case 3967:
case 3923:
case 1848:
case 375:
case 280:
case 1068:
case 570:
case 2296:
case 2900:
case 3340:
case 1111:
case 2366:
case 3913:
case 713:
case 3225:
case 1423:
case 485:
case 2345:
case 3905:
case 2210:
case 3352:
case 1413:
case 665:
case 496:
case 651:
case 2699:
case 3203:
case 3771:
case 3684:
case 2472:
case 2093:
case 3805:
case 666:
case 3362:
case 222:
case 3448:
case 3124:
case 495:
case 2844:
case 2441:
case 221:
case 2356:
case 152:
case 2232:
case 1319:
case 1948:
case 3823:
case 3549:
case 1058:
case 3674:
case 2482:
case 1301:
case 4062:
case 151:
case 850:
case 3957:
case 1739:
case 290:
case 2788:
case 403:
case 3312:
case 661:
case 93:
case 2014:
case 482:
case 1696:
case 3438:
case 509:
case 1571:
case 2281:
case 2834:
case 3164:
case 837:
case 3732:
case 3193:
case 2431:
case 239:
case 2097:
case 1151:
case 3043:
case 2989:
case 1299:
case 371:
case 3817:
case 1369:
case 4022:
case 3539:
case 3953:
case 372:
case 3894:
case 1180:
case 1749:
case 333:
case 2271:
case 1581:
case 3491:
case 3827:
case 2792:
case 2133:
case 313:
case 2234:
case 2306:
case 2484:
case 862:
case 2723:
case 534:
case 3700:
case 422:
case 4064:
case 2850:
case 861:
case 160:
case 1351:
case 204:
case 1446:
case 3393:
case 3294:
case 3682:
case 2474:
case 1370:
case 219:
case 3122:
case 2871:
case 2062:
case 1534:
case 3855:
case 3263:
case 1899:
case 3217:
case 3965:
case 314:
case 2717:
case 1276:
case 2586:
case 2638:
case 3903:
case 2343:
case 1129:
case 1101:
case 4024:
case 281:
case 426:
case 571:
case 3892:
case 572:
case 2794:
case 2156:
case 282:
case 1415:
case 2337:
case 2920:
case 203:
case 3698:
case 3314:
case 650:
case 1679:
case 2576:
case 1286:
case 2200:
case 3162:
case 3324:
case 2691:
case 3223:
case 3267:
case 2022:
case 3397:
case 3734:
case 1661:
case 3149:
case 901:
case 1856:
case 3808:
case 2758:
case 2801:
case 3751:
case 2452:
case 983:
case 1088:
case 810:
case 902:
case 2039:
case 1055:
case 1132:
case 3770:
case 3524:
case 38:
case 1237:
case 3466:
case 2785:
case 1078:
case 498:
case 3602:
case 3099:
case 1243:
case 763:
case 3435:
case 2547:
case 2959:
case 1916:
case 1609:
case 1580:
case 2506:
case 3490:
case 1621:
case 3983:
case 2049:
case 52:
case 2270:
case 1714:
case 2251:
case 1142:
case 2199:
case 615:
case 3426:
case 2280:
case 1206:
case 189:
case 1570:
case 1371:
case 1134:
case 857:
case 297:
case 1005:
case 1762:
case 259:
case 27:
case 2870:
case 58:
case 777:
case 8:
case 79:
case 95:
case 1342:
case 1468:
case 2399:
case 3076:
case 2961:
case 2880:
case 3719:
case 3858:
case 136:
case 1833:
case 3086:
case 1847:
case 815:
case 2454:
case 778:
case 4049:
case 610:
case 948:
case 1712:
case 2201:
case 923:
case 2229:
case 3562:
case 1256:
case 3208:
case 1501:
case 2626:
case 1529:
case 830:
case 1017:
case 354:
case 947:
case 3695:
case 3769:
case 2911:
case 132:
case 2556:
case 1063:
case 1659:
case 1519:
case 32:
case 3349:
case 3918:
case 1094:
case 1326:
case 2028:
case 3168:
case 4073:
case 2359:
case 3434:
case 1316:
case 2161:
case 3284:
case 3546:
case 975:
case 639:
case 2018:
case 541:
case 125:
case 2417:
case 2494:
case 1715:
case 1390:
case 3274:
case 819:
case 2632:
case 2891:
case 1934:
case 3118:
case 2121:
case 308:
case 882:
case 3061:
case 1746:
case 266:
case 2520:
case 2774:
case 180:
case 2068:
case 881:
case 2111:
case 1296:
case 2986:
case 3128:
case 2510:
case 1366:
case 2650:
case 621:
case 2671:
case 546:
case 307:
case 1345:
case 3882:
case 2413:
case 1210:
case 1054:
case 3678:
case 2976:
case 690:
case 438:
case 1765:
case 2596:
case 1002:
case 3400:
case 418:
case 120:
case 4018:
case 1896:
case 3241:
case 681:
case 341:
case 1449:
case 3177:
case 682:
case 461:
case 455:
case 1166:
case 1810:
case 3557:
case 890:
case 1095:
case 3328:
case 2311:
case 1030:
case 3663:
case 1548:
case 3187:
case 3694:
case 2321:
case 2309:
case 2083:
case 3282:
case 1971:
case 346:
case 839:
case 507:
case 3481:
case 3231:
case 2077:
case 1190:
case 826:
case 1439:
case 695:
case 2488:
case 1135:
case 3450:
case 1004:
case 2238:
case 2644:
case 2999:
case 604:
case 1289:
case 3183:
case 619:
case 3748:
case 238:
case 196:
case 508:
case 2291:
case 3623:
case 2455:
case 1279:
case 1040:
case 3368:
case 2600:
case 185:
case 2478:
case 977:
case 3469:
case 99:
case 3912:
case 779:
case 2:
case 3096:
case 143:
case 87:
case 1391:
case 2890:
case 410:
case 1338:
case 3568:
case 2826:
case 1412:
case 3010:
case 1728:
case 2561:
case 1859:
case 3020:
case 1718:
case 393:
case 2816:
case 1221:
case 1209:
case 2845:
case 2670:
case 3962:
case 3115:
case 4057:
case 435:
case 3419:
case 144:
case 2754:
case 3804:
case 3852:
case 2065:
case 2702:
case 3401:
case 3060:
case 24:
case 2120:
case 1348:
case 3518:
case 1606:
case 3658:
case 2046:
case 2110:
case 1929:
case 2866:
case 1901:
case 1768:
case 3357:
case 500:
case 2651:
case 2007:
case 230:
case 3840:
case 3675:
case 3204:
case 457:
case 3252:
case 3336:
case 4015:
case 2053:
case 2795:
case 783:
case 1821:
case 593:
case 1497:
case 3587:
case 2245:
case 4:
case 2730:
case 2937:
case 1424:
case 4025:
case 1098:
case 3735:
case 3240:
case 3315:
case 4036:
case 1773:
case 3924:
case 3577:
case 4003:
case 169:
case 1656:
case 2559:
case 4065:
case 2360:
case 3608:
case 784:
case 1861:
case 3346:
case 1072:
case 188:
case 659:
case 1526:
case 963:
case 235:
case 2057:
case 594:
case 706:
case 1951:
case 3766:
case 2189:
case 2947:
case 3480:
case 1082:
case 2458:
case 1970:
case 1259:
case 3230:
case 2216:
case 1777:
case 3295:
case 2752:
case 4046:
case 2179:
case 44:
case 3854:
case 2704:
case 2134:
case 3864:
case 2005:
case 3893:
case 3461:
case 1645:
case 348:
case 688:
case 17:
case 1269:
case 3378:
case 3902:
case 468:
case 2342:
case 794:
case 347:
case 687:
case 2806:
case 954:
case 3687:
case 1880:
case 506:
case 3222:
case 2023:
case 3163:
case 2833:
case 3000:
case 3117:
case 3388:
case 1666:
case 92:
case 1454:
case 3212:
case 1176:
case 2712:
case 2428:
case 2144:
case 3411:
case 1201:
case 1635:
case 3897:
case 2722:
case 3409:
case 3105:
case 3673:
case 3034:
case 379:
case 35:
case 3824:
case 953:
case 1626:
case 2529:
case 793:
case 2501:
case 2017:
case 489:
case 501:
case 2100:
case 1186:
case 1556:
case 2063:
case 2027:
case 2837:
case 3167:
case 3508:
case 2519:
case 583:
case 3683:
case 1921:
case 273:
case 2661:
case 700:
case 2477:
case 3706:
case 2856:
case 1537:
case 3323:
case 644:
case 1543:
case 4005:
case 2300:
case 1386:
case 3668:
case 3050:
case 1829:
case 3313:
case 3214:
case 2966:
case 1775:
case 2088:
case 4013:
case 2132:
case 3862:
case 2237:
case 548:
case 2487:
case 2945:
case 3305:
case 76:
case 429:
case 2344:
case 3042:
case 3188:
case 2150:
case 3743:
case 2551:
case 3995:
case 2611:
case 1547:
case 383:
case 1959:
case 888:
case 3327:
case 3930:
case 3264:
case 302:
case 2916:
case 3618:
case 2580:
case 2092:
case 1270:
case 3737:
case 3585:
case 2142:
case 2714:
case 2247:
case 473:
case 524:
case 98:
case 4027:
case 2935:
case 3812:
case 3178:
case 627:
case 2483:
case 2206:
case 55:
case 2570:
case 289:
case 3459:
case 2797:
case 2171:
case 431:
case 1430:
case 3155:
case 3019:
case 186:
case 3527:
case 3563:
case 1333:
case 1960:
case 1881:
case 3594:
case 1306:
case 3358:
case 1723:
case 3839:
case 195:
case 3657:
case 3001:
case 708:
case 260:
case 1713:
case 1347:
case 3375:
case 3984:
case 2370:
case 119:
case 20:
case 1871:
case 465:
case 1705:
case 3460:
case 825:
case 2899:
case 707:
case 345:
case 3776:
case 452:
case 1717:
case 1343:
case 1586:
case 3496:
case 2101:
case 2129:
case 181:
case 1727:
case 1763:
case 182:
case 1794:
case 3108:
case 3523:
case 3410:
case 2286:
case 1200:
case 3420:
case 3505:
case 3070:
case 3249:
case 1093:
case 1755:
case 3982:
case 2532:
case 122:
case 33:
case 545:
case 680:
case 1441:
case 121:
case 252:
case 1137:
case 2660:
case 3972:
case 3646:
case 3080:
case 2329:
case 265:
case 2301:
case 3941:
case 40:
case 251:
case 1788:
case 891:
case 2739:
case 972:
case 3607:
case 1143:
case 2886:
case 742:
case 2453:
case 1979:
case 3185:
case 2542:
case 1024:
case 741:
case 1281:
case 2991:
case 2170:
case 51:
case 1097:
case 1242:
case 1147:
case 885:
case 3636:
case 625:
case 2610:
case 3588:
case 2180:
case 934:
case 896:
case 3158:
case 1271:
case 256:
case 2620:
case 2581:
case 1812:
case 3251:
case 1585:
case 2275:
case 1459:
case 1155:
case 2564:
case 86:
case 3280:
case 454:
case 1995:
case 1628:
case 1575:
case 3547:
case 800:
case 3869:
case 2139:
case 1317:
case 1394:
case 1293:
case 3506:
case 2490:
case 3270:
case 1737:
case 1363:
case 3533:
case 2597:
case 2977:
case 1305:
case 4086:
case 57:
case 2524:
case 2770:
case 694:
case 1904:
case 1042:
case 1952:
case 3785:
case 453:
case 2654:
case 2780:
case 1706:
case 1323:
case 3819:
case 2808:
case 2149:
case 4076:
case 2987:
case 1733:
case 2445:
case 1214:
case 1050:
case 916:
case 3452:
case 2751:
case 1747:
case 3404:
case 3386:
case 2695:
case 805:
case 254:
case 2928:
case 929:
case 3911:
case 3626:
case 1683:
case 3921:
case 3556:
case 1262:
case 22:
case 1508:
case 3635:
case 124:
case 1411:
case 1034:
case 3219:
case 1824:
case 1421:
case 1409:
case 1897:
case 1105:
case 931:
case 1163:
case 147:
case 3880:
case 893:
case 2339:
case 3666:
case 1212:
case 3851:
case 2701:
case 2729:
case 2968:
case 2640:
case 1893:
case 397:
case 1461:
case 3870:
case 1864:
case 600:
case 3399:
case 2652:
case 2512:
case 2539:
case 952:
case 3498:
case 792:
case 1588:
case 2953:
case 2043:
case 3242:
case 1603:
case 3147:
case 581:
case 233:
case 3133:
case 791:
case 2827:
case 3792:
case 2491:
case 951:
case 2255:
case 582:
case 1931:
case 2894:
case 1158:
case 1185:
case 3599:
case 1239:
case 1998:
case 1578:
case 3250:
case 2312:
case 414:
case 846:
case 2322:
case 1615:
case 2164:
case 1555:
case 1646:
case 607:
case 1592:
case 2006:
case 3232:
case 785:
case 2867:
case 2823:
case 1308:
case 595:
case 3788:
case 2047:
case 1051:
case 1607:
case 796:
case 956:
case 322:
case 2362:
case 519:
case 2684:
case 1070:
case 3472:
case 608:
case 1249:
case 2771:
case 3755:
case 2292:
case 4056:
case 2742:
case 1665:
case 1799:
case 413:
case 140:
case 3844:
case 3996:
case 90:
case 3012:
case 1410:
case 433:
case 4037:
case 2925:
case 526:
case 4043:
case 1505:
case 2162:
case 3832:
case 1420:
case 3691:
case 2324:
case 2223:
case 1653:
case 1069:
case 3717:
case 214:
case 3638:
case 1496:
case 3156:
case 3794:
case 303:
case 1523:
case 808:
case 2631:
case 2205:
case 2892:
case 3763:
case 2122:
case 2263:
case 2227:
case 2855:
case 3062:
case 3705:
case 1460:
case 522:
case 319:
case 2682:
case 3474:
case 4047:
case 145:
case 1776:
case 2965:
case 2878:
case 2744:
case 3842:
case 4006:
case 2672:
case 2946:
case 1358:
case 3767:
case 213:
case 1527:
case 2056:
case 3333:
case 3960:
case 3648:
case 304:
case 1517:
case 3850:
case 1029:
case 3116:
case 2130:
case 790:
case 1748:
case 270:
case 1939:
case 385:
case 1613:
case 580:
case 2988:
case 3950:
case 2066:
case 1553:
case 3279:
case 2195:
case 3040:
case 3538:
case 3757:
case 1368:
case 2499:
case 3190:
case 1231:
case 1605:
case 475:
case 721:
case 1481:
case 2955:
case 3676:
case 2302:
case 3942:
case 3439:
case 2598:
case 2978:
case 1450:
case 2253:
case 2140:
case 3753:
case 1328:
case 2803:
case 938:
case 3166:
case 3810:
case 1617:
case 391:
case 1694:
case 2572:
case 1949:
case 3030:
case 2016:
case 1627:
case 1663:
case 61:
case 726:
case 2779:
case 1241:
case 2257:
case 2825:
case 525:
case 937:
case 2815:
case 142:
case 83:
case 3449:
case 1791:
case 3145:
case 81:
case 3345:
case 1377:
case 107:
case 3220:
case 470:
case 1655:
case 917:
case 2486:
case 2352:
case 3746:
case 2215:
case 955:
case 795:
case 63:
case 2967:
case 2923:
case 596:
case 2760:
case 962:
case 2913:
case 1536:
case 786:
case 1841:
case 3366:
case 2857:
case 2225:
case 275:
case 1503:
case 918:
case 4045:
case 1444:
case 1128:
case 4016:
case 2102:
case 3725:
case 845:
case 4026:
case 3260:
case 2584:
case 3715:
case 2710:
case 2395:
case 1168:
case 591:
case 3326:
case 2917:
case 2265:
case 2853:
case 703:
case 2994:
case 2649:
case 1546:
case 1021:
case 2720:
case 2574:
case 1009:
case 4035:
case 3316:
case 16:
case 3777:
case 2433:
case 1480:
case 3082:
case 2406:
case 1573:
case 2198:
case 478:
case 544:
case 1854:
case 3535:
case 2985:
case 2447:
case 910:
case 1583:
case 802:
case 2131:
case 1346:
case 3072:
case 2374:
case 3656:
case 2048:
case 3464:
case 1608:
case 264:
case 3138:
case 1307:
case 100:
case 49:
case 1153:
case 3041:
case 2443:
case 2504:
case 1914:
case 2552:
case 2612:
case 3098:
case 543:
case 1790:
case 2622:
case 1315:
case 2091:
case 2437:
case 3773:
case 1924:
case 3414:
case 3566:
case 1157:
case 2038:
case 2828:
case 1303:
case 1204:
case 2540:
case 527:
case 3783:
case 3148:
case 65:
case 3424:
case 3821:
case 1587:
case 3809:
case 3497:
case 2759:
case 2277:
case 3031:
case 3606:
case 3074:
case 915:
case 278:
case 3919:
case 588:
case 3633:
case 1840:
case 3647:
case 1675:
case 1103:
case 3929:
case 1136:
case 3901:
case 2341:
case 105:
case 3768:
case 2456:
case 29:
case 2664:
case 606:
case 3221:
case 2693:
case 9:
case 3209:
case 3084:
case 2382:
case 464:
case 1125:
case 4048:
case 824:
case 957:
case 344:
case 1804:
case 2228:
case 3969:
case 2711:
case 1254:
case 1895:
case 1202:
case 3338:
case 1568:
case 2709:
case 3422:
case 1020:
case 2721:
case 1830:
case 1146:
case 2331:
case 327:
case 1096:
case 2502:
case 2268:
case 2398:
case 2554:
case 1912:
case 1165:
case 2697:
case 2184:
case 4038:
case 823:
case 328:
case 602:
case 3391:
case 2624:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759489201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,];
var gg_b = "1759489201/";

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
