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
case 262:
case 1917:
case 3577:
case 1672:
case 38:
case 1712:
case 1889:
case 2761:
case 1093:
case 3772:
case 2877:
case 3190:
case 273:
case 2122:
case 1517:
case 2608:
case 3612:
case 2262:
case 3097:
case 1211:
case 2535:
case 760:
case 2243:
case 3053:
case 1841:
case 2838:
case 1973:
case 604:
case 1150:
case 84:
case 1528:
case 190:
case 2935:
case 1414:
case 1148:
case 2643:
case 4:
case 4007:
case 2487:
case 2662:
case 1611:
case 945:
case 1088:
case 1286:
case 960:
case 1479:
case 3711:
case 23:
case 216:
case 1867:
case 2584:
case 2942:
case 3212:
case 2196:
case 2747:
case 1328:
case 3338:
case 495:
case 401:
case 2963:
case 1428:
case 2260:
case 3666:
case 1595:
case 85:
case 1514:
case 2649:
case 2027:
case 2874:
case 873:
case 3413:
case 1473:
case 1766:
case 795:
case 1995:
case 2435:
case 140:
case 3574:
case 2681:
case 7:
case 3002:
case 1075:
case 1417:
case 1670:
case 3546:
case 2033:
case 4026:
case 420:
case 1379:
case 3858:
case 2846:
case 2387:
case 2855:
case 4051:
case 935:
case 3094:
case 3015:
case 531:
case 3610:
case 3946:
case 83:
case 816:
case 460:
case 1314:
case 1883:
case 2442:
case 663:
case 1109:
case 2776:
case 3840:
case 3126:
case 3374:
case 1136:
case 2819:
case 1191:
case 3355:
case 2782:
case 591:
case 505:
case 3266:
case 680:
case 2987:
case 995:
case 1579:
case 3919:
case 483:
case 1001:
case 1979:
case 3068:
case 551:
case 612:
case 3636:
case 3468:
case 560:
case 3751:
case 876:
case 1885:
case 1736:
case 3726:
case 1709:
case 545:
case 2465:
case 1204:
case 3459:
case 1988:
case 1651:
case 3353:
case 2084:
case 3252:
case 2042:
case 2539:
case 3397:
case 2144:
case 1791:
case 1829:
case 3806:
case 451:
case 583:
case 268:
case 3652:
case 3077:
case 2924:
case 1557:
case 3402:
case 20:
case 1017:
case 2524:
case 2433:
case 315:
case 1752:
case 1166:
case 2306:
case 1073:
case 1110:
case 3209:
case 1692:
case 2630:
case 1226:
case 1454:
case 1028:
case 1604:
case 486:
case 654:
case 2720:
case 3792:
case 3170:
case 1599:
case 2645:
case 2040:
case 3250:
case 2180:
case 1171:
case 786:
case 276:
case 731:
case 4086:
case 1999:
case 3648:
case 2406:
case 2439:
case 2621:
case 1901:
case 868:
case 3968:
case 3559:
case 1079:
case 2318:
case 2868:
case 3302:
case 1375:
case 501:
case 3315:
case 595:
case 3865:
case 2965:
case 1488:
case 905:
case 3019:
case 2161:
case 371:
case 3603:
case 1112:
case 80:
case 1095:
case 828:
case 1014:
case 1954:
case 2527:
case 1703:
case 3074:
case 213:
case 1837:
case 3453:
case 3172:
case 931:
case 1878:
case 2894:
case 3359:
case 2069:
case 3994:
case 1575:
case 2245:
case 3915:
case 2058:
case 678:
case 2918:
case 2221:
case 1975:
case 3515:
case 2933:
case 1750:
case 3707:
case 3368:
case 1397:
case 278:
case 4066:
case 3791:
case 457:
case 1252:
case 582:
case 1691:
case 854:
case 2929:
case 549:
case 3829:
case 497:
case 1751:
case 1300:
case 3357:
case 3885:
case 2067:
case 3401:
case 1609:
case 3393:
case 1636:
case 1468:
case 866:
case 2585:
case 410:
case 3988:
case 1459:
case 3651:
case 570:
case 4010:
case 2334:
case 1597:
case 3692:
case 437:
case 2025:
case 3226:
case 300:
case 2620:
case 3073:
case 1704:
case 3110:
case 2329:
case 2181:
case 2730:
case 1953:
case 1170:
case 3604:
case 1038:
case 2437:
case 2041:
case 1500:
case 2478:
case 1494:
case 2934:
case 1077:
case 1824:
case 3834:
case 812:
case 3388:
case 2385:
case 2149:
case 1900:
case 1291:
case 2534:
case 3475:
case 3017:
case 3957:
case 1302:
case 507:
case 1203:
case 2801:
case 3901:
case 2485:
case 2222:
case 1968:
case 997:
case 3079:
case 294:
case 3501:
case 1568:
case 1959:
case 3488:
case 1394:
case 4012:
case 1315:
case 1865:
case 2721:
case 559:
case 60:
case 628:
case 3748:
case 3599:
case 266:
case 844:
case 1250:
case 1648:
case 2631:
case 2756:
case 2162:
case 447:
case 2083:
case 1111:
case 3354:
case 1502:
case 3607:
case 1994:
case 2978:
case 1650:
case 3575:
case 226:
case 1186:
case 234:
case 1359:
case 668:
case 4071:
case 2875:
case 3301:
case 1818:
case 937:
case 1707:
case 3493:
case 1248:
case 1594:
case 3457:
case 1515:
case 2231:
case 539:
case 3095:
case 2296:
case 3014:
case 3954:
case 2537:
case 2622:
case 488:
case 3399:
case 171:
case 1603:
case 3837:
case 212:
case 1172:
case 797:
case 1497:
case 1074:
case 3841:
case 1938:
case 3928:
case 2941:
case 1474:
case 350:
case 2525:
case 3495:
case 1538:
case 3528:
case 3686:
case 2280:
case 2541:
case 2925:
case 3825:
case 1513:
case 3973:
case 1107:
case 280:
case 3150:
case 4048:
case 18:
case 3712:
case 2367:
case 2817:
case 2708:
case 1605:
case 439:
case 2989:
case 3917:
case 2247:
case 1577:
case 2589:
case 3517:
case 1977:
case 1455:
case 1612:
case 317:
case 1190:
case 2132:
case 3705:
case 782:
case 949:
case 4003:
case 2464:
case 2647:
case 2325:
case 2483:
case 818:
case 1338:
case 1842:
case 2341:
case 2261:
case 1419:
case 1377:
case 1711:
case 2389:
case 2145:
case 2762:
case 3317:
case 2680:
case 2967:
case 3479:
case 1104:
case 4009:
case 3379:
case 1858:
case 759:
case 537:
case 1555:
case 3670:
case 1546:
case 2078:
case 1094:
case 1955:
case 1946:
case 1770:
case 379:
case 1192:
case 1869:
case 2781:
case 365:
case 1438:
case 707:
case 3595:
case 3514:
case 2441:
case 2998:
case 2425:
case 3054:
case 939:
case 3473:
case 2364:
case 4091:
case 3152:
case 1266:
case 204:
case 325:
case 1919:
case 1346:
case 1355:
case 557:
case 2760:
case 3001:
case 2644:
case 3979:
case 1519:
case 823:
case 3099:
case 999:
case 2676:
case 129:
case 673:
case 3395:
case 509:
case 2716:
case 1151:
case 65:
case 662:
case 1126:
case 2398:
case 3136:
case 69:
case 2583:
case 3122:
case 373:
case 172:
case 2190:
case 546:
case 3024:
case 2977:
case 793:
case 3469:
case 1247:
case 362:
case 753:
case 2605:
case 77:
case 211:
case 933:
case 4031:
case 2835:
case 2107:
case 1925:
case 3935:
case 2271:
case 1525:
case 3813:
case 3363:
case 3535:
case 3262:
case 2938:
case 1828:
case 2786:
case 406:
case 3384:
case 2671:
case 1743:
case 1680:
case 443:
case 316:
case 665:
case 1121:
case 2377:
case 3131:
case 3643:
case 2419:
case 3208:
case 953:
case 485:
case 3984:
case 1341:
case 2338:
case 3335:
case 3563:
case 1483:
case 1325:
case 1647:
case 1029:
case 3039:
case 2205:
case 88:
case 1814:
case 1749:
case 1598:
case 3435:
case 1441:
case 1998:
case 2974:
case 2438:
case 3260:
case 3340:
case 564:
case 2413:
case 3874:
case 1781:
case 3120:
case 3846:
case 2946:
case 3216:
case 2477:
case 2955:
case 2015:
case 906:
case 2094:
case 269:
case 2546:
case 1276:
case 2555:
case 34:
case 2002:
case 3681:
case 2858:
case 1023:
case 556:
case 3940:
case 3484:
case 1583:
case 2374:
case 3463:
case 2126:
case 2840:
case 1716:
case 4020:
case 943:
case 706:
case 1676:
case 3281:
case 2519:
case 1644:
case 3587:
case 1467:
case 1682:
case 1760:
case 650:
case 3358:
case 3782:
case 524:
case 2355:
case 118:
case 690:
case 2346:
case 985:
case 3744:
case 3819:
case 2919:
case 47:
case 536:
case 581:
case 1334:
case 3176:
case 2459:
case 1585:
case 2636:
case 2300:
case 2751:
case 593:
case 1160:
case 2839:
case 3939:
case 903:
case 746:
case 827:
case 57:
case 1529:
case 2353:
case 481:
case 424:
case 3144:
case 178:
case 2397:
case 3182:
case 3524:
case 328:
case 30:
case 1893:
case 1089:
case 2900:
case 1385:
case 1857:
case 3433:
case 871:
case 2824:
case 2652:
case 2415:
case 2500:
case 3853:
case 1437:
case 2997:
case 3897:
case 2792:
case 2953:
case 2013:
case 3720:
case 1181:
case 2704:
case 2553:
case 4076:
case 3306:
case 684:
case 3035:
case 2236:
case 3630:
case 2209:
case 2597:
case 1899:
case 2111:
case 1745:
case 1756:
case 3621:
case 796:
case 1429:
case 3439:
case 1631:
case 1064:
case 3406:
case 756:
case 3645:
case 1337:
case 1721:
case 2865:
case 3147:
case 600:
case 936:
case 91:
case 981:
case 2394:
case 2959:
case 3087:
case 3965:
case 2968:
case 1485:
case 764:
case 3565:
case 154:
case 403:
case 3868:
case 1098:
case 2790:
case 112:
case 446:
case 1732:
case 2827:
case 313:
case 815:
case 736:
case 1622:
case 3632:
case 3527:
case 267:
case 1296:
case 3058:
case 2400:
case 956:
case 3802:
case 2368:
case 2707:
case 3933:
case 1875:
case 1923:
case 2359:
case 3894:
case 134:
case 2186:
case 506:
case 1523:
case 3424:
case 2046:
case 2650:
case 2502:
case 1939:
case 758:
case 168:
case 2499:
case 2829:
case 3160:
case 884:
case 4049:
case 1539:
case 798:
case 3529:
case 821:
case 1084:
case 2651:
case 671:
case 2988:
case 344:
case 3585:
case 3334:
case 1324:
case 667:
case 2736:
case 938:
case 2393:
case 1230:
case 3220:
case 2626:
case 2588:
case 2401:
case 3985:
case 2292:
case 219:
case 3730:
case 4016:
case 1427:
case 3041:
case 3437:
case 1853:
case 2028:
case 200:
case 1035:
case 1630:
case 1339:
case 448:
case 1306:
case 3149:
case 2993:
case 508:
case 3423:
case 3857:
case 2957:
case 1524:
case 2017:
case 10:
case 2475:
case 514:
case 474:
case 3089:
case 2557:
case 861:
case 702:
case 4060:
case 877:
case 2488:
case 1087:
case 1965:
case 221:
case 394:
case 1147:
case 3378:
case 1318:
case 987:
case 2079:
case 3485:
case 3323:
case 354:
case 2901:
case 1621:
case 1439:
case 438:
case 3083:
case 176:
case 3756:
case 1327:
case 3337:
case 3721:
case 1040:
case 366:
case 748:
case 1645:
case 2207:
case 2493:
case 1802:
case 3875:
case 3923:
case 3231:
case 2975:
case 1221:
case 1918:
case 1058:
case 948:
case 326:
case 1245:
case 2575:
case 1518:
case 2607:
case 1069:
case 1815:
case 277:
case 312:
case 3732:
case 2837:
case 458:
case 113:
case 2554:
case 1927:
case 3098:
case 2703:
case 3622:
case 1632:
case 2954:
case 1527:
case 2014:
case 3296:
case 2399:
case 3925:
case 1935:
case 2528:
case 2686:
case 2150:
case 2973:
case 1342:
case 879:
case 4045:
case 1813:
case 1363:
case 1535:
case 2103:
case 865:
case 1024:
case 1608:
case 76:
case 2517:
case 3589:
case 1469:
case 2705:
case 1122:
case 173:
case 3132:
case 558:
case 2093:
case 1761:
case 2889:
case 3367:
case 3247:
case 162:
case 908:
case 363:
case 825:
case 1208:
case 72:
case 1440:
case 1942:
case 3647:
case 992:
case 3029:
case 2272:
case 3464:
case 323:
case 96:
case 122:
case 4032:
case 2317:
case 13:
case 3145:
case 3085:
case 3967:
case 3680:
case 2286:
case 1487:
case 1780:
case 1131:
case 732:
case 2148:
case 2771:
case 1216:
case 742:
case 3078:
case 850:
case 3781:
case 1120:
case 3130:
case 1855:
case 279:
case 1387:
case 548:
case 2710:
case 3276:
case 2417:
case 2670:
case 14:
case 1569:
case 1681:
case 3489:
case 3244:
case 1435:
case 414:
case 3425:
case 574:
case 2473:
case 408:
case 2898:
case 2514:
case 265:
case 3760:
case 1358:
case 3644:
case 1587:
case 2001:
case 1249:
case 1987:
case 225:
case 304:
case 1782:
case 452:
case 2191:
case 1744:
case 1819:
case 1369:
case 3583:
case 3398:
case 1776:
case 2109:
case 1442:
case 1484:
case 611:
case 3564:
case 1540:
case 2883:
case 2314:
case 989:
case 2395:
case 2522:
case 2637:
case 1259:
case 391:
case 3404:
case 767:
case 236:
case 1903:
case 3177:
case 2890:
case 2727:
case 1268:
case 2922:
case 803:
case 3654:
case 3675:
case 1550:
case 1602:
case 658:
case 1128:
case 529:
case 2623:
case 3715:
case 3702:
case 2718:
case 2135:
case 1775:
case 1615:
case 1950:
case 2733:
case 1010:
case 2678:
case 3907:
case 1173:
case 2322:
case 2223:
case 3390:
case 1303:
case 3275:
case 1491:
case 1948:
case 4013:
case 1215:
case 1548:
case 4038:
case 1856:
case 602:
case 3307:
case 2237:
case 967:
case 3254:
case 2163:
case 415:
case 575:
case 1409:
case 3896:
case 2184:
case 971:
case 3759:
case 3657:
case 2229:
case 3072:
case 203:
case 1600:
case 427:
case 3693:
case 2724:
case 1114:
case 1195:
case 715:
case 1450:
case 824:
case 1793:
case 2061:
case 3407:
case 2520:
case 674:
case 1697:
case 3904:
case 2804:
case 1653:
case 3797:
case 3146:
case 3155:
case 1403:
case 2169:
case 1830:
case 3820:
case 3753:
case 2285:
case 3504:
case 4055:
case 1253:
case 3688:
case 1509:
case 1936:
case 3551:
case 3926:
case 1909:
case 2496:
case 2685:
case 2826:
case 467:
case 3293:
case 2320:
case 2187:
case 3392:
case 3257:
case 2047:
case 1991:
case 1200:
case 471:
case 2234:
case 1591:
case 1179:
case 2739:
case 206:
case 729:
case 1246:
case 66:
case 692:
case 335:
case 1366:
case 2683:
case 833:
case 1188:
case 652:
case 3876:
case 2740:
case 2031:
case 969:
case 2664:
case 48:
case 1471:
case 2944:
case 2480:
case 3295:
case 3882:
case 567:
case 2787:
case 3844:
case 1310:
case 2106:
case 2298:
case 1274:
case 2376:
case 1003:
case 527:
case 3774:
case 3279:
case 893:
case 3695:
case 1566:
case 3486:
case 1219:
case 1674:
case 1193:
case 1966:
case 301:
case 1157:
case 87:
case 1795:
case 775:
case 1714:
case 1849:
case 3100:
case 608:
case 2758:
case 769:
case 2461:
case 199:
case 3970:
case 3472:
case 3153:
case 243:
case 2283:
case 2382:
case 2870:
case 3511:
case 2225:
case 2482:
case 3880:
case 1305:
case 3273:
case 469:
case 1312:
case 2361:
case 1213:
case 4015:
case 2811:
case 3051:
case 3911:
case 1571:
case 2580:
case 3228:
case 2547:
case 1277:
case 689:
case 3168:
case 642:
case 2784:
case 911:
case 3217:
case 1091:
case 2763:
case 2289:
case 3861:
case 1154:
case 78:
case 1717:
case 1808:
case 27:
case 1912:
case 1677:
case 1410:
case 2961:
case 253:
case 1505:
case 3972:
case 149:
case 3617:
case 2689:
case 293:
case 1905:
case 383:
case 182:
case 4068:
case 3777:
case 2872:
case 3738:
case 1728:
case 3673:
case 3713:
case 843:
case 360:
case 3986:
case 2267:
case 1773:
case 2641:
case 3628:
case 1466:
case 1638:
case 2118:
case 170:
case 2735:
case 3102:
case 1882:
case 1844:
case 1719:
case 4057:
case 3471:
case 1214:
case 1295:
case 82:
case 2560:
case 3619:
case 2960:
case 3310:
case 2443:
case 2764:
case 3816:
case 135:
case 2185:
case 3366:
case 693:
case 3255:
case 3246:
case 2916:
case 2640:
case 2516:
case 1876:
case 359:
case 3050:
case 3646:
case 1:
case 2581:
case 1007:
case 4088:
case 2810:
case 0:
case 779:
case 1197:
case 289:
case 399:
case 3405:
case 2658:
case 2549:
case 86:
case 3566:
case 155:
case 307:
case 3003:
case 1774:
case 3157:
case 2316:
case 2866:
case 2949:
case 3674:
case 584:
case 195:
case 2287:
case 2663:
case 1168:
case 465:
case 3101:
case 3277:
case 2642:
case 2684:
case 22:
case 1159:
case 440:
case 4054:
case 1847:
case 1880:
case 1273:
case 2543:
case 2871:
case 685:
case 1026:
case 120:
case 3036:
case 3009:
case 1051:
case 3238:
case 3862:
case 3312:
case 3213:
case 3199:
case 750:
case 2030:
case 842:
case 2635:
case 1986:
case 1738:
case 3728:
case 1673:
case 3175:
case 370:
case 3773:
case 2449:
case 1628:
case 1586:
case 1004:
case 2123:
case 3912:
case 1572:
case 2242:
case 3410:
case 252:
case 2284:
case 2343:
case 3154:
case 1311:
case 2789:
case 3717:
case 3808:
case 2805:
case 183:
case 2137:
case 3371:
case 1777:
case 3512:
case 26:
case 1972:
case 2508:
case 1617:
case 2481:
case 292:
case 2778:
case 838:
case 1138:
case 1715:
case 3550:
case 309:
case 1070:
case 1299:
case 1507:
case 2723:
case 3452:
case 3010:
case 3694:
case 1907:
case 2125:
case 310:
case 2345:
case 3503:
case 2356:
case 2189:
case 984:
case 921:
case 2627:
case 1590:
case 191:
case 1404:
case 3066:
case 2430:
case 2932:
case 802:
case 1990:
case 1201:
case 397:
case 2803:
case 777:
case 3903:
case 287:
case 1177:
case 3348:
case 2737:
case 1451:
case 2227:
case 961:
case 3659:
case 2060:
case 858:
case 3701:
case 3350:
case 1896:
case 4017:
case 540:
case 1759:
case 1426:
case 721:
case 3409:
case 248:
case 3303:
case 3202:
case 3491:
case 337:
case 1390:
case 4028:
case 3845:
case 603:
case 2167:
case 2521:
case 579:
case 3215:
case 1288:
case 700:
case 2530:
case 141:
case 2432:
case 1086:
case 1146:
case 3830:
case 1326:
case 2734:
case 887:
case 3552:
case 2206:
case 3600:
case 2008:
case 3450:
case 2624:
case 3952:
case 1407:
case 1700:
case 421:
case 656:
case 3195:
case 2852:
case 3757:
case 2639:
case 2421:
case 1257:
case 3991:
case 3200:
case 2330:
case 1293:
case 1119:
case 874:
case 4014:
case 1304:
case 517:
case 2224:
case 2456:
case 1951:
case 1011:
case 1688:
case 1526:
case 2062:
case 3297:
case 3352:
case 919:
case 550:
case 2836:
case 590:
case 636:
case 3936:
case 61:
case 3071:
case 1926:
case 848:
case 3909:
case 468:
case 1737:
case 2822:
case 3727:
case 1321:
case 3890:
case 2492:
case 1803:
case 2654:
case 3922:
case 1430:
case 2404:
case 324:
case 2590:
case 1532:
case 1049:
case 1356:
case 4084:
case 31:
case 3135:
case 2702:
case 2907:
case 3678:
case 1723:
case 2113:
case 2507:
case 2299:
case 1618:
case 2070:
case 2675:
case 3623:
case 1778:
case 2794:
case 976:
case 3278:
case 1945:
case 396:
case 3531:
case 1016:
case 1521:
case 776:
case 286:
case 1233:
case 54:
case 3322:
case 2699:
case 1218:
case 356:
case 1556:
case 3076:
case 2601:
case 3996:
case 3082:
case 3163:
case 2426:
case 2759:
case 3184:
case 428:
case 174:
case 2896:
case 2768:
case 913:
case 3237:
case 1227:
case 4087:
case 2700:
case 637:
case 3061:
case 728:
case 891:
case 805:
case 1008:
case 968:
case 102:
case 1206:
case 2072:
case 3229:
case 3724:
case 1734:
case 2174:
case 2326:
case 2820:
case 3169:
case 3892:
case 2146:
case 2086:
case 2504:
case 516:
case 1432:
case 476:
case 241:
case 2904:
case 1530:
case 2288:
case 3158:
case 4040:
case 3804:
case 3685:
case 3496:
case 2551:
case 1836:
case 657:
case 1809:
case 3140:
case 1164:
case 4069:
case 886:
case 2688:
case 2011:
case 1456:
case 3234:
case 1445:
case 2304:
case 3706:
case 59:
case 3320:
case 562:
case 1330:
case 928:
case 1606:
case 3047:
case 1421:
case 2257:
case 1639:
case 3740:
case 3683:
case 3664:
case 820:
case 3447:
case 1516:
case 3976:
case 1783:
case 1269:
case 1056:
case 682:
case 1640:
case 1916:
case 1045:
case 1349:
case 649:
case 1764:
case 3106:
case 3139:
case 3582:
case 1462:
case 2411:
case 3298:
case 513:
case 3982:
case 670:
case 3480:
case 2844:
case 2370:
case 1949:
case 1866:
case 385:
case 1316:
case 2774:
case 4039:
case 4006:
case 2090:
case 255:
case 2695:
case 3022:
case 1981:
case 43:
case 3264:
case 2153:
case 2472:
case 576:
case 2746:
case 3870:
case 3283:
case 3344:
case 1360:
case 1669:
case 2570:
case 1408:
case 1943:
case 3361:
case 2911:
case 2051:
case 3980:
case 1562:
case 3482:
case 3225:
case 1235:
case 2511:
case 44:
case 1871:
case 1543:
case 2273:
case 2372:
case 4018:
case 2880:
case 2386:
case 528:
case 3742:
case 3784:
case 95:
case 3547:
case 1416:
case 973:
case 1663:
case 2617:
case 2972:
case 16:
case 568:
case 2777:
case 3380:
case 3127:
case 1137:
case 1812:
case 1362:
case 1263:
case 2311:
case 4065:
case 762:
case 3961:
case 1343:
case 152:
case 1242:
case 2572:
case 3133:
case 2586:
case 245:
case 8:
case 1725:
case 93:
case 3347:
case 3886:
case 2738:
case 3267:
case 2986:
case 260:
case 1030:
case 3960:
case 1544:
case 2274:
case 1298:
case 2619:
case 512:
case 1106:
case 2779:
case 3129:
case 1139:
case 3381:
case 463:
case 1787:
case 718:
case 3560:
case 704:
case 1480:
case 1944:
case 2048:
case 3021:
case 3516:
case 480:
case 1740:
case 1683:
case 2366:
case 526:
case 3349:
case 3764:
case 3269:
case 3056:
case 3916:
case 2246:
case 389:
case 1382:
case 3658:
case 342:
case 2405:
case 2510:
case 299:
case 3581:
case 1461:
case 2910:
case 3240:
case 259:
case 3408:
case 3360:
case 870:
case 594:
case 3866:
case 185:
case 3316:
case 620:
case 2157:
case 3287:
case 2966:
case 2193:
case 904:
case 3949:
case 2566:
case 1022:
case 3032:
case 3798:
case 554:
case 2003:
case 423:
case 1124:
case 32:
case 1947:
case 1476:
case 1784:
case 4037:
case 723:
case 3642:
case 2277:
case 3416:
case 3962:
case 2843:
case 2571:
case 2199:
case 1811:
case 2213:
case 1361:
case 3871:
case 3562:
case 1667:
case 2036:
case 1225:
case 1444:
case 2971:
case 780:
case 3725:
case 1735:
case 2638:
case 1133:
case 859:
case 1641:
case 899:
case 1020:
case 3030:
case 1347:
case 1380:
case 3137:
case 772:
case 3805:
case 193:
case 1689:
case 392:
case 807:
case 249:
case 36:
case 153:
case 1961:
case 763:
case 3284:
case 2677:
case 2410:
case 3242:
case 2912:
case 2717:
case 2808:
case 3263:
case 2154:
case 404:
case 966:
case 1678:
case 2010:
case 2950:
case 2452:
case 2615:
case 2775:
case 210:
case 1718:
case 734:
case 3633:
case 1396:
case 4067:
case 3778:
case 3618:
case 847:
case 209:
case 1420:
case 954:
case 1922:
case 3430:
case 3737:
case 1727:
case 1890:
case 2903:
case 1331:
case 3189:
case 181:
case 504:
case 2503:
case 136:
case 2066:
case 2259:
case 994:
case 478:
case 1184:
case 1142:
case 4089:
case 1765:
case 374:
case 2409:
case 2668:
case 1044:
case 1163:
case 1596:
case 3060:
case 912:
case 2701:
case 2856:
case 3167:
case 934:
case 2548:
case 3945:
case 2215:
case 3956:
case 3521:
case 2948:
case 2202:
case 156:
case 2303:
case 766:
case 348:
case 2821:
case 237:
case 1223:
case 1322:
case 3332:
case 3848:
case 1285:
case 3432:
case 2391:
case 2830:
case 1169:
case 338:
case 810:
case 1158:
case 2653:
case 1804:
case 3530:
case 1634:
case 2952:
case 2012:
case 857:
case 2757:
case 3852:
case 2195:
case 978:
case 2309:
case 1724:
case 3734:
case 2336:
case 523:
case 2600:
case 302:
case 2005:
case 3239:
case 1229:
case 2179:
case 2591:
case 3445:
case 2200:
case 2991:
case 3606:
case 1047:
case 1629:
case 3421:
case 1431:
case 288:
case 1320:
case 3330:
case 3836:
case 605:
case 1826:
case 3809:
case 837:
case 2071:
case 2297:
case 2509:
case 3183:
case 3164:
case 3043:
case 2253:
case 426:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748628001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,];
var gg_b = "1748628001/";

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
