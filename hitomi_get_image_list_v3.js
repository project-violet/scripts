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
case 2648:
case 613:
case 2847:
case 2653:
case 3052:
case 2773:
case 2726:
case 677:
case 131:
case 894:
case 2521:
case 3863:
case 2641:
case 1317:
case 3423:
case 349:
case 1397:
case 3209:
case 1443:
case 138:
case 3487:
case 900:
case 3358:
case 1784:
case 348:
case 2503:
case 3060:
case 236:
case 24:
case 1259:
case 3351:
case 1308:
case 3722:
case 3405:
case 409:
case 3359:
case 401:
case 567:
case 707:
case 1305:
case 1459:
case 2926:
case 3287:
case 3409:
case 575:
case 3201:
case 328:
case 2529:
case 3922:
case 2330:
case 3217:
case 2964:
case 4008:
case 329:
case 3223:
case 408:
case 2645:
case 762:
case 502:
case 1120:
case 2897:
case 63:
case 646:
case 1712:
case 2557:
case 2823:
case 3561:
case 289:
case 2618:
case 2691:
case 1004:
case 344:
case 2611:
case 3938:
case 1347:
case 490:
case 2808:
case 3872:
case 2020:
case 1427:
case 3724:
case 3175:
case 142:
case 1493:
case 898:
case 2474:
case 3735:
case 2801:
case 416:
case 1782:
case 871:
case 879:
case 1944:
case 470:
case 3190:
case 3171:
case 404:
case 3110:
case 1669:
case 2685:
case 2102:
case 1912:
case 3178:
case 1293:
case 3935:
case 3565:
case 1156:
case 3247:
case 2699:
case 2619:
case 1283:
case 2962:
case 3569:
case 785:
case 2615:
case 2263:
case 3924:
case 273:
case 3182:
case 1832:
case 47:
case 2334:
case 3885:
case 3609:
case 2530:
case 2737:
case 2329:
case 1779:
case 2177:
case 1659:
case 1139:
case 2325:
case 1775:
case 2196:
case 1980:
case 217:
case 742:
case 2445:
case 1910:
case 2248:
case 2952:
case 1978:
case 3112:
case 3898:
case 3818:
case 2441:
case 1046:
case 1501:
case 2249:
case 883:
case 1508:
case 3551:
case 2937:
case 2448:
case 3811:
case 415:
case 3807:
case 1131:
case 3601:
case 3888:
case 1138:
case 3073:
case 1790:
case 2752:
case 368:
case 1517:
case 2321:
case 185:
case 151:
case 3687:
case 1523:
case 2207:
case 80:
case 1268:
case 1465:
case 2489:
case 2281:
case 3365:
case 2288:
case 1469:
case 1829:
case 3184:
case 1834:
case 3920:
case 1261:
case 739:
case 2495:
case 2415:
case 3194:
case 3114:
case 738:
case 2499:
case 2270:
case 2291:
case 3845:
case 1436:
case 2299:
case 3853:
case 2219:
case 1683:
case 1236:
case 812:
case 2039:
case 2491:
case 2470:
case 596:
case 2215:
case 2663:
case 2498:
case 2295:
case 90:
case 1269:
case 2488:
case 1461:
case 3050:
case 2674:
case 1693:
case 154:
case 162:
case 3368:
case 240:
case 1547:
case 1627:
case 3583:
case 4048:
case 1429:
case 373:
case 2182:
case 3737:
case 3329:
case 1434:
case 1221:
case 3530:
case 4053:
case 1162:
case 3177:
case 750:
case 1865:
case 317:
case 2605:
case 3325:
case 990:
case 857:
case 2819:
case 3253:
case 471:
case 1345:
case 777:
case 804:
case 3100:
case 2559:
case 3445:
case 3248:
case 2895:
case 2112:
case 1349:
case 1902:
case 3241:
case 2192:
case 1203:
case 269:
case 2898:
case 662:
case 498:
case 2558:
case 1403:
case 3567:
case 2064:
case 3937:
case 3760:
case 2551:
case 15:
case 2811:
case 816:
case 1353:
case 356:
case 3022:
case 2891:
case 393:
case 1042:
case 2807:
case 166:
case 1667:
case 2608:
case 1014:
case 3321:
case 268:
case 1094:
case 1229:
case 2601:
case 607:
case 957:
case 1421:
case 499:
case 1234:
case 491:
case 2687:
case 3489:
case 587:
case 1389:
case 1164:
case 3281:
case 4091:
case 4070:
case 3288:
case 808:
case 2369:
case 1257:
case 801:
case 3415:
case 809:
case 400:
case 2114:
case 1315:
case 1126:
case 1395:
case 3038:
case 3499:
case 3954:
case 3211:
case 2845:
case 3291:
case 2142:
case 1319:
case 1370:
case 2647:
case 2527:
case 3299:
case 685:
case 901:
case 252:
case 264:
case 2062:
case 3470:
case 2848:
case 3411:
case 659:
case 3663:
case 3035:
case 1082:
case 1318:
case 3357:
case 145:
case 1388:
case 4019:
case 335:
case 1933:
case 1704:
case 494:
case 1381:
case 130:
case 2583:
case 4015:
case 3481:
case 1044:
case 2368:
case 340:
case 3528:
case 3648:
case 3133:
case 3653:
case 1883:
case 3847:
case 511:
case 3726:
case 2497:
case 1090:
case 2052:
case 1071:
case 2417:
case 686:
case 642:
case 3521:
case 249:
case 2487:
case 2209:
case 518:
case 1006:
case 2408:
case 2205:
case 1827:
case 1467:
case 3764:
case 13:
case 2351:
case 182:
case 146:
case 1628:
case 1548:
case 34:
case 3367:
case 2874:
case 2359:
case 2140:
case 2405:
case 2208:
case 1545:
case 32:
case 3973:
case 2409:
case 1154:
case 1634:
case 2355:
case 3330:
case 203:
case 40:
case 3529:
case 2223:
case 221:
case 622:
case 3534:
case 1079:
case 1946:
case 355:
case 2766:
case 815:
case 863:
case 3750:
case 3823:
case 2561:
case 389:
case 3876:
case 2054:
case 2938:
case 1700:
case 3691:
case 244:
case 150:
case 514:
case 2724:
case 1796:
case 631:
case 177:
case 2393:
case 3020:
case 1716:
case 3:
case 3474:
case 2327:
case 1511:
case 483:
case 1518:
case 1843:
case 2179:
case 113:
case 165:
case 89:
case 3688:
case 2735:
case 1855:
case 2110:
case 1986:
case 1900:
case 2738:
case 2171:
case 1152:
case 1632:
case 3950:
case 1859:
case 3274:
case 3689:
case 99:
case 87:
case 963:
case 2935:
case 1589:
case 1160:
case 506:
case 2939:
case 3962:
case 2924:
case 3695:
case 2106:
case 3615:
case 2180:
case 3263:
case 1284:
case 2157:
case 3161:
case 545:
case 3709:
case 1755:
case 2838:
case 924:
case 263:
case 3923:
case 1675:
case 530:
case 3976:
case 3997:
case 3045:
case 1759:
case 398:
case 1242:
case 3901:
case 1025:
case 1958:
case 3575:
case 2226:
case 1029:
case 456:
case 4022:
case 1214:
case 3579:
case 2972:
case 3571:
case 3510:
case 2866:
case 1494:
case 647:
case 1959:
case 3797:
case 1680:
case 718:
case 379:
case 3394:
case 371:
case 1800:
case 1028:
case 2502:
case 2660:
case 3909:
case 1322:
case 1751:
case 3048:
case 1556:
case 824:
case 2839:
case 473:
case 417:
case 525:
case 3506:
case 3041:
case 2346:
case 3787:
case 719:
case 2652:
case 1690:
case 1671:
case 944:
case 711:
case 3384:
case 3169:
case 2835:
case 921:
case 3224:
case 3099:
case 696:
case 3431:
case 929:
case 566:
case 2533:
case 3019:
case 706:
case 4066:
case 3239:
case 2262:
case 841:
case 1983:
case 394:
case 3235:
case 3438:
case 1993:
case 192:
case 2974:
case 1913:
case 3266:
case 4039:
case 3085:
case 2250:
case 1292:
case 1927:
case 3089:
case 928:
case 55:
case 1244:
case 2504:
case 948:
case 3007:
case 3344:
case 3620:
case 1444:
case 3747:
case 2300:
case 300:
case 3826:
case 828:
case 3088:
case 3873:
case 105:
case 3392:
case 1412:
case 676:
case 1366:
case 1057:
case 420:
case 1335:
case 2654:
case 829:
case 3018:
case 3382:
case 821:
case 3238:
case 1846:
case 3435:
case 803:
case 714:
case 1520:
case 1640:
case 1727:
case 941:
case 2316:
case 172:
case 2822:
case 3091:
case 1713:
case 3439:
case 2774:
case 2125:
case 3011:
case 3072:
case 2820:
case 1067:
case 1522:
case 1642:
case 2748:
case 3456:
case 2087:
case 3584:
case 2741:
case 2626:
case 3306:
case 597:
case 208:
case 2673:
case 2097:
case 1471:
case 952:
case 223:
case 2017:
case 1684:
case 1279:
case 602:
case 3310:
case 2023:
case 209:
case 3542:
case 3622:
case 2949:
case 2302:
case 312:
case 3193:
case 1278:
case 1475:
case 1271:
case 1290:
case 4056:
case 1210:
case 705:
case 513:
case 1030:
case 2437:
case 1206:
case 61:
case 1280:
case 1147:
case 1833:
case 772:
case 3256:
case 2130:
case 1692:
case 1612:
case 980:
case 3582:
case 2989:
case 1965:
case 1535:
case 3666:
case 1524:
case 2596:
case 257:
case 3860:
case 3074:
case 1539:
case 2711:
case 1320:
case 2791:
case 2500:
case 1768:
case 204:
case 2707:
case 3624:
case 961:
case 1802:
case 2995:
case 2047:
case 969:
case 2304:
case 2788:
case 3592:
case 1761:
case 3512:
case 2911:
case 3638:
case 2785:
case 2991:
case 383:
case 460:
case 869:
case 4020:
case 3143:
case 216:
case 1765:
case 1108:
case 3151:
case 546:
case 2918:
case 2167:
case 2719:
case 481:
case 787:
case 633:
case 290:
case 1176:
case 2795:
case 111:
case 1123:
case 119:
case 2981:
case 1968:
case 2907:
case 1117:
case 421:
case 4037:
case 429:
case 3008:
case 935:
case 1051:
case 3820:
case 3460:
case 3753:
case 1929:
case 2456:
case 1360:
case 403:
case 3741:
case 1043:
case 2584:
case 2380:
case 3673:
case 3626:
case 1703:
case 1573:
case 1526:
case 2594:
case 3945:
case 1721:
case 1352:
case 2390:
case 301:
case 1728:
case 3949:
case 2542:
case 2622:
case 3664:
case 1402:
case 1840:
case 448:
case 611:
case 2113:
case 542:
case 2127:
case 1202:
case 2379:
case 1729:
case 1337:
case 3252:
case 4060:
case 920:
case 835:
case 1163:
case 1055:
case 1928:
case 2183:
case 441:
case 4052:
case 747:
case 1059:
case 1880:
case 3650:
case 3989:
case 96:
case 357:
case 2860:
case 1233:
case 2420:
case 1027:
case 3596:
case 817:
case 1932:
case 1093:
case 3577:
case 710:
case 1686:
case 1013:
case 3662:
case 3707:
case 304:
case 3500:
case 2159:
case 3781:
case 1616:
case 1083:
case 167:
case 3915:
case 1696:
case 1878:
case 1810:
case 1354:
case 3788:
case 1890:
case 2852:
case 1871:
case 606:
case 3454:
case 2512:
case 3999:
case 796:
case 2063:
case 1550:
case 538:
case 3911:
case 3785:
case 2143:
case 2837:
case 3254:
case 614:
case 893:
case 3789:
case 856:
case 316:
case 1204:
case 3167:
case 1875:
case 1172:
case 2151:
case 3799:
case 2220:
case 1433:
case 973:
case 3333:
case 917:
case 3981:
case 390:
case 3907:
case 2709:
case 480:
case 3637:
case 3157:
case 315:
case 363:
case 2049:
case 291:
case 110:
case 2976:
case 2705:
case 562:
case 554:
case 299:
case 2923:
case 4026:
case 4073:
case 1107:
case 1170:
case 8:
case 298:
case 461:
case 2575:
case 469:
case 860:
case 196:
case 888:
case 3226:
case 39:
case 3972:
case 1118:
case 775:
case 1730:
case 1967:
case 9:
case 2571:
case 1812:
case 1195:
case 271:
case 1892:
case 2850:
case 1115:
case 1373:
case 279:
case 2656:
case 3660:
case 1119:
case 2909:
case 71:
case 1930:
case 2708:
case 795:
case 2053:
case 1767:
case 605:
case 3824:
case 3464:
case 176:
case 955:
case 37:
case 1364:
case 3839:
case 2165:
case 2787:
case 3346:
case 2506:
case 2384:
case 2701:
case 3835:
case 1185:
case 278:
case 1882:
case 2019:
case 2431:
case 1216:
case 2099:
case 1296:
case 3262:
case 884:
case 3128:
case 1277:
case 2947:
case 585:
case 2235:
case 551:
case 2438:
case 294:
case 1069:
case 3103:
case 92:
case 3250:
case 84:
case 1200:
case 1286:
case 1633:
case 1145:
case 1400:
case 2344:
case 1068:
case 82:
case 1842:
case 2747:
case 3300:
case 3386:
case 2620:
case 2540:
case 94:
case 2826:
case 2088:
case 936:
case 1554:
case 2382:
case 3134:
case 984:
case 2238:
case 3129:
case 2864:
case 3377:
case 147:
case 3396:
case 2439:
case 3125:
case 3822:
case 2091:
case 1604:
case 3462:
case 2070:
case 2636:
case 3589:
case 76:
case 1699:
case 3160:
case 1619:
case 1532:
case 3585:
case 3916:
case 1615:
case 3996:
case 3515:
case 3595:
case 3632:
case 3152:
case 3855:
case 2227:
case 2912:
case 1805:
case 793:
case 1950:
case 3859:
case 629:
case 1808:
case 512:
case 1020:
case 3851:
case 3716:
case 2427:
case 3374:
case 1607:
case 418:
case 2493:
case 3591:
case 641:
case 3777:
case 1:
case 1474:
case 2413:
case 1887:
case 3518:
case 3843:
case 1801:
case 365:
case 313:
case 2782:
case 976:
case 2712:
case 1698:
case 181:
case 1750:
case 1691:
case 3507:
case 2347:
case 3700:
case 1611:
case 3040:
case 234:
case 810:
case 419:
case 1649:
case 1529:
case 1330:
case 735:
case 1964:
case 1534:
case 3430:
case 1645:
case 2984:
case 3075:
case 3267:
case 1973:
case 2914:
case 3625:
case 12:
case 3154:
case 2455:
case 3629:
case 2309:
case 2942:
case 3080:
case 3541:
case 3006:
case 583:
case 644:
case 2255:
case 1503:
case 2387:
case 3827:
case 3467:
case 1472:
case 4030:
case 3553:
case 3548:
case 1056:
case 382:
case 3372:
case 2308:
case 720:
case 2002:
case 827:
case 1847:
case 1133:
case 3883:
case 1773:
case 2714:
case 3090:
case 3071:
case 2323:
case 231:
case 632:
case 2317:
case 3230:
case 1641:
case 1521:
case 2397:
case 1285:
case 2269:
case 1357:
case 3092:
case 2821:
case 3933:
case 1754:
case 3388:
case 1289:
case 2265:
case 330:
case 2468:
case 2828:
case 3704:
case 2693:
case 599:
case 254:
case 3044:
case 140:
case 2547:
case 2627:
case 3307:
case 72:
case 1024:
case 2096:
case 3370:
case 2077:
case 3574:
case 1498:
case 833:
case 1295:
case 3082:
case 3398:
case 2940:
case 3173:
case 3315:
case 933:
case 1499:
case 4057:
case 74:
case 1270:
case 3319:
case 405:
case 1211:
case 3399:
case 120:
case 3389:
case 1288:
case 1146:
case 472:
case 325:
case 3432:
case 3257:
case 1332:
case 578:
case 3428:
case 16:
case 2131:
case 3702:
case 1328:
case 2778:
case 3229:
case 3094:
case 2597:
case 1752:
case 902:
case 2771:
case 3234:
case 652:
case 2857:
case 2643:
case 594:
case 259:
case 2975:
case 1303:
case 2706:
case 4025:
case 3403:
case 2501:
case 258:
case 1937:
case 3348:
case 156:
case 193:
case 81:
case 4029:
case 1245:
case 3345:
case 4021:
case 1253:
case 1186:
case 500:
case 2509:
case 3630:
case 788:
case 3349:
case 3203:
case 4028:
case 173:
case 2655:
case 2135:
case 3429:
case 1960:
case 487:
case 1530:
case 1737:
case 1329:
case 2779:
case 3228:
case 3865:
case 2659:
case 2139:
case 4003:
case 3162:
case 1196:
case 2124:
case 117:
case 2906:
case 2980:
case 1116:
case 245:
case 729:
case 2388:
case 2457:
case 3461:
case 515:
case 563:
case 1050:
case 2563:
case 3821:
case 2933:
case 703:
case 362:
case 2381:
case 3000:
case 3828:
case 2044:
case 2370:
case 3016:
case 3683:
case 1647:
case 3096:
case 164:
case 152:
case 1062:
case 1848:
case 3236:
case 1513:
case 4069:
case 59:
case 66:
case 4065:
case 2082:
case 3940:
case 2126:
case 617:
case 1336:
case 4061:
case 2399:
case 1142:
case 2319:
case 3465:
case 3122:
case 2389:
case 749:
case 225:
case 2432:
case 914:
case 741:
case 3469:
case 3829:
case 447:
case 3261:
case 2257:
case 1184:
case 3834:
case 2868:
case 2042:
case 266:
case 1807:
case 2702:
case 3778:
case 1881:
case 3790:
case 1073:
case 3517:
case 168:
case 385:
case 1888:
case 3138:
case 811:
case 2861:
case 2234:
case 410:
case 1687:
case 169:
case 161:
case 1898:
case 3975:
case 358:
case 1617:
case 640:
case 1697:
case 1558:
case 3501:
case 818:
case 2348:
case 1551:
case 2572:
case 25:
case 635:
case 1756:
case 1811:
case 2353:
case 3505:
case 1819:
case 1144:
case 78:
case 2345:
case 918:
case 3990:
case 3971:
case 2836:
case 3910:
case 3978:
case 1895:
case 2349:
case 2630:
case 2150:
case 1555:
case 3166:
case 2429:
case 3135:
case 1885:
case 2869:
case 476:
case 3832:
case 1609:
case 2162:
case 3659:
case 3980:
case 744:
case 3124:
case 911:
case 3982:
case 1935:
case 2589:
case 3156:
case 2160:
case 3283:
case 1247:
case 887:
case 2585:
case 2977:
case 4093:
case 1924:
case 2996:
case 1180:
case 1106:
case 62:
case 2595:
case 3944:
case 4083:
case 467:
case 3669:
case 501:
case 761:
case 2900:
case 2152:
case 2632:
case 1171:
case 3033:
case 2519:
case 3992:
case 3227:
case 3293:
case 475:
case 3665:
case 2859:
case 1966:
case 3427:
case 2796:
case 1724:
case 1393:
case 277:
case 2716:
case 1872:
case 2851:
case 2777:
case 2511:
case 1327:
case 3413:
case 2591:
case 2843:
case 3661:
case 543:
case 684:
case 213:
case 265:
case 3782:
case 2858:
case 1735:
case 2363:
case 1766:
case 2588:
case 64:
case 1561:
case 1931:
case 3712:
case 2786:
case 3347:
case 1938:
case 1568:
case 3004:
case 144:
case 1383:
case 250:
case 3483:
case 334:
case 2040:
case 1922:
case 1217:
case 4051:
case 1276:
case 557:
case 3984:
case 2075:
case 2267:
case 1359:
case 504:
case 1405:
case 3251:
case 3459:
case 2545:
case 2625:
case 3914:
case 3305:
case 226:
case 3243:
case 1409:
case 1287:
case 1355:
case 3942:
case 2549:
case 2629:
case 3455:
case 805:
case 1487:
case 1358:
case 3784:
case 2621:
case 2080:
case 338:
case 3443:
case 2746:
case 3255:
case 1343:
case 148:
case 1408:
case 3451:
case 2553:
case 23:
case 282:
case 905:
case 3308:
case 1722:
case 2548:
case 1874:
case 3742:
case 4055:
case 2883:
case 3002:
case 688:
case 2078:
case 3794:
case 1497:
case 660:
case 2071:
case 972:
case 2090:
case 339:
case 1417:
case 3323:
case 1476:
case 3397:
case 141:
case 1423:
case 2230:
case 3317:
case 2335:
case 1654:
case 1134:
case 2846:
case 2482:
case 3416:
case 2640:
case 2339:
case 2727:
case 3496:
case 1316:
case 1822:
case 671:
case 3604:
case 1462:
case 137:
case 3477:
case 1396:
case 2713:
case 1125:
case 1504:
case 3486:
case 826:
case 3400:
case 3145:
case 3068:
case 2783:
case 678:
case 1300:
case 1386:
case 3894:
case 3814:
case 982:
case 3350:
case 2366:
case 2492:
case 1450:
case 743:
case 2993:
case 292:
case 926:
case 701:
case 2913:
case 3069:
case 407:
case 2292:
case 1250:
case 4016:
case 2212:
case 3148:
case 3286:
case 3153:
case 3296:
case 1533:
case 3216:
case 580:
case 2331:
case 1121:
case 698:
case 2282:
case 454:
case 4086:
case 3767:
case 2678:
case 1464:
case 3602:
case 2896:
case 2322:
case 287:
case 3930:
case 2751:
case 17:
case 3364:
case 2556:
case 3189:
case 950:
case 2484:
case 2671:
case 600:
case 3882:
case 1652:
case 790:
case 3185:
case 2414:
case 1866:
case 3892:
case 977:
case 2680:
case 2886:
case 913:
case 965:
case 2442:
case 3844:
case 3199:
case 3119:
case 1660:
case 458:
case 3170:
case 2958:
case 704:
case 2943:
case 877:
case 19:
case 353:
case 396:
case 3118:
case 1972:
case 2951:
case 3730:
case 2679:
case 2284:
case 1637:
case 3246:
case 115:
case 1831:
case 850:
case 459:
case 2675:
case 3107:
case 3433:
case 1719:
case 2961:
case 3957:
case 77:
case 395:
case 1988:
case 2736:
case 1795:
case 1715:
case 219:
case 2538:
case 2197:
case 2117:
case 1911:
case 1785:
case 2101:
case 2187:
case 1254:
case 3879:
case 116:
case 3204:
case 2765:
case 2240:
case 1918:
case 1167:
case 1998:
case 3875:
case 3677:
case 2768:
case 3696:
case 2802:
case 3878:
case 170:
case 2105:
case 2440:
case 3083:
case 1304:
case 3890:
case 2682:
case 3871:
case 422:
case 3810:
case 3354:
case 1788:
case 4033:
case 79:
case 1999:
case 763:
case 1650:
case 1798:
case 2612:
case 966:
case 1989:
case 3027:
case 1596:
case 2969:
case 3686:
case 2539:
case 1791:
case 1770:
case 2280:
case 2206:
case 1005:
case 1260:
case 2833:
case 737:
case 925:
case 830:
case 214:
case 3725:
case 532:
case 2278:
case 2475:
case 3202:
case 58:
case 1941:
case 1252:
case 3337:
case 2030:
case 1437:
case 3734:
case 2479:
case 3646:
case 1945:
case 1452:
case 3573:
case 1076:
case 101:
case 1237:
case 3721:
case 1023:
case 3352:
case 1302:
case 1949:
case 3840:
case 2275:
case 3402:
case 1664:
case 1753:
case 2067:
case 3934:
case 3564:
case 3360:
case 206:
case 3043:
case 2480:
case 3058:
case 3925:
case 1001:
case 1626:
case 825:
case 1546:
case 3703:
case 108:
case 2957:
case 643:
case 3531:
case 584:
case 1220:
case 2433:
case 3961:
case 3736:
case 851:
case 3123:
case 319:
case 778:
case 3176:
case 450:
case 885:
case 3197:
case 183:
case 771:
case 3769:
case 477:
case 1143:
case 2879:
case 21:
case 465:
case 536:
case 2204:
case 1631:
case 2172:
case 1159:
case 2677:
case 3440:
case 798:
case 267:
case 1624:
case 608:
case 2878:
case 1635:
case 2354:
case 3936:
case 3682:
case 2890:
case 1852:
case 2757:
case 2550:
case 1063:
case 3761:
case 2806:
case 2880:
case 3965:
case 1666:
case 1582:
case 1420:
case 2233:
case 1860:
case 959:
case 497:
case 3524:
case 3644:
case 951:
case 2932:
case 3320:
case 202:
case 2093:
case 799:
case 601:
case 3969:
case 2600:
case 791:
case 609:
case 616:
case 3280:
case 2163:
case 2055:
case 589:
case 3833:
case 1183:
case 3147:
case 1256:
case 4010:
case 2059:
case 690:
case 1375:
case 2903:
case 700:
case 1113:
case 2725:
case 774:
case 3278:
case 3475:
case 2202:
case 5:
case 1379:
case 2337:
case 3210:
case 482:
case 3271:
case 2734:
case 3479:
case 588:
case 3030:
case 3490:
case 2573:
case 1514:
case 3410:
case 1594:
case 2646:
case 2526:
case 907:
case 2721:
case 1371:
case 2352:
case 3279:
case 2728:
case 3356:
case 3067:
case 2564:
case 2051:
case 10:
case 306:
case 2360:
case 2043:
case 794:
case 3480:
case 1584:
case 4075:
case 670:
case 962:
case 2058:
case 2925:
case 3694:
case 1018:
case 1382:
case 2884:
case 1435:
case 3846:
case 1424:
case 3640:
case 2416:
case 1231:
case 3713:
case 1439:
case 1011:
case 425:
case 372:
case 517:
case 1070:
case 2604:
case 2842:
case 174:
case 100:
case 1747:
case 3783:
case 2814:
case 1873:
case 1392:
case 2350:
case 305:
case 1466:
case 2894:
case 1312:
case 3492:
case 3913:
case 1266:
case 1085:
case 3993:
case 3032:
case 3212:
case 2141:
case 3292:
case 2148:
case 2286:
case 2200:
case 593:
case 2633:
case 2153:
case 615:
case 3244:
case 4092:
case 69:
case 227:
case 2296:
case 1099:
case 70:
case 445:
case 3331:
case 1239:
case 2277:
case 3338:
case 4044:
case 3983:
case 430:
case 1438:
case 839:
case 831:
case 387:
case 1708:
case 2767:
case 3896:
case 1048:
case 1165:
case 1787:
case 3484:
case 1506:
case 3758:
case 1384:
case 3610:
case 3003:
case 1701:
case 178:
case 3671:
case 986:
case 3414:
case 2552:
case 1590:
case 1571:
case 2812:
case 1776:
case 2326:
case 1394:
case 1723:
case 3021:
case 1905:
case 783:
case 179:
case 2373:
case 3886:
case 1656:
case 822:
case 1136:
case 2119:
case 1909:
case 2199:
case 2111:
case 842:
case 3025:
case 198:
case 3242:
case 1575:
case 253:
case 3951:
case 2118:
case 2730:
case 1908:
case 2967:
case 1579:
case 1709:
case 3284:
case 4042:
case 466:
case 535:
case 2246:
case 3755:
case 2188:
case 191:
case 3675:
case 1976:
case 210:
case 834:
case 199:
case 1923:
case 1917:
case 1222:
case 4014:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1770793201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,];
var gg_b = "1770793201/";

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
